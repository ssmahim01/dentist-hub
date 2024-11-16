import { NavLink } from "react-router-dom";

const ServiceCards = ({ allService }) => {
  const { id, treatment, description, image, cost } = allService;

  return (
    <div className="card bg-base-100 shadow-md">
      <figure>
        <img
          src={image}
          alt={treatment}
          className="w-full h-52"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">
         {treatment}
          <div className="badge badge-warning text-white font-medium">${cost}</div>
        </h2>
        <p className="text-gray-500 font-medium">{description.slice(0, 110)}...</p>
        <div className="card-actions justify-center block mt-4">
          <NavLink to={`/details/${id}`}>
            <button className="btn w-full text-base btn-success text-white font-semibold">
                Checkout More
            </button>
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;