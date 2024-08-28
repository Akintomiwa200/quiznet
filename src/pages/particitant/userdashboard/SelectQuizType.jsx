import LoginImage from '../../assets/imageLogin.png'
import Admin from '../../assets/dashicons_admin-users.png';
import Users from '../../assets/Vector.png';
import { Link } from 'react-router-dom/dist';
const SelectQuizType = () => {
    return (
        <div className='h-[90vh] w-[100vw] flex justify-center items-center'>
            <div className="flex flex-col items-center">

                <div className='flex flex-col lg:flex-row justify-between gap-8'>
                    <Link to='/signinadmin'>
                        <button className="h-[30vh] w-[80vw] lg:h-[20vh] bg-blue-500 lg:bg-white lg:w-[25vw] flex flex-col justify-center items-center hover:bg-blue-200 rounded-lg ">
                            <img id='w-[25px]' src={Admin} alt="" />
                            <h4 id='text-[13px] font-bold'>Sign in as Admin</h4>
                        </button>
                    </Link>
                    <Link to='/login'>
                        <button className="h-[30vh] w-[80vw] lg:h-[20vh] bg-blue-500 lg:bg-white lg:w-[25vw] flex flex-col justify-center items-center hover:bg-blue-200 rounded-lg ">
                            <img id='w-[25px]' src={Users} alt="" />
                            <h4 id='text-[13px] font-bold'>Sign in as Participant</h4>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SelectQuizType