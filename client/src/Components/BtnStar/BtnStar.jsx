import React from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

const BtnStar = ({ id, handleNextUser }) => {
  const navigate = useNavigate();

  const likes = async (id) => {
    const api = "https://buddyup.azurewebsites.net/api/match/like-with";
    const headerConfig = {
      headers: {
        "Authorization": "Bearer " + JSON.parse((sessionStorage.getItem("token"))),
        "Content-Type": "application/json",
      }
    }
    const body = {
      userToLike: id,
    }

    try {
      const { data } = await axios.post(api, body, headerConfig);
      console.log(data.status);

      if (data.status == "OK") {
        handleNextUser();
      } else if (data.status == "Nice") {
        toast.success(
          "¡It's a Match!",
          {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );

        setTimeout(() => {
          navigate("/conversations");
        }, 2000);
      }
    } catch (error) {
      toast.error(
        "¡Ocurrió un error, intentalo más tarde!",
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  }

  return (
    <>
      <button onClick={() => likes(id)} className="flex items-center justify-center w-12 h-12 bg-[#D7F854] rounded-full text-white focus:outline-none">
        <FaStar className="text-2xl text-black" />
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default BtnStar;
