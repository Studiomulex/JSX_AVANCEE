import {createContext } from 'react';
import PropTypes from 'prop-types';
export const ThemeContext = createContext({});
export const ThemeProvider=({Children})=>{
    return(
        <ThemeContext.Provider value={{}}>
            {Children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children:PropTypes.node.isRequired,
};