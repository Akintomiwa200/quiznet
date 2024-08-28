
import React from 'react';
import { FaCoins, FaFileInvoiceDollar, FaHome, FaUpload, FaWallet } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const Admin = () => {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <>
            <div className=' py-4 flex flex-col items-center h-screen bg-blue-400'>
                <div className="flex justify-between items-center w-screen"></div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-wrap gap-8 w-full">
                        <div className="w-[22vw] sm-full border border-gray-300 h-36 rounded-lg flex flex-wrap items-center justify-center text-white gap-12 bg-green-600/20 backdrop-blur-sm">
                            <FaCoins className="text-6xl text-green-400" />
                            <div>
                                <h3 className="text-xl">Total Revenue</h3>
                                <span className="flex gap-2">
                                    <p>NGN</p>
                                    <p>5796</p>
                                </span>
                            </div>
                        </div>

                        <div className="w-[22vw] sm-full border border-gray-300 h-36 rounded-lg flex flex-wrap items-center justify-center text-white gap-12 bg-red-400/20 backdrop-blur-sm">
                            <FaFileInvoiceDollar className="text-6xl text-red-400" />
                            <div>
                                <h3 className="text-xl">Total Content View</h3>
                                <p className="text-right mt-2">322</p>
                            </div>
                        </div>

                        <div className="w-[22vw] sm-full border border-gray-300 h-36 rounded-lg flex flex-wrap items-center justify-center text-white gap-6 bg-white/30 backdrop-blur-sm">
                            <FaWallet className="text-6xl text-orange-400" />
                            <div>
                                <h3 className="text-xl">Total Content Uploaded</h3>
                                <p className="text-right mt-2">444</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[69vw] h-48 bg-black/40 my-12 rounded-lg">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="w-[69vw] text-white h-60 bg-transparent">
                        <h4 className="text-lg mb-4">Recently Uploaded</h4>
                        <div>
                            <table className="w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="border-b-2 pb-2">VIDEO</th>
                                        <th className="border-b-2 pb-2">TITLE</th>
                                        <th className="border-b-2 pb-2">UPLOADED DATE</th>
                                        <th className="border-b-2 pb-2">VIEWS</th>
                                        <th className="border-b-2 pb-2">REVENUE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2">hkgk</td>
                                        <td className="py-2">jkgbkjbj</td>
                                        <td className="py-2">gbgnfhn</td>
                                        <td className="py-2">egfnhhnf</td>
                                        <td className="py-2">frewwgbwg</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2">hkgk</td>
                                        <td className="py-2">jkgbkjbj</td>
                                        <td className="py-2">gbgnfhn</td>
                                        <td className="py-2">egfnhhnf</td>
                                        <td className="py-2">frewwgbwg</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="w-[69vw] flex justify-end text-right mt-2">
                        <button type="submit" className="h-10 w-40 text-lg font-bold text-white bg-transparent border border-gray-300 rounded-lg flex justify-center items-center gap-2">
                            <FaUpload className='p-2 bg-orange-500 text-3xl rounded-full' />
                            UPLOAD
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;
