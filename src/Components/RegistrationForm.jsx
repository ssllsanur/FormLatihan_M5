import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
    birthplace: "",
    birthdate: "",
  });

  const [submitted, setSubmitted] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validate(name, value);
  };

 const validate = (name, value) => {
  let newErrors = { ...errors };
  switch (name) {
    case "username":
      if (!value) {
        newErrors.username = "Username is required";
      } else if (value.length < 5) {
        newErrors.username = "Username must be at least 5 characters long";
      } else if (/[^a-zA-Z\s]/.test(value)) {
        newErrors.username = "Username can only contain letters and spaces";
      } else {
        delete newErrors.username;
      }
      break;
    case "email":
      if (!value) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = "Email is invalid";
      } else {
        delete newErrors.email;
      }
      break;
    case "password":
      if (!value) {
        newErrors.password = "Password is required";
      } else if (value.length < 8) {
        newErrors.password = "Password must be at least 8 characters long";
      } else if (!/[A-Z]/.test(value)) {
        newErrors.password = "Password must contain at least one uppercase letter";
      } else if (!/[a-z]/.test(value)) {
        newErrors.password = "Password must contain at least one lowercase letter";
      } else if (!/\d/.test(value)) {
        newErrors.password = "Password must contain at least one number";
      } else if (!/[\W_]/.test(value)) {
        newErrors.password = "Password must contain at least one symbol";
      } else {
        delete newErrors.password;
      }
      break;
    case "repassword":
      if (!value) {
        newErrors.repassword = "Please confirm your password";
      } else if (value !== form.password) {
        newErrors.repassword = "Passwords do not match";
      } else {
        delete newErrors.repassword;
      }
      break;
    case "birthplace":
      if (!value) {
        newErrors.birthplace = "Birthplace is required";
      } else {
        delete newErrors.birthplace;
      }
      break;
    case "birthdate":
      if (!value) {
        newErrors.birthdate = "Birth date is required";
      } else {
        delete newErrors.birthdate;
      }
      break;
    default:
      break;
  }
  setErrors(newErrors);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  const handleClear = () => {
    setForm({
      username: "",
      email: "",
      password: "",
      repassword: "",
      birthplace: "",
      birthdate: "",
    });
    setSubmitted({});
    setErrors({});
  };

  return (
    <div className="row">
      {/* FORM KIRI */}
      <div className="col-md-6">
        <div className="card p-3 border">
          <h5 className="mb-3">Registration Form</h5>
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mb-3 row align-items-center">
              <label htmlFor="username" className="col-sm-4 col-form-label">
                Username
              </label>
              <div className="col-sm-8">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    id="username"
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                  />
                </div>
                {errors.username && <div className="text-danger small">{errors.username}</div>}
              </div>
            </div>

            {/* Email */}
            <div className="mb-3 row align-items-center">
              <label htmlFor="email" className="col-sm-4 col-form-label">
                Email
              </label>
              <div className="col-sm-8">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                {errors.email && <div className="text-danger small">{errors.email}</div>}
              </div>
            </div>

            {/* Password */}
            <div className="mb-3 row align-items-center">
              <label htmlFor="password" className="col-sm-4 col-form-label">
                Password
              </label>
              <div className="col-sm-8">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
                {errors.password && <div className="text-danger small">{errors.password}</div>}
              </div>
            </div>

            {/* Re-Password */}
            <div className="mb-3 row align-items-center">
              <label htmlFor="repassword" className="col-sm-4 col-form-label">
                Re-Password
              </label>
              <div className="col-sm-8">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input
                    id="repassword"
                    type="password"
                    className="form-control"
                    name="repassword"
                    placeholder="Re-Password"
                    value={form.repassword}
                    onChange={handleChange}
                  />
                </div>
                {errors.repassword && <div className="text-danger small">{errors.repassword}</div>}
              </div>
            </div>

            {/* Tempat Lahir */}
            <div className="mb-3 row align-items-center">
              <label htmlFor="birthplace" className="col-sm-4 col-form-label">
                Tempat Lahir
              </label>
              <div className="col-sm-8">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-geo-alt"></i>
                  </span>
                  <input
                    id="birthplace"
                    type="text"
                    className="form-control"
                    name="birthplace"
                    placeholder="Tempat Lahir"
                    value={form.birthplace}
                    onChange={handleChange}
                  />
                </div>
                {errors.birthplace && <div className="text-danger small">{errors.birthplace}</div>}
              </div>
            </div>

            {/* Tanggal Lahir */}
            <div className="mb-3 row align-items-center">
              <label htmlFor="birthdate" className="col-sm-4 col-form-label">
                Tanggal Lahir
              </label>
              <div className="col-sm-8">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-calendar"></i>
                  </span>
                  <input
                    id="birthdate"
                    type="date"
                    className="form-control"
                    name="birthdate"
                    value={form.birthdate}
                    onChange={handleChange}
                  />
                </div>
                {errors.birthdate && <div className="text-danger small">{errors.birthdate}</div>}
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
        </div>
      </div>

      {/* SUBMITTED DATA KANAN */}
      <div className="col-md-6">
        <div className="card p-3 border">
          <h5>Submitted Data:</h5>
          <ul className="list-group mb-3">
            <li className="list-group-item">
              <strong>Username:</strong>{" "}
              <span className="text-danger">{submitted.username || "Not submitted yet"}</span>
            </li>
            <li className="list-group-item">
              <strong>Email:</strong>{" "}
              <span className="text-danger">{submitted.email || "Not submitted yet"}</span>
            </li>
            <li className="list-group-item">
              <strong>Password:</strong>{" "}
              <span className="text-danger">
                {submitted.password ? "" : "Not submitted yet"}
              </span>
            </li>
            <li className="list-group-item">
              <strong>Re-Password:</strong>{" "}
              <span className="text-danger">
                {submitted.repassword ? "" : "Not submitted yet"}
              </span>
            </li>
            <li className="list-group-item">
              <strong>Tempat Lahir:</strong>{" "}
              <span className="text-danger">{submitted.birthplace || "Not submitted yet"}</span>
            </li>
            <li className="list-group-item">
              <strong>Tanggal Lahir:</strong>{" "}
              <span className="text-danger">{submitted.birthdate || "Not submitted yet"}</span>
            </li>
          </ul>
          <button className="btn btn-danger w-100" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}