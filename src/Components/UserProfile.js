import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UsersContext } from "../context";

const UserProfile = () => {
  let params = useParams();
  let usersContext = useContext(UsersContext);
  // console.log(usersContext.data)
  let user = usersContext.data.find(element => (element.id===params.id));

  return (
    <div className="container">
      <h1 className="my-4 text-secondary">Profile</h1>
      <hr></hr>
      {
        (user) ? ( 
          <div> 
            <div className="row">
              <div className="col-2">Name</div>
              <div className="col-1">:</div>
              <div className="col">{user.first_name + " " + user.last_name}</div>
            </div>
            <div className="row">
              <div className="col-2">Email</div>
              <div className="col-1">:</div>
              <div className="col">{user.email}</div>
            </div>
            <div className="row">
              <div className="col-2">Contact number</div>
              <div className="col-1">:</div>
              <div className="col">{user.mobile}</div>
            </div>
            <div className="row">
              <div className="col-2">Gender</div>
              <div className="col-1">:</div>
              <div className="col">{user.personGender}</div>
            </div>
          </div>
          
        ) : ( <p>Data not available</p> )
      }
    </div>
  )
}

export default UserProfile;