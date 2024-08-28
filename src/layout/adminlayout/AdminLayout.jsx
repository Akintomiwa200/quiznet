import { Outlet } from 'react-router-dom'; // Import Outlet from 'react-router-dom'
import AdminSide from '../../components/navigation/sidenav/AdminSide';
import Topnav from '../../components/navigation/topnav/Topnav';

const AdminLayout = () => {
    return (
        <div >
            <Topnav />
            <div className="flex m-0 p-0">
                <AdminSide className='absolute' />

                <Outlet className='relative' />
            </div>
        </div>
    );
};

export default AdminLayout;
