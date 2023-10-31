import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Components/Navbar";



const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? " "
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };
  return (
    <>
      <div className="home_page">
      <Navbar/>
        <h4 class="mt-10 flex items-center justify-center">
          {" "}
          <p class="text-4xl text-center">  Welcome <span>{username} </span> to Home page</p>
         
          
        </h4>

        <div class="mt-10 flex items-center justify-center" >
            <button class="bg-blue-500 text-white px-4 py-2 rounded" onClick={Logout}>Logout</button>
        </div>

        
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;