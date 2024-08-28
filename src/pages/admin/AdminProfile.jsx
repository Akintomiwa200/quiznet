import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaPencilAlt } from "react-icons/fa";
// import toast from "react-hot-toast";
import axios from 'axios';
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";



const AdminProfile = () => {
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
        
        const errors = {};
        if (!formData.fullName) errors.fullName = "Full name is required";
        if (!formData.email) errors.email = "Email is required";
        if (!formData.productionName) errors.productionName = "Production name is required";
        if (!formData.password) errors.password = "Password is required";
        return errors;
    };


    return (
        <div className="flex justify-center items-center h-[100vh] flex-col overflow-hidden ">
            <div className="flex justify-between items-center w-screen">

            </div>
            <div className="w-[40vw]">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex justify-center items-center flex-col">
                        <div className="relative w-40 h-40 border border-black flex justify-center items-center rounded-full mb-8 mt-0 overflow-hidden">
                            <img src={image} alt="Uploaded" className="w-full h-full object-cover" />

                        </div>

                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            disabled
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                        />

                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            disabled
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                        />

                    </div>

                    <div className="my-4">
                        <input
                            type="text"
                            name="productionName"
                            disabled
                            placeholder="Production Name?"
                            value={formData.productionName}
                            onChange={handleChange}
                            className="w-full py-2 px-4 border-2 focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                        />

                    </div>

                    <div className="my-4">
                        <div className="relative my-4">
                            <input
                                type="password"
                                name="password"
                                disabled
                                placeholder="Create Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full py-2 px-4 border-2 border-black focus:border-slate-500 rounded bg-white text-zinc-800 text-sm outline-none transition-all duration-300"
                            />

                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminProfile;
