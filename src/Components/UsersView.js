import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import info from "../info";

const UsersView = () => {

  const [users, setUsers] = useState(null);
  const history = useHistory();

  async function loadData() {
    // following is the template for getting fake data
    var data = {
      "token": "rQL40mpcvdw_7HCVhbX-2w",
      "data": {
        "name": "nameFirst",
        "age": "numberInt|16,60",
        "gender": "personGender",
        "email": "internetEmail",
        "phone": "phoneMobile",
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

    const resonse = await axios(config); 
    const fakeUsers = resonse.data;
    config.url = "http://localhost:3000/users/create";
    config.method = "POST";
    console.log(fakeUsers)
    for(var user of fakeUsers) {
        config.data = user;
        console.log(config);
        await axios(config);
    }
  }

  useEffect(() => {
    //ComponentDidMount
    // loadData();  //load initial data
    var config = {
      url: "http://localhost:3000/users",
      method: "GET",
      headers: { 
        "content-type": "application/json"
      }
    }
    axios(config).then(response => {
      let usersData = response.data;
      setUsers(usersData.reverse());
    })
  }, []);

  let goToProfilePage = (id) => {
    history.push("/users/view/"+id);
  }

  let goToEditPage = (id) => {
    history.push("/users/edit/"+id);
  }

  let handleDelete = (id) => {
    let config = {
      url: info.url+"/users/"+id,
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    }
    axios(config).then(response => {
      if(response.data.error) {
        console.log(response.data.error);
      }
      else if(response.data.success) {
        console.log(response.data.success);
      }
    });
    let newUsers = users.filter(user => (user._id !== id));
    setUsers([...newUsers]);
  }

  return (
    <>
      <div className="m-5">
        <h1 className="text-center text-primary">Users</h1>
        <hr/>
        {
          (users) ? (
            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-md-6">
                <ul className="list-group">
                  {
                    users.map(user => {
                      return (
                        <li className="list-group-item d-flex" key={user._id}>
                          <div className="mr-auto">
                            { user.name }
                          </div>
                        
                          <div className="btn-group">
                            {/* view profile button */}
                            <button type="button" className="btn btn-light py-1" data-toggle="tooltip" data-placement="top" title="View Profile" onClick={ () => goToProfilePage(user._id) }><i className="fa fa-id-card text-info"></i></button>
                            {/* edit profile button */}
                            <button type="button" className="btn btn-light py-1" data-toggle="tooltip" data-placement="top" title="Edit Profile" onClick={ () => goToEditPage(user._id) }><i className="fa fa-pencil"></i></button>
                            {/* delete user button */}
                            <button type="button" className="btn btn-light py-1" data-toggle="tooltip" data-placement="top" title="Delete User" onClick={ () => handleDelete(user._id) }><i className="fa fa-trash text-danger"></i></button>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          ) : (<p>No users found</p>)
        }
      </div>
    </>
  )
}

export default UsersView