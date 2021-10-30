import UserForm from "./UserForm";

const CreateUser = () => {
  return ( 
    <>
      <div className="m-5">
        <h1 className="text-center text-primary">Create User</h1>
        <hr/>
        {/* 
          user -> user data (null in this case)
          submitMethod -> method to be used while submiting form
          targetURL -> The URL to be hit for saving data
          nextURL -> redirect to this URL after submission of form
        */}
        <UserForm user={null} submitMethod={"POST"} targetURL={process.env.REACT_APP_SERVER_URL+ + "/users/create"} nextURL={"/users"}/>
      </div>
    </>
  );
}
 
export default CreateUser;