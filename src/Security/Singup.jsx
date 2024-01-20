import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Singup = () => {
  const { signup, logout } = useAuth();
  const [error, setError] = useState(null);
  console.log("error", error);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const data = e.target;
    const email = data.email.value;
    const password = data.password.value;
    const confirmPassword = data.conpassword.value;

    console.log(email, password, confirmPassword);

    if (password === confirmPassword) {
      signup(email, password)
        .then((user) => {
          console.log(user);
          logout().then(() =>
            console.log("Logout and moved the user to login page")
          );
          navigate("/login");
        })
        .catch((error) => {
          setError(error.message);
          //   console.log(error);
        });
    } else {
      setError("Password doesn't match");
    }
  };
  return (
    <div className="hero min-h-fit bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create Your Account Here</h1>
        </div>
        <div className="card shrink-0 w-96  shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                required
                name="conpassword"
              />
            </div>

            <div className="form-control mt-6">
              <input type="submit" className="btn btn-outline" value="Signup" />
            </div>
          </form>
          {error && (
            <p className="p-4 text-center bg-red-500 text-white">{error}</p>
          )}

          <p className="text-center">
            Already have an account? Click{" "}
            <Link to="/login">
              <span className="text-red-900">Here</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Singup;
