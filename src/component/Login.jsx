/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";
import swal from "sweetalert";



const Login = () => {
    const { signInUser, signInWithGoogle,user } = useContext(AuthContext);

    const location =useLocation();
    const navigate = useNavigate();
   
    console.log(user);

    // email sign in
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                swal('login success')
                console.log(result.user);
                e.target.reset();
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                swal(error.message);
            })
    }

    // google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                swal('login success')
                console.log(result.user)
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-gray-400">
                <div className="hero-content flex-col ">

                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">

                            <form onSubmit={handleLogin}>
                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>

                                    <input type="text" name="email" placeholder="email" required className="input input-bordered" />
                                </div>

                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <input type="text" placeholder="password" name="password" className="input input-bordered" />

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn bg-black text-white">Login</button>
                                </div>
                            </form>
                                <div  className="form-control mt-1"><button onClick={handleGoogleSignIn} className="btn bg-black text-white"> login with Google</button></div>

                            <p className="text-xl">New here? please

                                <Link to="/register">
                                    <button className="btn btn-link ">Register</button>
                                </Link>
                            </p>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;