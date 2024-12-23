import DashboardView from '@/pages/Admin/Dashboard/AdminPage';
import LoginPage from '@/pages/Auth/LoginPage';
import RegistrationPage from '@/pages/Auth/RegisterPage';
import PageNotFound from '@/pages/PageNotFound';
import ExitVehicle from '@/pages/Public/ExitVehicle';
import HomePage from '@/pages/Public/HomePage';
import ParkingLot from '@/pages/Public/ParkingLot';
import ParkVehicle from '@/pages/Public/ParkVehicle';


const PublicRoutes = [{
        path: '/',
        component: HomePage,
         layout: 'public'
    },
    {
        path: '/login',
        component: LoginPage,
         layout: 'public'
    },
    {
        path: '/register',
        component: RegistrationPage,
         layout: 'public'
    },

    {
        path: '/park-vehicle/:id',
        component: ParkVehicle,
         layout: 'public'
    },
    {
        path: '/exit-vehicle',
        component: ExitVehicle,
         layout: 'public'
    },
    {
        path: '/parking-lot',
        component: ParkingLot,
         layout: 'public'
    },
    {
        path: '*',
        component: PageNotFound
    },

];

export default PublicRoutes;