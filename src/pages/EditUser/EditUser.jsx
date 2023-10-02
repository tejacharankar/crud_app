import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {

  const Navigator = useNavigate();
  const [user, setUser] = useState({});
  const {userId} = useParams();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/users/getUsers/${userId}`).then((res) => {
      setUser(res.data[0]);
    }); 
  }, [userId]);

  const handleForm = (e) => {
    //stop handling page on submit
    e.preventDefault();

    //final data
    const userData = {
      fullname: user.fullName,
      gender: user.gender,
      contact: user.contact,
      email: user.email,
    };

    //send the data to backend
    axios.patch(`${import.meta.env.VITE_API_BASE_URL}/users/updateUser/${userId}`, userData).then(() => { 
    alert("User Updated Successfully!");
    //navigate to homepage/dashboard
    Navigator("/");
  })
    .catch((err) => alert(err));
  };

  return (
    <div>
      <form className="userForm" onSubmit={handleForm}>
        <h2>Update User Details</h2>
          <input type="text" placeholder="Enter Full Name" defaultValue={user.fullName} onChange={(e) => setUser({ ...user, fullName: e.target.value})}/>

          <input type="email" placeholder="Enter Your Email" defaultValue={user.email} onChange={(e) => setUser({ ...user, email: e.target.value})}/>

          <input type="number" placeholder="Enter Contact Number" defaultValue={user.contact} onChange={(e) => setUser({ ...user, contact: e.target.value})}/>

          <div>
          <input type="radio" name="gender" defaultChecked={user.gender} onChange={(e) => setUser({ ...user, gender: e.target.checked})}/>Male

          <input type="radio" name="gender" defaultChecked={!user.gender} onChange={(e) => setUser({ ...user, gender: !e.target.checked})}/>Female
          </div>

          <input type="Submit" value="Update User Details"/>
          <Link to="/">Go Back</Link>
        </form>
    </div>
  );
};

export default EditUser;