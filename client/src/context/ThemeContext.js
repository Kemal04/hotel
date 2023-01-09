import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider