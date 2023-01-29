import axios from "axios";
import Joi from "joi";
import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login({getUserData}) {
  let navigate = useNavigate();
  const [validteClinteError, setValidteClinteError] = useState([]);
  const [apiError, setApiError] = useState("");
  const [isLodaing, setIsLodaing] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function getUser(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  }

  async function sendUserData(e) {
    e.preventDefault();

    setIsLodaing(true);
    let validateResponse = validationLoginForm();
    if (validateResponse.error) {
      setValidteClinteError(validateResponse.error.details);
      setIsLodaing(false);
    } else {
      let { data } = await axios.post(
        "https://route-movies-api.vercel.app/signin",
        user
      );
      setIsLodaing(false);
      if (data.message === "success") {

        sessionStorage.setItem("userToken", JSON.stringify(data.token));
        getUserData()
        navigate("/home");
      } else {
        setApiError(data.message);
        
      }
    }
  }
  function validationLoginForm() {
    let schema = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "eg"] },
      }),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,16}$")),
    });
    return schema.validate(user, { abortEarly: false });
  }

  function renderForm() {
    return (
      <form onSubmit={sendUserData} className="w-50 my-2  m-auto">
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
                {" "}
                "password invalid" 
              </div>
            ) : (
              ""
            )
          )}
        </div>

   <div className="d-inline-block">
   <button type="submit" className="btn btn-outline-info  mx-1 ">
          {isLodaing ? <div className="spinner-border"></div> : "login"}
        </button>
        <span>you have not any account</span> <NavLink className="text-muted" to="/register">create one</NavLink>
   </div>

      </form>
    );
  }
  function renderErrorFromServere() {
    return apiError ? (
      <div className="alert alert-danger w-50 m-auto">{apiError}</div>
    ) : (
      ""
    );
  }
  return (
    <div className="vh-100">
        <h1 className="text-center">Login now</h1>

      {renderErrorFromServere()}
      {renderForm()}
    </div>
  );
}


//https://route-movies-api.vercel.app/