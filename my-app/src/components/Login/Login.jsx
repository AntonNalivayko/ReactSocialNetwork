import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";



const Login = () => (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validateOnBlur
        onSubmit={(values) => { console.log(values) }}
        validationSchema={loginFormSchema}>
        {() => (
          <Form>
            <p>
              <label htmlFor={'email'}> Имя </label> <br />
              <Field type={'text'} name={'email'} />
            </p>
            <ErrorMessage name="email" component="div" />
            <p>
              <label htmlFor={'password'}> Пароль </label> <br />
              <Field type={'password'} name={'password'} />
            </p>
            <ErrorMessage name="password" component="div" />
            <p>
              <Field type={'checkbox'} name={'rememberMe'} />
              <label htmlFor={'rememberMe'}> remember me </label>
            </p>
            <button type={'submit'}>Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
  
  export default Login