import { useLocation, useNavigate } from "react-router-dom";
import { ToastMsgSuc } from "../../components/Toast/ToastMsg";
import { BsGithub } from "react-icons/bs";
import googleIcon from "../../assets/google-icon.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Login = () => {
  const { googleUser, gitHubUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state.from;
  // console.log(location);

  // Google pop up
  const googleSignIn = () => {
    googleUser()
      .then((res) => {
        const signedUser = res.user;
        console.log(signedUser);
        ToastMsgSuc("Login by Google successful!");
        navigate(from ? from : "/");
      })
      .catch((error) => console.log(error.message));
  };

  // Github pop up
  const gitHubSignIn = () => {
    gitHubUser()
      .then((res) => {
        const signedUser = res.user;
        console.log(signedUser);
        ToastMsgSuc("Login by Github successful!");
        navigate(from ? from : "/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="bg-black">
      <div
        className="w-11/12 xl:w-1/4 lg:w-2/6 md:w-3/6 mx-auto flex items-center justify-center"
        style={{ height: "100vh" }}
      >
        <div>
          <h1 className="text-lg md:text-xl lg:text-2xl xl:text-4xl text-center font-semibold mb-6 text-white">
            Welcome to Bear House!
          </h1>
          <div className="text-center flex flex-col items-center justify-center gap-2">
            <button
              onClick={gitHubSignIn}
              className="relative w-full flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="flex w-full items-center justify-center gap-4 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-black">
                <BsGithub className="text-3xl" />
                Countinue With GitHub
              </span>
            </button>

            <button
              onClick={googleSignIn}
              className="relative w-full flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-gradient-to-br from-pink-600 to-orange-500 group-hover:from-pink-600 group-hover:to-orange-500 dark:text-white focus:ring-2 focus:outline-none focus:ring-pink-300 dark:focus:ring-orange-800"
            >
              <span className="flex w-full items-center justify-center gap-4 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-black">
                <img className="w-[30px]" src={googleIcon} alt="" />
                Countinue With Google
              </span>
            </button>

            <button
              onClick={() => navigate("/")}
              className="text-lg md:text-2xl text-green-500 animate-pulse hover:animate-none duration-200"
            >
              ← Back Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
