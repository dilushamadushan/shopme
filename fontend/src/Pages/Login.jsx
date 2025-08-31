import { useState } from "react";
function Login() {
  const [state, setState] = useState("Login");
  const [formData,setFormData] = useState({
    username :  "",
    password : "",
    email : ""
  })

  const cahngeHandle = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log(formData);
    let resData;
    await fetch("http://localhost:3000/login",{
      method : "POST",
      headers : {
        Accept : 'application/form-data',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json()).then((data)=> resData = data)
    if(resData.success){
      localStorage.setItem('auth-token', resData.token)
      window.location.replace("/");
    }else{
      alert(resData.errors)
    }
    
  }

  const signup = async () => {
    console.log(formData);
    let resData;
    await fetch("http://localhost:3000/auth",{
      method : "POST",
      headers : {
        Accept : 'application/form-data',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json()).then((data)=> resData = data)
    if(resData.success){
      localStorage.setItem('auth-token', resData.token)
      window.location.replace("/");
    }else{
      alert(resData.error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          {state}
        </h1>

        <div className="space-y-4">
          {state === "Sign Up" ? (
            <input
              type="text"
              name = "username"
              value={formData.username}
              onChange={cahngeHandle}
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={cahngeHandle}
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={cahngeHandle}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button 
        onClick={() => {state === "Login" ? login() : signup()}}
        className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-200">
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <span onClick={() => (setState("Login"))} className="text-green-600 font-medium hover:underline cursor-pointer">
              Login here
            </span>
          </p>
        ) : (
          <p className="mt-4 text-sm text-center text-gray-600">
            Create an account?{" "}
            <span onClick={() => (setState("Sign Up"))} className="text-green-600 font-medium hover:underline cursor-pointer">
              Click here
            </span>
          </p>
        )}

        <div className="flex items-start mt-6 space-x-2">
          <input type="checkbox" className="mt-1 accent-green-500" />
          <p className="text-xs text-gray-500">
            By continuing, I agree to the{" "}
            <span className="text-green-600 hover:underline cursor-pointer">
              Terms of Use
            </span>{" "}
            &{" "}
            <span className="text-green-600 hover:underline cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
