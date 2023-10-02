import "./Dashboard.css";
import Table from "../../components/Table/Table";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
 const[searchQuery, setSearchQuery] = useState("");
 const[genderFilter, setGenderFilter] = useState("all");
    return (
    <div>
        <h1 id="appHeading">User Management App!</h1>

        <input id="searchBar" type="search" placeholder="Search Anything..!" onChange={(e) => setSearchQuery(e.target.value)}/>

        <select id="filterByGender" onChange={(e) => setGenderFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="true">Male</option>
        <option value="false">Female</option>
        </select>

        <Link id="addBtn" to="/createUser">Add User</Link>
        
      <Table searchQuery={searchQuery.toLocaleLowerCase()}
      genderFilter={genderFilter} />
    </div>
  );
};

export default Dashboard;