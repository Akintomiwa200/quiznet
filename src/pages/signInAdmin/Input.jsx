import { useState } from 'react';
import Mail from '../../assets/mail.png';
import Key from '../../assets/key.png';
import { useAuth } from '../../context/AuthContext'; // Import useAuth hook
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const Input = () => {
    const [formData, setFormData] = useState({
        password: '',
        email: ''
    });
    const [loading, setLoading] = useState(false); // State for loading animation
    // const { loginAsAdmin } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading animation
        try {
            // Simulate authentication with hardcoded admin credentials
            const adminUsername = 'admin@example.com';
            const adminPassword = 'admin123';

            if (formData.email === adminUsername && formData.password === adminPassword) {
                loginAsAdmin();
                // Simulate delay before redirecting to admin dashboard
                setTimeout(() => {
                    window.location.href = '/admin'; // Redirect to admin dashboard
                }, 1000); // Adjust the delay as needed
            } else {
                // Handle incorrect credentials
                console.error('Invalid username or password');
            }
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setLoading(false); // Stop loading animation
        }
    };

    const handleClear = () => {
        setFormData({
            password: '',
            email: ''
        });
    };

    return (
        <div className='w-[30vw] m-0 p-0 flex flex-col justify-content jusitfy-center items-center'>
            <form className='w-[30vw] flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 w-[100vw] lg:w-[30vw] items-center">
                    <div className="flex w-[80vw] lg:w-[25vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
                        <label htmlFor="email" className="flex items-center w-full">
                            <span className="absolute left-2"><img src={Mail} alt="" /></span>
                            <input
                                type="email"
                                placeholder="Type your email"
                                name="email"
                                id='email'
                                className='pl-8 w-full'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="flex w-[80vw] lg:w-[25vw] items-center justify-center h-8 relative mb-4 lg:mb-0">
                        <label htmlFor="password" className="flex items-center w-full">
                            <span className="absolute left-2"><img id='key' src={Key} alt="" /></span>
                            <input
                                type="password"
                                placeholder="Type your password"
                                id='password'
                                className='pl-8 w-full'
                                value={formData.password}
                                onChange={handleChange}
                                name="password"
                            />
                        </label>
                    </div>
                </div>
                <div className='my-2 text-left w-[80vw] lg:w-[25vw]'>
                    <h4 className='text-left'>Forget password
                        <Link to='/forget' className='text-blue-700'> click here </Link>
                    </h4>
                </div>
                <div className='flex gap-8 mt-4 w-[40vw] justify-center items-center'>
                    <button id='sub' className='px-6 py-2 bg-blue-500 text-white' disabled={loading}>
                        {loading ? (
                            <ClipLoader size={30} color="#ccc" />
                        ) : (
                            "submit"
                        )}
                    </button>
                    <button type='button' className='px-6 bg-red-500 text-white py-2' onClick={handleClear}>Clear</button>
                </div>
            </form>
        </div>
    );
};

export default Input;
