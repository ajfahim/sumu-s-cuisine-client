import axios from "axios";
import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    const [resData, setResData] = useState(null)

    const getJwt = async (email) => {
        const res = await axios.get(`https://sumus-cuisine-server.vercel.app/jwt?email=${email}`);
        console.log(res.data)
        setResData(res.data)
    }
    useEffect(() => {
        if (email) {
            getJwt(email);

            if (resData) {
                localStorage.setItem('accessToken', resData.accessToken);
                setToken(resData.accessToken);

            }
        }
    }, [email, resData])

    return [token]
}

export default useToken;