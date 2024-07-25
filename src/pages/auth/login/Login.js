import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { authenticateUser } from "../auth";



const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      if (authenticateUser(values.email, values.password)) {
        navigate("/"); // Redirect to home page on successful login
        setAuthenticate(true);
      } else {
        setLoginError("Invalid email or password");
        setAuthenticate(false);
      }},
  });
  return (
    <div className="auth_form login_form">
      <div className="container">
        <div className="row align-items-center vh-100 justify-content-center">
          <div className="col-md-4 card p-3 shadow">
            <h1 className="text-center">LOGIN</h1>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="form-control"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="pt-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="form-control"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </div>
              {loginError && (
                <div className="text-danger text-center pt-3">{loginError}</div>
              )}
              <div className="text-center py-4">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>

              <div className="back_to_home pt-3">
                <Link to="/sign-up" className="btn btn-primary">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;