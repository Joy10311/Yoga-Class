import React from 'react';
import useClasses from '../../Hooks/useClasses';

const Classes = (props) => {
    const { began, description, email, gender, id, person, personImg, image, title } = props.cls;

    return (
        <div>
            <h1>this the classes:</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default Classes;