import React, { useContext } from 'react';
import ThemedButton from './ThemedButton';

const Toolbar = (props) => {
    return (
        <div>
            <ThemedButton onClick={props.changeTheme} />
            <p>
                The next generation
            </p>
        </div>
    );
};

export default Toolbar;