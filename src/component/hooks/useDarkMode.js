import React, { useState, useCallback, useEffect } from 'react';

const useDarkMode = () => {
    let [theme, setTheme] = useState('light')

    const toggleTheme = useCallback(() => {
            if (theme === 'light') {
                localStorage.setItem('os-theme', 'dark')
                setTheme('dark')
            } else {
                localStorage.setItem('os-theme', 'light')
                setTheme('light')
            }
        },
        [theme]
    )

    useEffect( () => {
        const localTheme = localStorage.getItem('os-theme')
        if (localTheme){
            setTheme(localTheme)
        }
    }, []);

    return [theme, toggleTheme];
}

export default useDarkMode;