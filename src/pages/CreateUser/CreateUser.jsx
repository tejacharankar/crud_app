import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./CreateUser.css";

const CreateUser = () => {
  const navigator = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
      //stop reloading page
    e.preventDefault();

    //final data
    const user = {
      fullname: fullName,
      gender: gender,
      contact: contact,
      email: email,
    };

    //send the data to backend
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/saveUser`, user)
    .then(() => {
    alert("User Created Successfully");
    //navigate to homepage/dashboard
    navigator("/");
    }).catch(err => alert(err));
  };

  return (
    <div>
        <form className="userForm" onSubmit={handleSubmit}>
            <h2>Create New User</h2>
            <input type="text" placeholder="Enter Full Name" required = {true} onChange={(e) => setFullName(e.target.value)}
            />
            <input type="email" placeholder="Enter Your Email" required = {true} onChange={(e) => setEmail(e.target.value)}
            />
            <input type="number" placeholder="Enter Contact Number" required = {true} onChange={(e) => setContact(e.target.value)}
            />
            <div>
                <input type="radio" name="gender" required = {true} onClick={() => setGender(true)}
                />Male
                <input type="radio" name="gender" required = {true} onClick={() => setGender(false)}
                />Female
            </div>
            <input type="Submit" value="Add New User" />
            <Link to="/">Go Back</Link>
        </form>
    </div>
  );
};

export default CreateUser;