import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx';
import ErrorPage from './pages/ErrorPage.jsx'
 
const routeDefinitions = createRoutesFromElements(
  <Route path='/' element={<App/>} errorElement={<ErrorPage/>}>
    <Route index element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
  </Route>
);

const appRouter = createBrowserRouter(routeDefinitions);
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     errorElement: <ErrorPage/>,
//     children: [
//       {
//         index: true,
//         element: <Home/>
//       },
//       {
//         path: "/home",
//         element: <Home/>
//       },
//       {
//         path: "/about",
//         element: <About/>
//       },
//       {
//         path: "/contact",
//         element: <Contact/>
//       },
//       {
//         path: "/login",
//         element: <Login/>
//       },
//       {
//         path: "/cart",
//         element: <Cart/>
//       }
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>
)
