import BannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col md:flex-row-reverse justify-between">
        <img
          src={BannerImg}
          alt="Dentist Banner"
          className="md:w-1/2 rounded-lg"
        />
        <div className="lg:w-5/12 space-y-5">
          <h1 className="lg:text-4xl text-2xl font-bold">Find The Best Dentist</h1>
          <p className="text-gray-500 lg:text-base text-sm font-medium">
            Teeth is valuable thing in our body. We should care about our teeth. When any patient has broken teeth then the dentist can fix it.So, we do not hesitate to go dentist center.
          </p>
          <button className="btn px-6 text-white font-bold btn-info uppercase">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
