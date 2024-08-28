import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';

const Home = () => <h1>Home Page</h1>;
const Profile = () => <h1>Profile Page</h1>;
const Settings = () => <h1>Settings Page</h1>;
const Logout = () => <h1>Logout Page</h1>;

const AdminSide = () => {
    // Define menu items with links and icons
    const menuItems = [
        { text: 'Home', link: '/admin', icon: '🏠' },
        { text: 'Profile', link: '/admin/profile', icon: '👤' },
        { text: 'Settings', link: '/admin/settings', icon: '⚙️' },
        { text: 'Create Quiz', link: "/admin/createQuiz", icon: "⏏" },
        { text: 'Result', link: '/admin/results', icon: '💹' },
        { text: 'Add User', link: '/admin/addUser', icon: '➕' },
        { text: 'View Users', link: "/admin/viewusers", icon: "👁‍🗨" },
        { text: 'Delete User', link: '/admin/deleteUser', icon: '❎' },
        { text: 'Logout', link: '/admin/logout', icon: '🚪' },
    ];

    return (
        <div>
            <div >
                <Sidebar menuItems={menuItems} />
            </div>
        </div>
    );
};

export default AdminSide;
