// import { useSelector } from 'react-redux';
// import {Navigate} from 'react-router-dom';
// import Loader from '../layouts/Loader';

// export default function ProtectedRoute ({children, isAdmin}) {
//     const { isAuthenticated, loading, user } = useSelector(state => state.authState)

//     if(!isAuthenticated && !loading) {
//         return <Navigate to="/login" />
//     }

//     if(isAuthenticated) {
//         if(isAdmin === true  && user.role !== 'admin') {
//             return <Navigate to="/" />
//         }
//         return children;
//     }

//     if(loading) {
//         return <Loader/>
//     }

   
// }

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loader from '../layouts/Loader';

export default function ProtectedRoute({ children, isAdmin }) {
  // Extract the authentication state from Redux
  const { isAuthenticated, loading, user } = useSelector((state) => state.authState);

  // Show the loader if the authentication state is still loading
  if (loading) {
    return <Loader />;
  }

  // Redirect to the login page if the user is not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Check if the route is restricted to admins only
  if (isAdmin && user.role !== 'admin') {
    // If the user is not an admin, redirect them to the home page
    return <Navigate to="/" />;
  }

  // If authenticated and authorized, render the protected component
  return children;
}
