import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import ServiceCards from "../components/ServiceCards";
import FeedBack from "../components/FeedBack";

const Home = () => {
    const services = useLoaderData();
    const {serviceData, feedbackData} = services;
    console.log(serviceData, feedbackData);

    return (
        <div className="w-11/12 mx-auto">
            <Banner></Banner>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-5">
                {
                    serviceData.slice(0, 4).map(service => <ServiceCards key={service.id} allService={service}></ServiceCards>)
                }
            </div>

            <button className="btn bg-info text-white font-bold px-8 block mx-auto my-8">
                <NavLink to="treatments">Show More</NavLink>
            </button>

            <FeedBack feedbackData={feedbackData}></FeedBack>
        </div>
    );
};

export default Home;