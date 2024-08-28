import { useState } from "react";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const PaymentSettings = ({ registrationData }) => {
    const [holder, setHolder] = useState("");
    const [bank, setBank] = useState("");
    const [account, setAccount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const axios = axiosInstance;

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        await axios
            .post("content-creators/register", {
                ...registrationData,
                accountDetails: {
                    accountHolder: holder,
                    bankName: bank,
                    accountNumber: account,
                },
            })
            .then((_) => {
                toast("Account created successfully");
                navigate("/dashboard/settings")
            })
            .catch((error) => {
                toast(error.response.data || "An error occurred, try again later");
            });

        setIsLoading(false);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-blue-600 p-4">
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-between items-center mb-36 w-screen">
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
                <form method="post" onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        <h5 className="text-white text-2xl text-center">Payment info</h5>
                        <div className='flex flex-col'>
                            <label className="text-white mb-1 text-sm" htmlFor="holder">
                                Account Holder Name
                            </label>
                            <input
                                type="text"
                                id="holder"
                                name=""
                                required
                                value={holder}
                                onChange={(e) => setHolder(e.target.value)}
                                className="w-[30vw] py-2 px-4 rounded inline-block outline-none border-2 focus:border-slate-500 transition-all duration-300 mt-1"
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className="text-white mb-1 text-sm" htmlFor="bank">
                                Bank Name
                            </label>
                            <input
                                type="text"
                                id="bank"
                                name=""
                                required
                                value={bank}
                                onChange={(e) => setBank(e.target.value)}
                                className="w-[30vw] py-2 px-4 rounded inline-block outline-none border-2 focus:border-slate-500 transition-all duration-300 mt-1"
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className="text-white mb-1 text-sm" htmlFor="account">
                                Account Number
                            </label>
                            <input
                                type="text"
                                id="account"
                                name=""
                                required
                                value={account}
                                onChange={(e) => setAccount(e.target.value)}
                                className="w-[30vw] py-2 px-4 rounded inline-block outline-none border-2 focus:border-slate-500 transition-all duration-300 mt-1"
                            />
                        </div>


                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentSettings
