import React, { useState } from "react";
import ErrorBG from "../../Assets/ErrorBG.svg";
import EyeImage from "../../Assets/youtube.svg";
import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import { baseUrl } from "../../App";
import { CircularProgress } from "@mui/material";
import ScrollToTop from "../../Reusable/ScrollToTop";

const parseQueryParams = query => {
  try {
    const token = query.match(/token=([^&]*)/)[1];
    const email = query.match(/email=([^&]*)/)[1];
    return [token, email];
  } catch (error) {
    console.error(`Error parsing the incoming params for query: ${query}`);
    return [null, null];
  }
};

function PasswordChange() {
  const { search: searchQuery } = useLocation();
  const navigate = useNavigate();

  const [inputType, setInputType] = useState("password");
  const toggleInputType = () => {
    if (formData.password1)
      setInputType(oldType => (oldType === "password" ? "text" : "password"));
  };

  const [formData, setFormData] = useState({
    password1: "",
    password2: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFieldChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({ ...oldData, [name]: value }));
  };

  const isFormValid = () =>
    formData.password1 &&
    formData.password2 &&
    formData.password1 === formData.password2;

  const handleSubmit = async e => {
    e.preventDefault();

    if (!isFormValid()) return setError("Le password non sono uguale.");

    setError("");
    setIsLoading(true);

    try {
      const [token, email] = parseQueryParams(searchQuery);
      if (!token || !email) throw new Error();

      const data = {
        password: formData.password1,
        token,
        email,
      };

      const {status} = await axios.patch(
        `https://${process.env.REACT_APP_AUTH_PREFIX}${baseUrl()}${
          process.env.REACT_APP_AUTH_API_PATH
        }/user/passwordRecoveryEditPw`,
        data
      );

      if (status === 200) 
        navigate(`/login?email=${email}`);
    } catch (error) {
      console.error(error);

      setError(
        error?.response?.data?.Error ||
          "C'è stato un errore. Riprova o contatta l'assistenza."
      );
    }
    
    setFormData({
      password1: "",
      password2: "",
    });
    setIsLoading(false);
  };

  const handleEnterPress = async event => {
    if (event.key === "Enter") handleSubmit(event);
  };

  return (
    <div className="w-[95%] mx-auto flex flex-row sm:flex-col my-8 ">
      <ScrollToTop />

      <div className="w-[30%] sm:w-full sm:mb-5 md:w-[40%]">
        <img src={ErrorBG} alt="" className="sm:w-1/2  sm:m-auto md:my-16" />
      </div>

      <div className="w-[70%] sm:w-full flex flex-col gap-y-8 ">
        <p className="text-[#00B27A] Brevia850 text-5xl sm:text-center">
          Scegli una nuova password
        </p>

        <form onSubmit={e => handleSubmit(e)}>
          <div className="w-full flex flex-col justify-items-center gap-y-6">
            <div className="flex flex-row gap-x-10 w-[80%]">
              <div className="w-full">
                <p className="Brevia700 text-xl italic my-2">Nuova password</p>
                <div className="flex flex-row">
                  <input
                    id="password1"
                    name="password1"
                    type={inputType}
                    placeholder="Scrivi la password qui..."
                    required
                    value={formData.password1}
                    onChange={handleFieldChange}
                    disabled={isLoading}
                    className="h-16 border-4 border-black px-5 text-xl pop500 w-full"
                    onKeyPress={handleEnterPress}
                  />
                  <img
                    src={EyeImage}
                    alt="eye"
                    className="relative cursor-pointer w-4 -ml-8"
                    onClick={toggleInputType}
                  />
                </div>
              </div>
              <div className="w-full">
                <p className="Brevia700 text-xl italic my-2">Ripeti password</p>
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  placeholder="Ripeta la password qui..."
                  required
                  value={formData.password2}
                  onChange={handleFieldChange}
                  disabled={isLoading}
                  className="h-16 border-4 border-black px-5 text-xl pop500 w-full"
                  onKeyPress={handleEnterPress}
                />
              </div>
            </div>
          </div>
        </form>

        {error && (
          <p className="text-red-600 text-2xl sm:text-center ml-10">{error}</p>
        )}

        <div className="flex flex-row gap-x-2 w-[95%] mx-auto justify-between">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-[40%] xmd:w-[75%] sm:w-[75%] md:w-[100%] h-12 border-[3px] bg-[#DCFFCF] border-black items-center flex justify-center "
          >
            {isLoading ? (
              <CircularProgress color="success" />
            ) : (
              <p className="pop500 text-black">Aggiorna la mia password</p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordChange;
