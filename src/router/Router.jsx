import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/layoutPublic";
import Blog from "../pages/Blog";
import Calendar from "../pages/Calendar";
import Club from "../pages/Club";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Licenses from "../pages/Licenses";
import LicensesHealthInsurance from "../pages/LicensesHealthInsurance";
import LicensesImageRights from "../pages/LicensesImageRights ";
import LicensesInscriptionFak from "../pages/LicensesInscriptionFak";
import LicensesInscriptionImd from "../pages/LicensesInscriptionImd";
import LicensesInfoPage from "../pages/LicensesInfoPage";
import LicensesBeltExam from "../pages/LicensesBeltExam";
import SeeNew from "../pages/SeeNew";
import SeeResource from "../pages/SeeResource";
import scheduleHandler from '../handlers/scheduleHandler';
import trainerHandler from '../handlers/trainerHandler';
import resourceHandler from '../handlers/resourceHandler';
import eventHandler from '../handlers/eventHandler';
import Cookies from "../pages/Cookies";
import Privacy from "../pages/Privacy";
import Legal from "../pages/Legal";
import Login from "../pages/Login";
import AdminView from "../pages/AdminView";
import AVevents from "../pages/AVeventes";
import AVourteam from "../pages/AVourteam";
import AVresources from "../pages/AVresources";
import AVschedule from "../pages/AVschedule";
// acept both changes
import BlogDetailView from "../pages/BlogDetailView";
import EditViewSchedule from "../pages/EditViewschedule";
import EditViewResoruces from "../pages/EditViewresources";
import EditViewOurTeam from "../pages/EditViewourteam";
import EditViewEvent from "../pages/EditViewevents";
import AddViewSchedule from "../pages/AddViewSchedule";
import AddViewResource from "../pages/AddViewResource";
import AddViewTrainer from "../pages/AddViewTrainer";
import AddViewEvent from "../pages/AddViewEvent";
import SendedContactForm from "../pages/SendedContactForm";





export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        children: [
                    {
                        index: true,
                        element: <Home/>,
                        loader: fetchSchedules,
                    },
                    {
                        path: '/calendario',
                        element: <Calendar />,
                        loader: fetchSchedules,
                    },
                    {
                        path: '/nuestro-club',
                        element: <Club/>,
                        loader: fetchTrainers,
                    },    
                    {
                        path: '/blog-recursos',
                        element: <Blog />,
                        loader: fetchResources,
                        loader: fetchEvents,
                    },
                    {
                        path: '/noticias/:id',
                        element: <SeeNew />,
                        loader: fetchEvent,
                    },
                    {
                        path: '/recursos/:id',
                        element: <SeeResource />,
                        loader: fetchResource,
                    },
                    {
                        path: '/licencias',
                        element: <Licenses />,
                    }, 
                    {
                        path: '/licencias/seguro',
                        element: <LicensesHealthInsurance/>,
                    },
                    {
                        path: '/licencias/derechosdeimagen',
                        element: <LicensesImageRights/>,
                    },
                    {
                        path: '/licencias/inscripcionfak',
                        element: <LicensesInscriptionFak/>,
                        //loader: fetchDocuments,
                    },
                    {
                        path: '/licencias/inscripcionImd',
                        element: <LicensesInscriptionImd/>,
                    },
                    {
                        path: '/licencias/licensesinfo',
                        element: <LicensesInfoPage/>,
                    },
                    {
                        path: '/licencias/examenescinturon',
                        element: <LicensesBeltExam/>,
                    },
                    {
                        path: '/contacto',
                        element: <Contact />,
                    },
                    {
                        path: '/aviso-legal',
                        element: <Legal />,
                    },
                    {
                        path: '/politica-cookies',
                        element: <Cookies />,
                    },
                    {
                        path: '/politica-privacidad',
                        element: <Privacy />,
                    },  
                    {
                        path: '/login',
                        element: <Login />,
                    },
                    {
                        path: '/admin',
                        element: <AdminView />,
                    },
                    {
                        path: '/admin/noticias',
                        element: <AVevents />,
                        loader: fetchEvents,
                    },
                    {
                        path: '/admin/nuestroequipo',
                        element: <AVourteam />,
                        loader: fetchTrainers,
                    },
                    {
                        path: '/admin/recursos',
                        element: <AVresources />,
                        loader: fetchResources,
                    },
                    {
                        path: '/admin/horario',
                        element: <AVschedule />,
                        loader: fetchSchedules,
                    },
                    // acept both changes
                    {
                        path: '/vistadetalle/:id',
                        element: <BlogDetailView />,
                        loader: fetchEvent,
                    },
                    {
                        path: '/admin/editar/horario/:id',
                        element: < EditViewSchedule />,
                        loader: fetchSchedule,
                    },
                    {
                        path: '/admin/editar/recursos/:id',
                        element: < EditViewResoruces />,
                        loader: fetchResource,
                    },
                    {
                        path: '/admin/editar/nuestroequipo/:id',
                        element: < EditViewOurTeam/>,
                        loader: fetchTrainer,
                    },
                    {
                        path: '/admin/editar/noticias/:id',
                        element: < EditViewEvent/>,
                        loader: fetchEvent,
                    },
                    {
                        path: '/admin/añadir/horario',
                        element: < AddViewSchedule/>,
                        loader: fetchSchedule,
                    },
                    {
                        path: '/admin/añadir/recursos',
                        element: < AddViewResource/>,
                    },
                    {
                        path: '/admin/añadir/nuestroequipo',
                        element: < AddViewTrainer/>,
                        
                    },
                    {
                        path: '/admin/añadir/noticias',
                        element: < AddViewEvent/>,
                    },
                    {
                        path: '/formularioenviado',
                        element: < SendedContactForm/>,
                    },


                ]
            },
        ]
);

async function fetchEvents() {
    const Events = await eventHandler.loadEvents();
    return { Events };
}

async function fetchEvent({ params }) {
    const Event = await eventHandler.loadEvent(params.id);
    return { Event };
}

async function fetchSchedules() {
    const Schedules = await scheduleHandler.loadSchedules();
    return { Schedules };
}

async function fetchSchedule({ params }) {
    const Schedule = await scheduleHandler.loadSchedule(params.id);
    return { Schedule };
}

async function fetchTrainers() {
    const Trainers = await trainerHandler.loadTrainers();
    return { Trainers };
}

async function fetchTrainer({ params }) {
    const Trainer = await trainerHandler.loadTrainer(params.id);
    return { Trainer };
}

async function fetchResources() {
    const Resources = await resourceHandler.loadResources();
    return { Resources };
}

async function fetchResource({ params }) {
    const Resource = await resourceHandler.loadResource(params.id);
    return { Resource };
}
