import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "../../public/Scripts/context";
import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar/Navbar";
import Body from "./Main/Body";
import { dataReducer, initialState } from "../../public/Scripts/dataReducer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainPage() {
  const [state, dispatch] = useReducer(dataReducer,initialState)
  const [darkMode, setDarkMode] = useState(true);


  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <section className={`h-full w-full ${darkMode ? "dark" : ""}`}>
            <Navbar />
            <Body />
            <Footer />
          </section>
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default MainPage;
