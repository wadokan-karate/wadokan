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
import SeeNew from "../pages/SeeNew";
import SeeResource from "../pages/SeeResource";
import scheduleHandler from '../handlers/scheduleHandler';
//import eventHandler from '../handlers/eventHandler';
//import ResourceHandler from '../handlers/ResourceHandler';
//import DocumentHandler from '../handlers/DocumentHandler';
import Cookies from "../pages/Cookies";
import Privacy from "../pages/Privacy";
import Legal from "../pages/Legal";
import Login from "../pages/Login";
import LicensesInscriptionFak from "../pages/LicensesInscriptionFak";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        children: [
                    {
                        index: true,
                        element: <Home/>,
                        //loader: fetchPhotos,
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
                    },    
                    {
                        path: '/blog-recursos',
                        element: <Blog />,
                        //loader: fetchResources,
                        //loader: fetchEvents,
                    },
                    {
                        path: '/noticias/:id',
                        element: <SeeNew />,
                        //loader: fetchEvent,
                    },
                    {
                        path: '/recursos/:id',
                        element: <SeeResource />,
                        //loader: fetchResource,
                    },
                    {
                        path: '/licencias',
                        element: <Licenses />,
                        //loader: fetchDocuments,
                    }, 
                    {
                        path: '/licencias/seguro',
                        element: <LicensesHealthInsurance/>,
                        //loader: fetchDocuments,
                    },
                    {
                        path: '/licencias/derechosdeimagen',
                        element: <LicensesImageRights/>,
                        //loader: fetchDocuments,
                    },
                    {
                        path: '/licencias/inscripcionfak',
                        element: <LicensesInscriptionFak/>,
                        //loader: fetchDocuments,
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
                    }
                ]
            },
        ]
);

/* async function fetchPhotos() {
    const Photos = await PhotoHandler.loadPhotos();
    return { Photos };
}

async function fetchPhoto({ params }) {
    const Photo = await PhotoHandler.loadPhoto(params.id);
    return { Photo };
} */

async function fetchSchedules() {
    const Schedules = await scheduleHandler.loadSchedules();
    return { Schedules };
}

async function fetchSchedule({ params }) {
    const Schedule = await scheduleHandler.loadSchedule(params.id);
    return { Schedule };
}

/* async function fetchEvents() {
    const Events = await EventHandler.loadEvents();
    return { Events };
}

async function fetchEvent({ params }) {
    const Event = await EventHandler.loadEvent(params.id);
    return { Event };
} */

/* async function fetchResources() {
    const Resources = await ResourceHandler.loadResources();
    return { Resources };
}

async function fetchResource({ params }) {
    const Resource = await ResourceHandler.loadResource(params.id);
    return { Resource };
} */

/* async function fetchDocuments() {
    const Documents = await DocumentHandler.loadDocuments();
    return { Documents };
}

async function fetchDocument({ params }) {
    const Document = await DocumentHandler.loadDocument(params.id);
    return { Document };
}
 */