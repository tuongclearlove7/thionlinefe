import Home from "../component/home/Home";
import CreateCategoryQuestion from "../component/CategoryQuestion/CreateCategoryQuestion";
import CreateQuestion from "../component/question/CreateQuestion";
import CreateExam from "../component/exam/CreateExam";
import CreateResult from "../component/result/CreateResult";
import Signup from "../component/auth/Signup";
import Login from "../component/auth/Login";
import Exam from "../component/user/exam/Exam";
import History from "../component/user/exam/History";
import Point from "../component/user/exam/Point";
import DashBoard from "../component/admin/DashBoard";

const list_route_public = [

    {
        name: "Home",
        path: '/home',
        component: <Home />,
        isProtected: true
    },
    {
        name: "Login",
        path: '/login',
        component: <Login />,
        isProtected: false
    },
    {
        name: "Sign-up",
        path: '/sign-up',
        component: <Signup />,
        isProtected: false
    },
];

const list_user_route = [

    {
        name: "Exam",
        path: '/user/exam',
        component: <Exam />,
        isProtected: true
    },
    {
        name: "History",
        path: '/user/exam/history',
        component: <History />,
        isProtected: true
    },
    {
        name: "Point",
        path: '/user/exam/view-point',
        component: <Point />,
        isProtected: true
    },
];

const list_route_in_dropdown = [
    {
        name: "Admin",
        path: '/admin/dashboard',
        component: <DashBoard />,
        isProtected: true
    },
    {
        name: "Create category question",
        path: '/admin/create-category-question',
        component: <CreateCategoryQuestion />,
        isProtected: true
    },
    {
        name: "Create question",
        path: '/admin/create-question',
        component: <CreateQuestion />,
        isProtected: true
    },
    {
        name: "Create exam",
        path: '/admin/create-exam',
        component: <CreateExam />,
        isProtected: true
    },
    {
        name: "Create result",
        path: '/admin/create-result',
        component: <CreateResult />,
        isProtected: true
    },
];

const dropdowns = [
    {
        name: "Dropdown",
        isProtected: true
    },
];

const dropdownOfUsers = [
    {
        name: "User dropdown",
        isProtected: true
    },
];

export default {
    list_route_public : list_route_public,
    dropdowns : dropdowns,
    dropdownOfUsers : dropdownOfUsers,
    list_route_in_dropdown : list_route_in_dropdown,
    list_user_route : list_user_route,
};