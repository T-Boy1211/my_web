import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";


const Signup = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();

  const handleSignup = (e)=>{
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const existenUser = users.find((user) =>
      user.userName === userName ||
      user.email === email ||
      user.password === password
    );

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(password === confirmPassword){
      if (!passwordRegex.test(password)) {
        alert('Password` must be at least 8 characters and include uppercase, lowercase, number, and special character.');
        return;
      }
      if(existenUser){
        alert('User already exist');
        setTimeout(()=>{
          navigate('/');
        }, 3000);
      } else {
      const newUser = {userName, email, password};
        alert('User created successfully');
        setTimeout(()=>{
          users.push(newUser)
          localStorage.setItem('users', JSON.stringify(users));
          navigate('/dasboard');
        }, 3000)
      }
    } else{
      const errMsg = document.getElementById('errMsg');
      errMsg.innerHTML = 'Password and Confirm Password must match';
      setTimeout(()=>{
        errMsg.innerHTML = '';
      }, 3000);
    }
  };

  return (
    <div className="justify-center items-center w-full h-screen bg-stone-950 bg-contain">
      <div className="flex flex-col justify-center items-center bg-amber-950 w-full h-full border-amber-500 border-dotted border-5 rounded-4xl">
        <form
          onSubmit={handleSignup}
          action=""
          method="post"
          className="flex flex-col justify-center items-center gap-3"
        >
          <h1 className="text-9xl font-bold text-center italic text-blue-500 underline decoration-wavy decoration-red-500 decoration-1 uppercase">
            Signup
          </h1>
          <br />
          <input
            type="text"
            placeholder="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="rounded-3xl justify-center bg-amber-50 font-extrabold p-2 hover:bg-neutral-950 border-pink-500 hover:border-dotted border-3"
            required
          />
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
          <input
            type="password"
            placeholder="confirm your password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="rounded-3xl justify-center bg-amber-50 font-extrabold p-2 hover:bg-neutral-950 border-pink-500 hover:border-dotted border-3"
            required
          />
          <p id="errMsg"></p>
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