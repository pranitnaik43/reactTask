import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import UserForm from "./UserForm";
import info from "../info";

const EditProfile = () => {

  const params = useParams();
  const userId = params.id;   //get user id from from URL params
  const [user, setUser] = useState(null);

  useEffect(() => {
    // get user data from server
    let config = {
      url: process.env.REACT_APP_SERVER_URL+"/users/"+userId,
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    }
    axios(config).then(response => {
      let data = response.data;
      let userData = {
        "name": data.name,
        "email": data.email,
        "phone": data.phone,
        "age": data.age,
        "gender": data.gender
      }
      setUser(userData);
    });
  }, [userId]);  

  return ( 
    <>
      <div className="m-5">
        <h1 className="text-center text-primary">Edit Profile</h1>
        <hr/>
        {/* 
          user -> user data
          submitMethod -> method to be used while submiting form
          targetURL -> The URL to be hit for saving data
          nextURL -> redirect to this URL after submission of form
        */}
        <UserForm userData={user} submitMethod={"PUT"} targetURL={process.env.REACT_APP_SERVER_URL+ + "/users/" + userId} nextURL={"/users/view/"+userId}/>
      </div>
    </>
  );
}
 
export default EditProfile;