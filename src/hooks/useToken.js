import axios from "axios";
import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    const [resData, setResData] = useState(null)
    const [tokenLoading, setTokenLoading] = useState(true);
    const getJwt = async (email) => {
        const res = await axios.get(`http://localhost:5000/jwt?email=${email}`);
        console.log(res.data)
        setResData(res.data)
    }
    useEffect(() => {
        if (email) {
            getJwt(email);

            if (resData) {
                localStorage.setItem('accessToken', resData.accessToken);
                setToken(resData.accessToken);
                setTokenLoading(false);
            }
        }
    }, [email, resData])

    return [token, tokenLoading]
}

export default useToken;