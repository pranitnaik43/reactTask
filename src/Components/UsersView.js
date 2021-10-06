import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UsersContext } from "../context";

const UsersView = () => {

  const [users, setUsers] = useState({});
  const usersContext = useContext(UsersContext);

  useEffect(() => {
    //ComponentDidMount

    // following is the template for getting fake data
    var data = {
      "token": "rQL40mpcvdw_7HCVhbX-2w",
      "data": {
        "first_name": "nameFirst",
        "last_name": "nameLast",
        "location": {
          "city": "addressCity",
          "state": "addressState",
          "country": "addressCountry"
          },
        "contacts": {
          "email": "internetEmail",
          "mobile": "phoneMobile"
          },
        "job": {
          "company": "companyName",
          "department": "companyDepartment",
          "position": "personTitle"
          },
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

    axios(config).then(response => {
      // console.log(response);
      if(response) {
        console.log(response.data);
        usersContext.data = response.data;
      }
    });
  }, []);

  return (
    <>
      
    </>
  )
}

export default UsersView