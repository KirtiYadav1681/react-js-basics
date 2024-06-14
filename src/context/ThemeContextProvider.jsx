import React from 'react';
import themeContext from './themeContext';

const ThemeContextProvider = ({children}) => {
    const theme = "dark";
  return (
    <themeContext.Provider value={theme}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeContextProvider