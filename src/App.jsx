// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import Cars from "./Components/Cars";
// import Events from "./Components/Events";
// import Grocerry from "./Components/Grocerry";
// import Lists from "./Components/Lists";
// import MyForm from "./Components/MyForm";
// import Layouts from "./Components/pages/Layouts";
// import Home from "./Components/pages/Home";
// import About from "./Components/pages/About";
// import Contact from "./Components/pages/contactUs/Contact";
// import Services from "./Components/pages/services/Services";
// import { UserContext } from "./context/context";
// import { useState } from "react";
// import FirstHeade from "./Components/Project/Headers/FirstHeade";
// import Layout from "./Components/Project/Layouts/Layout";
// import Hero from "./Components/Project/Hero/Hero";
import { FaTrash } from "react-icons/fa";
import {
  updateEmployees,
  addEmployees,
  deleteFrmMyCompany,
} from "./Rdux/newUserSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetails } from "./Datas/Datas";
import Products from "./Components/Products";
import CartItems from "./CartItems";

function App() {
  const users = useSelector((state) => state.allUsers.users);

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newName, setNewName] = useState("");
  const addEmployeesToMyComapny = (e) => {
    e.preventDefault();
    dispatch(addEmployees({ name, email }));
  };

  return (
    <>
      {/*   <Cars />
      <Events />
      <Lists />
      <Grocerry />
      <MyForm /> */}

      {/*  <UserContext.Provider value={name}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layouts />}>
              <Route
                index
                element={
                  localStorage.getItem("auth") ? (
                    <Home />
                  ) : (
                    <Navigate to="/register" />
                  )
                }
              />
              <Route
                path="about"
                element={
                  localStorage.getItem("auth") ? (
                    <About />
                  ) : (
                    <Navigate to="/register" />
                  )
                }
              />
              <Route
                path="services"
                element={
                  localStorage.getItem("auth") ? (
                    <Services />
                  ) : (
                    <Navigate to="/register" />
                  )
                }
              />
              <Route
                path="Contact-us"
                element={
                  localStorage.getItem("auth") ? (
                    <Contact />
                  ) : (
                    <Navigate to="/register" />
                  )
                }
              />
              <Route path="register" element={<MyForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider> */}
      {/*   <Layout />
      <Hero /> */}
      {/* <Home />
      <About />
      <Events /> */}

      <div className="myForm">
        <form onSubmit={addEmployeesToMyComapny}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter New Employee"
            name=""
            id=""
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control"
            type="email"
            placeholder="Enter  Employee email"
            name=""
            id=""
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="btn btn-outline-primary">Add Employee</button>
        </form>
      </div>
      <table border={1} width="100%">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Update User</th>
          <th>Actions</th>
        </tr>
        {users.map((user) => {
          return (
            <>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <input
                    onChange={(e) => setNewName(e.target.value)}
                    type="text"
                    name=""
                    id=""
                  />
                  <button
                    onClick={() =>
                      dispatch(updateEmployees({ id: user.id, name: newName }))
                    }
                    className="mx-3 btn btn-outline-success"
                  >
                    Update user
                  </button>
                </td>
                <td>
                  <button onClick={() => dispatch(deleteFrmMyCompany(user.id))}>
                    <FaTrash color="red" />
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>

      <div className="row">
        {ProductDetails.map((product) => {
          return (
            <>
              <Products
                productName={product.productName}
                id={product.id}
                productPrice={product.productPrice}
              />
            </>
          );
        })}
      </div>
      <CartItems />
    </>
  );
}

export default App;
