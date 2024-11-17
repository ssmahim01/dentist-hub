import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const Register = () => {
    const {registerUser, setUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        registerUser(email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
            navigate("/");
        })
        .catch(err => {
            const errorMessage = err.message;
            console.log(errorMessage);
        })
    };

  return (
    <div className="card bg-base-100 md:w-full w-11/12 mx-auto max-w-md shrink-0 shadow-md border border-gray-300 my-12">

        <h2 className="text-3xl font-bold text-center mt-6 border-b border-b-300 pb-6">Register Now!</h2>

      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            name="photo"
            className="input input-bordered"
          />
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-info text-lg text-white font-bold">Register</button>
        </div>
      </form>

      <p className="font-semibold text-center py-5">Already Have An Account, Please <Link to="/login" className="text-accent underline">Login</Link></p>
    </div>
  );
};

export default Register;