// import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";


const Signup = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string().min(8, "Password must be at least 8 characters").required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Required")
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <div className="justify-center items-center w-full h-screen bg-stone-950 bg-contain">
      <div className="flex flex-col justify-center items-center bg-amber-950 w-full h-full border-amber-500 border-dotted border-5 rounded-4xl">
        <h1 className="text-9xl font-bold text-center italic text-blue-500 underline decoration-wavy decoration-red-500 decoration-1 uppercase">
          Signup
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          action=""
          method="post"
          className="flex flex-col justify-center items-center gap-3"
        >
          <br />
          <input
            type="text"
            placeholder="userName"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-3xl justify-center bg-amber-50 font-extrabold p-2 hover:bg-neutral-950 border-pink-500 hover:border-dotted border-3"
            />
            {formik.touched.userName && formik.errors.userName && (
              <span style={{ color: "red" }}>{formik.errors.userName}</span>
            )}
          <input
            type="email"
            placeholder="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-3xl justify-center bg-amber-50 font-extrabold p-2 hover:bg-neutral-950 border-pink-500 hover:border-dotted border-3"
          />
          {formik.touched.email && formik.errors.email && (
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          )}
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-3xl justify-center bg-amber-50 font-extrabold p-2 hover:bg-neutral-950 border-pink-500 hover:border-dotted border-3"
          />
          <input
            type="password"
            placeholder="confirm your password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="rounded-3xl justify-center bg-amber-50 font-extrabold p-2 hover:bg-neutral-950 border-pink-500 hover:border-dotted border-3"
          />
          {formik.touched.password && formik.errors.password && (
            <span style={{ color: "red" }}>{formik.errors.password}</span>
          )}
          <p>
            password must be at least 8 characters and include uppercase,
            lowercase, number, and special character.
          </p>
          <button
            type="submit"
            className="justify-center rounded-3xl bg-blue-500 font-extrabold p-2 hover:bg-blue-950 border-indigo-500 hover:border-doubled border-2"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup