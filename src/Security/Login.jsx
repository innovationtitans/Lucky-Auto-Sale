import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const data = e.target;
    const email = data.email.value;
    const password = data.password.value;

    login(email, password)
      .then((user) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Welcome ${user.user.email}`,
          showConfirmButton: false,
          timer: 5000,
        });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-fit bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-96  shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
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
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-outline"
                  value="Login"
                />
              </div>
            </form>
            {error && <p className="bg-red-500 p-4 text-center">{error}</p>}
            <p className="text-center p-4">
              New User?{" "}
              <Link to="/signup">
                Register <span className="text-red-900">Here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
