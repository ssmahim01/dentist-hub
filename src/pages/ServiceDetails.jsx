import { Link, useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";

const ServiceDetails = () => {
    const detailsData = useLoaderData();
    const {treatment, image, description} = detailsData;
  return (
    <div
      className="hero min-h-screen my-10"
      style={{
        backgroundImage:
          `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="lg:w-3/5 space-y-6">
          <h1 className="mb-5 md:text-5xl text-4xl font-bold">{treatment}</h1>
          <p className="mb-5">
           {description}
          </p>
          <button onClick={()=>document.getElementById('details_modal').showModal()} className="btn btn-outline border-2 border-amber-400 text-white hover:btn-warning font-bold">Book Appointment</button>
          <button className="ml-5 btn btn-outline border-2 border-cyan-400 text-white hover:btn-accent font-bold">
            <Link to="/">Back to Home</Link>
          </button>
        </div>
      </div>

      <Modal treatment={treatment}></Modal>
    </div>
  );
};

export default ServiceDetails;
