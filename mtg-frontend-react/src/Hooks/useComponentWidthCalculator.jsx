import {useEffect, useRef, useState} from "react";


const UseComponentWidthCalculator = () => {
    const [width, setWidth] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setWidth(elementRef.current.offsetWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return {
        ref: elementRef,
        componentWidth: width
    }
};

export default UseComponentWidthCalculator;