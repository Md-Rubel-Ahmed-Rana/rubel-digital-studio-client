import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = "Rubel Studio: " +  title 
    }, [title])
};

export default useTitle;