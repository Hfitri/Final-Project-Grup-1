import InputLogin from "../component/InputLogin";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Login() {
    const clientId = "648341299149-1o6kq6frd26fd9pibhaivjrvsqpso70v.apps.googleusercontent.com";

    const [loginButton, setLoginButton] = useState(true);
    const [logoutButton, setLogoutButton] = useState(false);
    const navigate = useNavigate();

    const loginSuccess = (res) => {
        console.log("LogSuccess : ", res.profileObj);
        localStorage.setItem("token", res.tokenId)
        setLoginButton(false);
        setLogoutButton(true);
        window.location.reload();
        navigate.push("/")
    }

    const failureSuccess = (res) => {
        console.log("Login Failed! : ", res);
    }

    const signoutSuccess = () => {
        alert("You've been signed out successfully.");
        setLoginButton(true);
        setLogoutButton(false);
        window.location.reload();
        localStorage.removeItem("token")
        console.clear();
    }

    const user = localStorage.getItem("token")
    console.log(user);

    return (

        <>
            <section class="h-screen">
                <div class="container px-6 py-12 h-full">
                    <div class="ml-40 items-center flex justify-center flex-wrap h-full g-6 text-gray-800">
                        <div class="md:w-8/12 lg:w-4/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                class="w-full"
                                alt="Phone"
                            />
                        </div>

                        <div class="flex justify-center">
                            {user ?
                                <GoogleLogout
                                    clientId={clientId}
                                    buttonText="Logout"
                                    onLogoutSuccess={signoutSuccess}
                                /> :
                                <>
                                    <div class="md:w-9/12 lg:w-1/12 lg:ml-10">
                                        <form>
                                            <InputLogin placeholder="Email Address" type="text" />
                                            <InputLogin placeholder="Password" type="password" />

                                            <div class="flex justify-between items-center mb-6">
                                                <div class="form-group form-check">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                        id="exampleCheck3"
                                                    />
                                                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                                                    >Remember me
                                                    </label                                        >
                                                </div>
                                                <p class="text-sm mr-2 font-semibold mt-2 pt-1 mb-0">
                                                    Don't have an account?
                                                    <a
                                                        href="register"
                                                        class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                                    >Register</a
                                                    >
                                                </p>
                                                <a
                                                    href="#!"
                                                    class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition ease-in-out"
                                                >Forgot password?</a>
                                            </div>

                                            {/* <!-- Submit button --> */}
                                            <button
                                                type="submit"
                                                class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                            >
                                                Sign in
                                            </button>

                                            <div
                                                class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                            >
                                                <p class="text-center font-semibold mx-4 mb-0">OR</p>
                                            </div>
                                            <div class="flex justify-center">
                                                <GoogleLogin
                                                    clientId={clientId}
                                                    buttonText="Continue With Google"
                                                    onSuccess={loginSuccess}
                                                    onFailure={failureSuccess}
                                                    cookiePolicy={'single_host_origin'}
                                                />
                                            </div>

                                        </form>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Login;