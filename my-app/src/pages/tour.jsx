import React, { useState, useEffect } from "react";
import "./scss/tour.scss";

function Tour() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllTours();
  }, []);

  const getAllTours = async () => {
    try {
      const response = await fetch("http://192.168.0.104//tour.php");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const upcomingConcerts = data.filter((tour) => {
    // console.log(`upcoming tour: ${tour.id}, iz_past: ${tour.iz_past}`);
    return tour.iz_past !== 't';
  });
  
  const pastConcerts = data.filter((tour) => {
   // console.log(`past tour: ${tour.id}, iz_past: ${tour.iz_past}`);
    return tour.iz_past === 't';
  });

  return (
    <div>
      {upcomingConcerts.length > 0 && (
  <section>
    <div className="wrapper_tickets">
      <h2>РАСПИСАНИЕ КОНЦЕРТОВ</h2>
      <div className="content_tickets">
        {upcomingConcerts.map((tour) => (
          <div key={tour.id} className="content_info_tickets">
            <div className="content_info_tickets_left">
              <p>{tour.date}</p>
              <p>{tour.time}</p>
            </div>
            <div className="content_info_tickets_mid">
              <p>
                {tour.city}, {tour.country}
              </p>
              <p>{tour.venue}</p>
            </div>
            <div className="content_info_tickets_right">
              <button>ИНФОРМАЦИЯ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}
{pastConcerts.length > 0 && (
  <section>
    <div className="wrapper_tickets">
      <h2>ПРОШЕДШИЕ КОНЦЕРТЫ</h2>
      <div className="content_tickets">
        {pastConcerts.map((tour) => (
          <div key={tour.id} className="content_info_tickets">
            <div className="content_info_tickets_left">
              <p>{tour.date}</p>
              <p>{tour.time}</p>
            </div>
            <div className="content_info_tickets_mid">
              <p>
                {tour.city}, {tour.country}
              </p>
              <p>{tour.venue}</p>
            </div>
            <div className="content_info_tickets_right">
              <button>ИНФОРМАЦИЯ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

    </div>
  );
}

export default Tour;
