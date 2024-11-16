import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import MyAppointments from './pages/MyAppointments';
import Profile from './pages/Profile';
import ServiceDetails from './pages/serviceDetails';

const router = createBrowserRouter([
  {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
          {
              path: "/",
              element: <Home></Home>,
              loader: async ()=> {
                const serviceResponse = await fetch("/service.json")
                const serviceData = await serviceResponse.json()

                const feedbackResponse = await fetch("/happyClients.json")
                const feedbackData = await feedbackResponse.json()

                return {serviceData, feedbackData}
              },
          },
          {
            path: "/details/:id",
            element: <ServiceDetails></ServiceDetails>,
            loader: async ({params})=> {
              const res = await fetch("/service.json")
              const data = await res.json()
              const perData = data.find(single => single.id == params.id)

              return perData;
            }
          },
          {
              path: "/treatments",
              element: <Treatments></Treatments>,
              loader: () => fetch("/service.json")
          },
          {
              path: "/myAppointments",
              element: <MyAppointments></MyAppointments>
          },
          {
              path: "/profile",
              element: <Profile></Profile>
          }
      ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)