import { useLoaderData } from "react-router-dom";
import ServiceCards from "../components/ServiceCards";

const Treatments = () => {
    const services = useLoaderData();

    return (
        <div className="w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-14">
           {
            services.map(service => <ServiceCards key={service.id} allService={service}></ServiceCards>)
           }
        </div>
    );
};

export default Treatments;