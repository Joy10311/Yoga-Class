import React, { useEffect, useState } from 'react';
import Classes from '../Classes/Classes';

const Home = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/8c4efe0f-9737-4063-8cc4-887e64791c86')
            .then(res => res.json())
            .then(data => setClasses(data))

    }, [])
    return (
        <div>
            <h2>this is home {classes.length}</h2>
            {
                classes.map(cls => <Classes cls={cls}></Classes>)
            }

        </div>
    );
};

export default Home;