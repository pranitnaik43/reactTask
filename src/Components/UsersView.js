import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UsersContext } from "../context";

const UsersView = () => {

  const [users, setUsers] = useState(null);
  const usersContext = useContext(UsersContext);

  useEffect(() => {
    //ComponentDidMount

    // following is the template for getting fake data
    var data = {
      "token": "rQL40mpcvdw_7HCVhbX-2w",
      "data": {
        "id": "cryptoUUID",
        "first_name": "nameFirst",
        "last_name": "nameLast",
        "personGender": "personGender",
        "email": "internetEmail",
        "mobile": "phoneMobile",
        "_repeat": 5
      }
    }

    var config = {
      method: "post",
      url: "https://app.fakejson.com/q",
      headers: {
        'content-type': 'application/json'
      },
      data: JSON.stringify(data),
    }

    // axios(config).then(response => {
    //   // console.log(response);
    //   if(response) {
    //     console.log(response.data);
    //     usersContext.data = response.data;
    //     localStorage.setItem("data", JSON.stringify(response.data));
    //   }
    // });
    console.log(localStorage.getItem("data"));
    usersContext.data = JSON.parse(localStorage.getItem("data"));
    setUsers(usersContext.data);
  }, []);

  return (
    <>
      { console.log("abc",usersContext.data) }
      <div className="col-lg-3 col-md-4 col-sm-5">
        <ul className="list-group m-4">
          {
            (users) ? (
              users.map(user => (
                <Link className="list-group-item" to={"/profile/"+user.id} key={user.id}>{ user.first_name + " " + user.last_name }</Link>
              ))
            ) : ( <p>No users</p> )
          }
        </ul>
      </div>
    </>
  )
}

export default UsersView