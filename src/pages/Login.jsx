import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = (e)=>{
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existenUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (existenUser) {
      console.log("logged in");
      navigate("/");
    } else {
      console.log("password or email not correct")
    }
  }
  return (
    <div className="justify-center items-center w-full h-screen bg-amber-500 bg-contain">
      <div className="flex flex-col justify-center items-center bg-amber-950 w-full h-full border-amber-500 border-dotted border-3 rounded-4xl">
        <form
          onSubmit={handleLogin}
          action=""
          method="post"
          className="flex flex-col justify-center items-center gap-3"
        >
          <h1 className="text-9xl font-bold text-center italic text-red-700 underline decoration-wavy decoration-red-500 decoration-1 uppercase">
            login
          </h1>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-3xl justify-center bg-amber-50 font-extrabold p-2 hover:bg-neutral-950 border-pink-500 hover:border-dotted border-3"
            required
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-3xl justify-center bg-amber-50 font-extrabold p-2 hover:bg-neutral-950 border-pink-500 hover:border-dotted border-3"
            required
          />
          <button
            type="submit"
            className="justify-center rounded-3xl bg-blue-500 font-extrabold p-2 hover:bg-blue-950 border-indigo-500 hover:border-doubled border-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
