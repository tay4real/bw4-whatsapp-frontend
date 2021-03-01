import "./register-styles.scss";
import React, { useState } from "react";
import fetchBe from "../../client/fetchBe";
import { ContinueWith, DangerAlert, WhatsAppLogo } from "../../components";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const submitUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await fetchBe.post("/users/register", credentials);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      if (
        localStorage.getItem("refreshToken") &&
        localStorage.getItem("accessToken")
      ) {
        window.location.replace("/");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div>
      <div id="login" className="pt-5">
        <WhatsAppLogo />
        <hr />
        <div className="container" style={{ maxWidth: "550px" }}>
          <div className="row d-flex" style={{ textAlign: "center" }}>
            <div className="col-12" style={{ color: "#000000" }}>
              <strong>To continue, log in to WhatsApp</strong>
            </div>
            <ContinueWith
              title="Continue with Facebook"
              className="btn btn-facebook btn-lg btn-block"
            />
            <ContinueWith
              title="Continue with Apple"
              className="btn btn-apple btn-lg btn-block"
            />
            <ContinueWith
              title="Continue with Google"
              className="btn btn-google btn-lg btn-block"
              loginWith={process.env.REACT_APP_API_URL + "/users/google-login"}
            />
          </div>
          <div className="divide" style={{ marginBottom: "30px" }}>
            <strong className="divide-Text">Or</strong>
          </div>

          <form onSubmit={submitUser}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email address or username"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                id="exampleInputPassword1"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>
            <div
              className="form-group form-check d-flex"
              style={{ justifyContent: "space-between" }}
            >
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
              {loading ? (
                <Spinner animation="border" />
              ) : (
                <button
                  className="btn btn-success btn-lg"
                  style={{ width: "150px" }}
                >
                  Log In
                </button>
              )}
            </div>
          </form>
          <div style={{ textAlign: "center" }}>
            <a href="#ssss">Forgot your Password ?</a>
          </div>
          <hr />
          {error && <DangerAlert messsage={error} />}
          <div>
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-12 mb-3">
                <strong>Don't have an Account ?</strong>
              </div>
              <div className="col-12">
                <Link
                  to="/register"
                  className="btn btn-outline-light btn-lg btn-block"
                >
                  SIGN UP FOR WHATSAPP
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <span
            style={{ textAlign: "center", color: "rgba(202, 204, 203, 0.253)" }}
          >
            <a href="#ddd">Terms & Condition</a> and{" "}
            <a href="#dddd">Privacy Policy</a>
          </span>
        </div>
      </div>
    </div>
  );
}
