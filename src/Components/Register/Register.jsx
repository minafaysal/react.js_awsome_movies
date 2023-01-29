import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
export default function Register() {
  let navigate = useNavigate();
  const [validteClinteError, setValidteClinteError] = useState([]);
  const [apiError, setApiError] = useState("");
  const [isLodaing, setIsLodaing] = useState(false);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
  });

  function getUser(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }
  async function sendUserData(e) {
    e.preventDefault();
    setIsLodaing(true);
    let validateResponse = validationRegisterForm();
    if (validateResponse.error) {

      setValidteClinteError(validateResponse.error.details);
      setIsLodaing(false);
    } else {
      let { data } = await axios.post(
        "https://route-movies-api.vercel.app/signup",
        user
      );
      setIsLodaing(false);
      if (data.message === "success") {
        navigate('/login')
         
      } else {
        setApiError(data.message);
      }
    }
  }
  function validationRegisterForm() {
    let schema = Joi.object({
      first_name: Joi.string().alphanum().min(3).max(16).required(),
      last_name: Joi.string().alphanum().min(3).max(16).required(),
      email: Joi.string().required().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "eg"] },
      }),
      password: Joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,16}$")),
      age: Joi.number().min(16).max(60).required(),
    });
    return schema.validate(user, { abortEarly: false });
  }

  function renderForm() {
    return (
      <form onSubmit={sendUserData} className="w-50   m-auto">
        <div className="mb-3">
          <label htmlFor="first_name" className="htmlForm-label">
            first name{" "}
          </label>
          <input
            onChange={getUser}
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
          />
          {validteClinteError.map((error, index) =>
            error.path[0] === "first_name" ? (
              <div key={index} className=" text-danger">
                {error.message}
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">
            last name{" "}
          </label>
          <input
            onChange={getUser}
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
          />
          {validteClinteError.map((error, index) =>
            error.path[0] === "last_name" ? (
              <div key={index} className="text-danger">
                {error.message}
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            email{" "}
          </label>
          <input
            onChange={getUser}
            type="email"
            className="form-control"
            id="email"
            name="email"
          />
          {validteClinteError.map((error, index) =>
            error.path[0] === "email" ? (
              <div key={index} className="text-danger">
                {error.message}
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            password{" "}
          </label>
          <input
            onChange={getUser}
            type="password"
            className="form-control"
            id="password"
            name="password"
          />
          {validteClinteError.map((error, index) =>
            error.path[0] === "password" ? (
              <div key={index} className="text-danger">
               "password invalid"  
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            age
          </label>
          <input
            onChange={getUser}
            type="number"
            className="form-control"
            id="age"
            name="age"
          />
          {validteClinteError.map((error, index) =>
            error.path[0] === "age" ? (
              <div key={index} className="text-danger">
                {error.message}
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <button type="submit" className="btn btn-outline-info mx-1">
          {isLodaing ? <div className="spinner-border"></div> : "register"}
        </button>
        <span>you have  account</span> <NavLink className="text-muted" to="/login">login</NavLink>

      </form>
    );
  }
  function renderErrorFromServere() {
    if (apiError) {
      let index = apiError.lastIndexOf(":");
      let textError = apiError.slice(index + 1, apiError.length - 1);
      console.log(textError);
      return <div className="alert alert-danger w-50 m-auto">{textError}</div>;
    }
  }

  return (
    <>
    <h1 className="text-center">Register now</h1>
      {renderErrorFromServere()}
  
      {renderForm()}
    </>
  );
}
