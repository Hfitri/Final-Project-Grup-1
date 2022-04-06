import InputLogin from "../component/InputLogin";

function Register() {
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
                        <div class="md:w-8/12 mr-5 lg:w-4/12 lg:ml-10">
                            <form>
                                <InputLogin placeholder="Username" type="text" />
                                <InputLogin placeholder="Emai Address" type="text" />
                                <InputLogin placeholder="Password" type="password" />

                                <div class="flex justify-end items-center mb-6">
                                    <p class="text-sm mr-2 font-semibold mt-2 pt-1 mb-0">
                                        Already have an account?
                                        <a
                                            href="login"
                                            class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                                        > Login</a
                                        >
                                    </p>
                                </div>

                                {/* <!-- Submit button --> */}
                                <button
                                    type="submit"
                                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register;