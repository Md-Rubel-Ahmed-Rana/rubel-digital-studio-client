
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const useToken = () => {
    const navigate = useNavigate()
    // get jwt token
    const token = (currentUser) => {
        fetch("http://localhost:5000/jwt", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(currentUser)
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("access-token", data.token);
                swal("Good job!", "Logged in successfully", "success");
                navigate("/")
            })
            .catch((err) => console.log(err))
    }

    return token
};

export default useToken;