import React, { useEffect } from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import { useState } from "react";
import {url } from "../data/data.js";
import Table from 'react-bootstrap/Table';

export default function UserPage() {
    
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(url + "users?_embed")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.log(error))
    }, []);

    return (
        <>
        <MyNavbar/>

        <div>
        <h2 className='text-center mt-5 text-success'>Admin List</h2>
        <Table 
         striped bordered hover 
         className='w-50 mx-auto mb-5 mt-3'
         >
            <thead>
                <tr>
                <th>ID</th>
                <th>Admin Name</th>
                </tr>
            </thead>
            <tbody>
            {users.sort((a, b) => a.id - b.id).map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                </tr>
                ))}
            </tbody>
        </Table> 
    </div>

        <MyFooter/>
        </>
    )
}