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
            <h2 className="font-bold text-6xl pt-5 pb-5 text-blue-600">Our Class</h2>
            <div className="grid grid-cols-4 ">
                {
                    classes.map(cls => <Classes

                        cls={cls}
                    ></Classes>)
                }

            </div>
        </div>
    );
};



export default Home;