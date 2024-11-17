import { useEffect, useState } from "react";
import AppointmentsCard from "../components/AppointmentsCard";

const MyAppointments = () => {
  const [localSavedData, setLocalSavedData] = useState([]);
  console.log(localSavedData);

  useEffect(() => {
    const localData = localStorage.getItem("appointments");
    let saveData = [];

    if (localData) {
      saveData = JSON.parse(localData);
    }

    setLocalSavedData(saveData);
  }, []);

  return (
    <div>
      <section
        className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-8"
      >
        {localSavedData.map((singleData, index) => (
           <AppointmentsCard key={index} data={singleData}></AppointmentsCard>
        ))}
      </section>
    </div>
  );
};

export default MyAppointments;
