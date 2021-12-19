import React, { useContext } from 'react';
import { ThemeContext } from '../theme-context';

const ThemedButton = (props) => {
    const theme = useContext(ThemeContext);

    return (
        <button
            {...props}
            style={{ background: theme.background, color: theme.foreground }}>
            Change Theme
        </button>
    );
};

export default ThemedButton;