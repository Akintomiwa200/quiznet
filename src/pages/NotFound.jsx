import Button from '../../components/button/Button'
import load from "../../assets/load.svg"
import { Link } from 'react-router-dom'



const NotFound = () => {
    return (
        <div className='h-[90vh] flex flex-col justify-center items-center bg-gray-200'>
            <img src={load} alt="loading......." />
            {/* <h5 className='text-[2em]'>Error 404</h5> */}
            <p className='m-0 p-0 text-[5em] bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent animate-move'>
                Page Not Found
            </p>
            <Link to="" className='mt-[3em]'><Button name="Back to Main Page" /></Link>
        </div>
    )
}

export default NotFound
