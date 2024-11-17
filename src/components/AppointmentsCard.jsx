const AppointmentsCard = ({ data }) => {
  console.log(data);
  return (
    <div className="p-6 bg-base-100 border border-gray-300 shadow-md rounded-2xl space-y-4">
      <h2 className="md:text-xl text-lg font-bold">
        Treatment: {data.treatment}
      </h2>
      <h3 className="md:text-lg text-gray-900 font-semibold border-b border-gray-300 pb-5">
        Patient Name: {`${data.firstName} ${data.lastName}`}
      </h3>

      <div className="space-y-2">
        <p className="text-gray-600 font-medium">
          Appointment Date: {data.appointmentDate}
        </p>
        <p className="text-gray-600 font-medium">Email: {data.email}</p>
        <p className="text-gray-600 font-medium">Phone: {data.phoneNumber}</p>
      </div>
    </div>
  );
};

export default AppointmentsCard;
