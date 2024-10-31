import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const getUserById = async (userId) => {
    //template literal
    const responseUser = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(responseUser.data);
  };

  const createUser = async (newUser) => {
    //post veri ekleme
    const response = await axios.post(`${BASE_URL}/users/`, newUser);
    console.log("responseEklenen", response.data);
  };

  useEffect(() => {
    getAllUsers();
    getUserById(1);
    const newUser = {
      username: "onur",
      password: "1231",
    };
    createUser(newUser);
  }, []);
  return (
    <div>
      <h2>axios</h2>
    </div>
  );
}

export default App;
