import { createBrowserRouter } from 'react-router-dom';
// import ProtectedRoute from './routes/ProtectedRoute';
import UserLayout from './layout/userlayout/UserLayout';
import Home from './pages/Home';
import SignInAs from './pages/signInAs/SignInAs';
import SignUp from './pages/signUp/SignUp';
import AdminSignUp from './pages/adminsignUp/adminSignUp';
import CreateQuestion from './pages/admin/admindashboard/CreateQuestion';
import Login from './pages/login/Login';
import AdminProfile from './pages/admin/AdminProfile';
import AdminSettings from './pages/admin/AdminSettings';
import AdminLayout from './layout/adminlayout/AdminLayout';
import Accounting from './pages/questions/accounting/Accounting';
import BuinessAdmin from './pages/questions/businessAdmin/BuinessAdmin';
import Marketing from './pages/questions/marketing/Marketing'
import InformationTech from './pages/questions/informationTech/InformationTech';
import Logistics from './pages/questions/logicstics/Logicstics'
import Result from './pages/admin/admindashboard/Result';
import ProjectManagement from './pages/questions/projectManagement/ProjectManagement';
import Loading from './components/loading/Loading';
import Admin from './pages/admin/admindashboard/Admin';
import SignInAdmin from './pages/signInAdmin/SignInAdmin';
import LogoutAdmin from './pages/admin/admindashboard/LogoutAdmin';
import AddUser from './pages/admin/admindashboard/AddUser';
import DeleteUser from './pages/admin/admindashboard/DeleteUser';
import Settings from './pages/admin/admindashboard/Settings';
import ViewUsers from './pages/admin/admindashboard/ViewUsers';
import ForgetPassword from './pages/forgetpassword/ForgetPassword'
import UserDashboard from './pages/particitant/userdashboard/UserDashboard'
import Profile from './pages/particitant/userdashboard/Profile';
import UserSettings from './pages/particitant/userdashboard/UserSettings';
import TakeCuzQuiz from './pages/particitant/userdashboard/TakeCuzQuiz'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signInAs',
    element: <SignInAs />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/adminsignup',
    element: <AdminSignUp />,
  },

  {
    path: '/signinadmin',
    element: <SignInAdmin />,
  },
  {
    path: '/accounting',
    element: <Accounting />,
  },
  {
    path: '/buinessAdmin',
    element: <BuinessAdmin />,
  },
  {
    path: '/infomationTech',
    element: <InformationTech />,
  },
  {
    path: '/logistics',
    element: <Logistics />,
  },
  {
    path: '/marketing',
    element: <Marketing />,
  },
  {
    path: '/projectManagement',
    element: <ProjectManagement />,
  },
  {
    path: '/userdashboard',
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
      {
        path: '/userdashboard/profile',
        element: <Profile />,
      },
      {
        path: '/userdashboard/settings',
        element: <UserSettings />
      },
      {
        path: '/userdashboard/takeQuiz',
        element: <TakeCuzQuiz />
      },
      {
        path: '/userdashboard/cuzQuiz',
        element: <TakeCuzQuiz />
      },
      {
        path: '/userdashboard/normalQuiz',
        element: <TakeCuzQuiz />
      },
    ],
  },

  {
    path: '/admin',
    element: (
      // <ProtectedRoute>
      <AdminLayout />
      // </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Admin />
      },
      {
        path: '/admin/profile',
        element: <AdminProfile />,
      },
      {
        path: '/admin/settings',
        element: <AdminSettings />
      },
      {
        path: '/admin/createQuiz',
        element: <CreateQuestion />,
      },
      {
        path: '/admin/results',
        element: <Result />,
      },
      {
        path: '/admin/addUser',
        element: <AddUser />
      },
      {
        path: '/admin/viewusers',
        element: <ViewUsers />
      },
      {
        path: '/admin/deleteUser',
        element: <DeleteUser />
      },
      {
        path: "/admin/logout",
        element: <LogoutAdmin />
      },
      {
        path: '/admin/settings',
        element: <Settings />
      },

    ]
  },
  {
    path: '/loading',
    element: <Loading />,
  },
  {
    path: '/forget',
    element: <ForgetPassword />
  }
]);

export default router;
