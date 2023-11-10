import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import jwt_decode from 'jwt-decode';

import Products from '../User/Products';
import Home from '../Admin/Home';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
 
});

const initialValues = {
  username: '',
  password: '',
 
};

const Login = ({ setLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [authUser, setAuthUser] = useState('');

  const handleLogin = async (values) => {
    try {
        const response = await fetch('https://bloom-beauty.onrender.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.access_token;
       

        // Decode the JWT token to get user details, including role
        
        const decodedToken = jwt_decode(accessToken);
        const userRole = decodedToken.role;
        console.log(userRole);

        setIsLoggedIn(true);
        setLogin(true);
        setUsername(values.username);

        // Set the role obtained from the JWT token
        setRole(userRole);

        // Set the authenticated user (you can also save user details)
        setAuthUser(decodedToken);

        // In a real application, you would likely save the token in a secure way.
        localStorage.setItem('authToken', accessToken);
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error authenticating:', error);
      alert('Error authenticating. Please try again.');
    }
  };
  return (
    <>
      {!isLoggedIn ? (
        <section className="flex flex-col md:flex-row h-screen items-center">
          <div className="bg-indigo-600 hidden lg:block w-96 md:w-1/2 xl:w-1/2 h-screen">
            <img
              src="https://media.istockphoto.com/id/1368954963/photo/cyber-security-in-two-step-verification-login-user-identification-information-security-and.jpg?s=1024x1024&w=is&k=20&c=0tgn8IeQbFoZBv3fDALx7m34BsqJLTKPvwpo49BA0tI="
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white w-full md:max-w-md lg:max-w-full md:w-1/2 xl:w-1/2 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
            <div className="w-full mr-64 ml-24 h-100">
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLogin}>
                {() => (
                  <Form className="mt-6" action="#" method="POST">
                    <div>
                      <label className="block text-gray-700">Username</label>
                      <Field
                        type="text"
                        name="username"
                        placeholder="Enter Username Address"
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        autoFocus
                        autoComplete="off"
                        required
                      />
                      <ErrorMessage name="username" component="div" className="text-red-500" />
                    </div>
                    <div className="mt-4">
                      <label className="block text-gray-700">Password</label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        required
                      />
                      <ErrorMessage name="password" component="div" className="text-red-500" />
                    </div>
                    <div className="text-right mt-2">
                      <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
                        Forgot Password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                    >
                      Log In
                    </button>
                  </Form>
                )}
              </Formik>
              <hr className="my-6 border-gray-300 w-full" />

              <div className="mt-4">
                <p>
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-blue-600 hover:underline">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>
          {role === '1' ? (
            <div>
              <Home username={username} onLogout={() => setIsLoggedIn(false)} />
              <p>Welcome, you are logged in as an admin!</p>
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            </div>
          ) : role === '2' ? (
            <div>
               <Products username={username} onLogout={() => setIsLoggedIn(false)} />             
              <p>Welcome, you are logged in as a user!</p>
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            </div>
          ) : (
            <div>Unauthorized Access</div>
          )}
        </div>
      )}
    </>
  );
};

export default Login;
