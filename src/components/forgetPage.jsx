import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPage = () => {
  const navigate = useNavigate();
  const initialvalues = { email: "", newPassword: "" };
  const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!values.email.includes("@")) {
      errors.email = "Invalid Email address!";
    }
    if (!values.newPassword) {
      errors.newPassword = "newPassword is required!";
    } else if (values.newPassword.length < 6) {
      errors.newPassword = "Invalid new Password minimum length should be 6.!";
    }
    if (!values.oldPassword) {
      errors.oldPassword = "oldPassword is required!";
    } else if (values.oldPassword.length < 6) {
      errors.oldPassword = "Invalid old Password minimum length should be 6.!";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Form submited");
    }
  }, [formErrors, isSubmit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(validate(formValues));
    if (formErrors.label === 0) {
      setTimeout(() => {
        navigate("/");
      }, "2000");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center border">
      <form className="w-full max-w-md  p-4 rounded-xl shadow-xl">
        <h2 className="text-2xl text-center font-semibold mb-4">
          Reset Password
        </h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 focus:shadow"
            placeholder="Enter your email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <p className="text-red-600">{formErrors.email}</p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block text-gray-700 font-medium mb-2"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            value={formValues.newPassword}
            onChange={handleChange}
            required
          />
          <p className="text-red-600">{formErrors.newPassword}</p>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 focus:outline-none shadow-sm"
            onClick={handleSubmit}
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPage;
