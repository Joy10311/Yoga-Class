import React, { useEffect, useState } from 'react';
import Classes from '../Classes/Classes';

const Home = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/081a9b66-89bd-440e-922f-836c8767dea5')
            .then(res => res.json())
            .then(data => setClasses(data))

    }, [])


    return (
        <div>
            <h2 className="font-bold text-5xl pt-5 pb-5 text-blue-600">Our Class</h2>
            <div className="grid grid-cols-4 ">
                {
                    classes.slice(0, 4).map(cls => <Classes

                        cls={cls}
                    ></Classes>)
                }

            </div>
        </div>
    );
};



export default Home;