import {  useEffect, useState } from "react";
import axios from "axios";
import TableRow from "./TableRow/Tablerow"
import "./Table.css"

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
 
// eslint-disable-next-line react/prop-types
const Table = ({searchQuery, genderFilter}) => {
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/users/getAllUsers`).then((res) => {
      setUserData(res.data);
    });
  },[]);

  return (
    <table border={1} id="usersTable">
    <thead>
      <tr id="tableHeaders">
      <th>Sr No.</th>
      <th>Full Name</th>
      <th>Email Address</th>
      <th>Gender</th>
      <th>Contact</th>
      <th>Action 1</th>
      <th>Action 2</th>
      </tr> 
    </thead>
    
    <tbody>
    {userData.length > 0 ? (
    userData
    .filter(
      (user) =>
        user.email.includes(searchQuery) || user.fullName.toLowerCase().includes(searchQuery) || 
        user.contact.toLowerCase().includes(searchQuery) 
    )
    .filter((user) => genderFilter != "all" ? String(user.gender) === genderFilter : true)
      .map((user, index)=> {
        return(
          <TableRow 
          key= {user._id} 
          userId= {user._id}
          SrNo= {index + 1} 
          fullName= {user.fullName}
          gender= {user.gender} 
          email= {user.email} 
          contact= {user.contact}
          setUserData= {setUserData}
          />
        );
      })
    ) : (
      <h4>No Data Found!</h4>
    )}
    </tbody>
  </table>
  );
};

export default Table;
