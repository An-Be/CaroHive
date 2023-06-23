import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/slices/user';
import { useNavigate } from 'react-router-dom';

const usePostUser = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const registerUser = async (user) => {
        try{
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/local/register`, user);
            console.log(user, response)
            if(response?.error){
            }else{
                dispatch(setUser({jwt: response?.data?.jwt, email: response?.data?.user?.email}))
                navigate('/shop/women')
            }
        }catch(error){
            console.log(error)
        }
    }

    const loginUser = async (user) => {
        try{
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/local`, user)
            if(response?.error){
                console.log(response?.error)
            }else{
                dispatch(setUser({jwt: response?.data?.jwt, email: response?.data?.user?.email}))
                navigate('/shop/women')
            }
        }catch(error){
            console.log(error)
        }
    }

    return{
        registerUser,
        loginUser
    }
}
export default usePostUser;