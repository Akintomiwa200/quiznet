import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaPencilAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from 'axios';
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";



const AboutSettings = () => {
    const [formData, setFormData] = useState({
        productionName: "",
        password: "",
        email: "",
        fullName: ""
    });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            setIsLoading(true);
            try {
                const response = await axios.get("content-creators/login", {
                    productionName: formData.productionName,
                    password: formData.password,
                });
                // Handle success response
                toast.success("Login successful");
                navigate("/dashboard/settings")
            } catch (err) {
                toast.error(err.response.data);
            } finally {
                setIsLoading(false);
            }
        } else {
            setErrors(formErrors);
        }
    };

    const validateForm = () => {
        // Add your validation logic here
        const errors = {};
        if (!formData.fullName) errors.fullName = "Full name is required";
        if (!formData.email) errors.email = "Email is required";
        if (!formData.productionName) errors.productionName = "Production name is required";
        if (!formData.password) errors.password = "Password is required";
        return errors;
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <div className="flex justify-center items-center h-[100vh] flex-col overflow-hidden bg-blue-800">
            <div className="flex justify-between items-center mb-20 w-screen">
                <div>
                    <div className="ml-8">
                        <Link to="/dashboard/settings">
                            <IoIosArrowBack className="text-white text-3xl" />
                        </Link>
                    </div>
                </div>
                <h3 className='text-white text-3xl mr-16'>SETTINGS</h3>
                <div></div>
            </div>
            <div className="w-[40vw]">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex justify-center items-center flex-col">
                        <div className="relative w-40 h-40 border border-white flex justify-center items-center rounded-full m-10 overflow-hidden">
                            {image ? (
                                <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
                            ) : (
                                <FaPencilAlt className="text-white text-3xl cursor-pointer translate-x-14 translate-y-8 relative" />
                            )}
                            <input
                                type="file"
                                name="image"
                                id="image"
                                onChange={handleImageChange}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                        </div>
                        <button className="bg-green-700 text-white text-2xl px-2 py-1 translate-y-[-2em] translate-x-40">Save</button>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                        />
                        {errors.fullName && (
                            <p className="text-red-600 text-[0.65rem] font-medium mt-1">
                                {errors.fullName}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                        />
                        {errors.email && (
                            <p className="text-red-600 text-[0.65rem] font-medium">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="my-4">
                        <input
                            type="text"
                            name="productionName"
                            placeholder="Production Name?"
                            value={formData.productionName}
                            onChange={handleChange}
                            className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                        />
                        {errors.productionName && (
                            <p className="text-red-600 text-[0.65rem] font-medium mt-1">
                                {errors.productionName}
                            </p>
                        )}
                    </div>

                    <div className="my-4">
                        <div className="relative my-4">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                name="password"
                                placeholder="Create Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute top-1/2 right-2 -translate-y-[50%] cursor-pointer"
                            >
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-600 text-[0.65rem] font-medium mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AboutSettings;
