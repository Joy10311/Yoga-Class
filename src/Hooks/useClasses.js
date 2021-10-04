import { useEffect, useState } from "react"

const useClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/081a9b66-89bd-440e-922f-836c8767dea5')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);
    return [classes, setClasses]
}
export default useClasses;