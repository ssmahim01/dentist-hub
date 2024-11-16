import ReactStars from "react-rating-stars-component";

const FeedBack = ({ feedbackData }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-14">
      {feedbackData.map((feedback) => (
        <div className="card bg-base-100 shadow-lg space-y-5 p-4">
          <div className="flex justify-between items-center">
            <figure>
              <img
                src={feedback.userImg}
                alt={feedback.name}
                className="w-12 h-12 rounded-full"
              />
            </figure>
            <h2 className="card-title font-bold">{feedback.name}</h2>
            <p className="text-gray-600 font-semibold badge badge-outline">{new Date().toLocaleDateString()}</p>
          </div>
          <p className="text-gray-500 font-medium">{feedback.review}</p>

          <div className="mx-auto">
            <ReactStars
              count={5}
              size={30}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedBack;