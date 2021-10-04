import { useEffect, useState } from "react"

const useClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/8c4efe0f-9737-4063-8cc4-887e64791c86')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);
    return [classes]
}
export default useClasses;