import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";


const SignUp = () => {
 

  // Define a validation schema using Yup
  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required("Username is required"),
    profile_picture: Yup.string().required("Profile picture URL is required"),
    password: Yup.string().required("Password is required"),
    roles: Yup.string().required("Role is required"),
  });

  // Initial form values
  const initialValues = {
    user_name: "",
    profile_picture: "",
    password: "",
    roles: "",
  };



  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        
        >
          <Form>
            <div className="mb-4">
              <label className="block mb-2">Username:</label>
              <Field
                type="text"
                name="user_name"
                className="w-full p-2 border rounded"
                placeholder="Username"
              />
              <ErrorMessage name="user_name" component="div" className="text-red-600" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Profile Picture URL:</label>
              <Field
                type="text"
                name="profile_picture"
                className="w-full p-2 border rounded"
                placeholder="Profile Picture URL"
              />
              <ErrorMessage name="profile_picture" component="div" className="text-red-600" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Password:</label>
              <Field
                type="password"
                name="password"
                className="w-full p-2 border rounded"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" className="text-red-600" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Role:</label>
              <Field as="select" name="roles" className="w-full p-2 border rounded">
                <option value="">Select a role</option>
                <option value="Admin">Admin</option>
                <option value="Customer">Customer</option>
                <option value="Vendor">Vendor</option>
              </Field>
              <ErrorMessage name="roles" component="div" className="text-red-600" />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
      <div className="mt-4">
      <p>
          Already have an account?{' '}
          <Link to="/checkout" className="text-blue-600 hover:underline">
            Continue to Checkout
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;