import UserSide from '../../components/navigation/sidenav/UserSide';
import { Outlet } from 'react-router-dom';
import Topnav from '../../components/navigation/topnav/Topnav';




const UserLayout = () => {
    return (
        <div >
            <Topnav />
            <div className="flex m-0 p-0">
                <UserSide className='absolute' />

                <Outlet className='relative' />
            </div>
        </div>
    );
};

export default UserLayout;

