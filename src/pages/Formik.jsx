import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Required")
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <>
      <h1 className="text-9xl uppercase text-center p-9 font-extrabold font-sans antialiased italic text-gray-500 font-stretch-normal">
        signup
      </h1>
      <form onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <input
          type="text"
          name="userName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
          className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 bg-grey-50 hover:bg-zinc-700 justify-center font-extralight"
        />
        {formik.touched.userName && formik.errors.userName && (
          <span style={{ color: "red" }}>{formik.errors.userName}</span>
        )}
        <br />

        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 bg-grey-50 hover:bg-zinc-700 justify-center font-extralight"
        />
        {formik.touched.email && formik.errors.email && (
          <span style={{ color: "red" }}>{formik.errors.email}</span>
        )}
        <br />

        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 bg-grey-50 hover:bg-zinc-700 justify-center font-extralight"
        />
        {formik.touched.password && formik.errors.password && (
          <span style={{ color: "red" }}>{formik.errors.password}</span>
        )}
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Formik;
