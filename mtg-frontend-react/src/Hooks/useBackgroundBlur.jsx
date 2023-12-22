import { useState } from 'react';

const useBackgroundBlur = () => {
    const [isBlurred, setIsBlurred] = useState(false);

    const enableBlur = () => {
        setIsBlurred(true);
    };

    const disableBlur = () => {
        setIsBlurred(false);
    };

    return {
        isBlurred,
        enableBlur,
        disableBlur,
    };
};

export default useBackgroundBlur;
