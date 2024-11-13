import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";

const Appointment = () => {
  const { docid } = useParams();
  const { doctors, currencysem } = useContext(AppContext);

  const daysofweek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docinfo, setDoctorInfo] = useState(null);
  const [docslot, setdocslot] = useState([]);
  const [slotindex, setslotindex] = useState(0);
  const [slottime, setslottime] = useState("");

  const fetchinfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docid);
    setDoctorInfo(docInfo);
  };

  const getavailableslot = async () => {
    setdocslot([]);
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentdate = new Date(today);
      currentdate.setDate(today.getDate() + i);

      let endtime = new Date();
      endtime.setDate(today.getDate() + i);
      endtime.setHours(24, 0, 0, 0);

      if (today.getDate() === currentdate.getDate()) {
        currentdate.setHours(
          currentdate.getHours() > 10 ? currentdate.getHours() + 1 : 10
        );
        currentdate.setMinutes(currentdate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentdate.setHours(10);
        currentdate.setMinutes(0);
      }

      let timeslot = [];

      while (currentdate < endtime) {
        let formattedTime = currentdate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeslot.push({
          datetime: new Date(currentdate),
          time: formattedTime,
        });

        currentdate.setMinutes(currentdate.getMinutes() + 30);
      }

      setdocslot((prev) => [...prev, timeslot]);
    }
  };

  useEffect(() => {
    fetchinfo();
  }, [doctors, docid]);

  useEffect(() => {
    if (docinfo) {
      getavailableslot();
    }
  }, [docinfo]);

  useEffect(() => {
    console.log(docslot);
  }, [docslot]);

  return (
    <div>
      <div>
        {docinfo ? (
          <div className="justify-center items-center flex flex-col md:flex-row gap-5">
            <div className="w-1/3">
              <img
                className="bg-blue-400 rounded-xl"
                src={docinfo.image}
                alt="Doctor"
              />
            </div>
            <div className="border border-gray-300 p-4 rounded-lg w-2/3 gap-14 ">
              <h1 className="flex gap-3 font-semibold text-xl">
                {docinfo.name}{" "}
                <img className="w-4" src={assets.verified_icon} alt="" />
              </h1>
              <div className="flex py-2 sm:flex-row flex-col">
                <p>{docinfo.degree}</p>
                <p className="pr-2"> - {docinfo.speciality} </p>
                <p className="px-2 border border-gray-300 rounded-full">
                  {docinfo.experience}
                </p>
              </div>

              <p className="font-bold text-m py-1">About</p>
              <p>{docinfo.about}</p>
              <p>
                Appointment fees: {currencysem} {docinfo.fees}
              </p>
            </div>
          </div>
        ) : (
          <p>Loading doctor information...</p>
        )}
      </div>
      <div className="flex flex-col gap-5 items-center my-10 ">
        <p className="font-semibold">Booking Slots</p>

        <div className="font-medium flex gap-10">
          {docslot.length > 0 &&
            docslot.map((item, index) => (
              <div
                onClick={() => setslotindex(index)}
                key={index}
                className={`flex flex-col items-center justify-center cursor-pointer text-gray-950 rounded-2xl p-4 border-2 hover:bg-primary ${
                  slotindex === index
                    ? "bg-primary text-white"
                    : "border-gray-100"
                }`}
              >
                <p>{item[0] && daysofweek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="flex items-center w-full overflow-x-scroll mt-5 gap-5">
        {docslot.length > 0 &&
          docslot[slotindex].map((item, index) => (
            <p
              onClick={() => setslottime(item.time)}
              className={`hover:bg-primary text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer border ${
                item.time === slottime
                  ? "bg-primary text-white"
                  : "border-gray-100"
              }`}
              key={index}
            >
              {item.time.toLowerCase()}
            </p>
          ))}
      </div>
      <div className="flex items-center justify-center p-5">
        <p className='flex items-center gap-2 bg-primary px-8 py-3 rounded-full  text-white text-sm  m-auto md:m-0 hover:scale-105 transition-all duration-300'>Book an appointment</p>
      </div>
    </div>
  );
};

export default Appointment;
