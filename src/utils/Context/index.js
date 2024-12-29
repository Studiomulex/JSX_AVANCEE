import { createContext, useState } from "react";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";
export const ThemeContext = createContext();

export const ThemeProvider = () => {
const [theme,setTheme]=useState('light');
const toggleTheme=()=>{
  setTheme((prevTheme)=>prevTheme === 'light' ? 'dark' : 'light');
}
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
     <Footer/>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
