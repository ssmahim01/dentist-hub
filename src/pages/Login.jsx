import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const {loginWithEmailPass, setUser} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        loginWithEmailPass(email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(err => {
            const errorMessage = err.message;
            console.log(errorMessage);
        })
    };

  return (
    <div className="card bg-base-100 md:w-full w-11/12 mx-auto max-w-md shrink-0 shadow-md border border-gray-300 my-12">

        <h2 className="text-3xl font-bold text-center mt-6 border-b border-b-300 pb-6">Login Now!</h2>

      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a className="label-text-alt link link-hover font-semibold">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent text-lg text-white font-bold">Login</button>
        </div>
      </form>

      <p className="font-semibold text-center py-5">New in this Site, Please <Link to="/register" className="text-rose-500 underline">Register</Link></p>
    </div>
  );
};

export default Login;