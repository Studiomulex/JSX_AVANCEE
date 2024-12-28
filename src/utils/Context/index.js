import {createContext } from 'react';
import PropTypes from 'prop-types';
export const ThemeContext = createContext({});
export const ThemeProvider=({children})=>{
    return(
        <ThemeContext.Provider value={{}}>
            {children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children:PropTypes.node.isRequired,
};