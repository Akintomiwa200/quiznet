import { UserProvider } from './context/UserContext'
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx'
import router from './router.jsx';
// import { GoogleOAuthProvider } from "@react-oauth/google"



const App = () => {
  return (
    <div>
      {/* <GoogleOAuthProvider clientId='1009282809407-sh8h2kgmot2q295a503sl5530pldnaj9.apps.googleusercontent.com'> */}
      <UserProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </UserProvider>
      {/* </GoogleOAuthProvider> */}
    </div>
  );
};

export default App;


