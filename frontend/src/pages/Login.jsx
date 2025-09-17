import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loginIllustration from "../assets/login.svg"; // ✅ Local import

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "test@example.com" && password === "123456") {
      setMessage("Login successful! 🎉");
      setMessageType("success");

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      }

      setEmail("");
      setPassword("");
      setRememberMe(false);
    } else {
      setMessage("Invalid email or password. Please try again.");
      setMessageType("danger");
    }

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      }}
    >
      <div className="container">
        <div className="row shadow-lg rounded-4 overflow-hidden bg-white">
          {/* Illustration Section (Left) */}
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-light">
            <img
              src={loginIllustration} // ✅ Local illustration
              alt="Login Illustration"
              className="img-fluid p-4"
              style={{ maxHeight: "400px" }}
            />
          </div>

          {/* Form Section (Right) */}
          <div className="col-md-6 p-5">
            <h2 className="text-center mb-4 fw-bold text-primary">Smart LMS Login</h2>

            {message && (
              <div className={`alert alert-${messageType} text-center`} role="alert">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <a href="/forgot-password" className="text-decoration-none small">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>

            <p className="text-center mt-3 mb-0">
              Don’t have an account?{" "}
              <a href="/register" className="text-primary text-decoration-none">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
