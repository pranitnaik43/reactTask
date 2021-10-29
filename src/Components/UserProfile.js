import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";

const UserProfile = () => {
  const params = useParams();
  const userId = params.id;
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    let config = {
      url: "http://localhost:3000/users/"+userId,
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    }
    axios(config).then(response => {
      let data = response.data;
      let userData = {
        "id": data._id,
        "name": data.name,
        "email": data.email,
        "phone": data.phone,
        "age": data.age,
        "gender": data.gender
      }
      setUser(userData);
    });
  }, [userId]);

  let capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  let goToEditPage = (userId) => {
    history.push("/users/edit/"+userId);
  }

  return ( 
    <>
      <div className="m-5">
        <h1 className="text-center text-primary">Profile</h1>
        <hr/>
        {
          (user) ? (
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8 col-md-4">
                <div>
                  {
                    Object.keys(user).map((key) => {
                      if(key==="id") return <React.Fragment key={ Math.random() }></React.Fragment>   //no row for id (don't display id)
                      else {
                        return (
                          <div className="row mt-3" key={ Math.random() }>
                            <div className="col-5 ">{ capitalizeFirstLetter(key) }</div>
                            <div className="col-2">:</div>
                            <div className="col-5">{ user[key] }</div>
                          </div>
                        )
                      }
                    })
                  }
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary mt-4" onClick={ () => goToEditPage(user.id) }>Edit</button>
                </div>
              </div>
            </div>
          ) : (<p> No user found </p>)
        }
      </div>
    </>
  );
}
 
export default UserProfile;