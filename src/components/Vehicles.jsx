import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Vehicles() {
  const [allCars, setAllCars] = useState([]);
  const [displayedCars, setDisplayedCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchTerm]);

  const fetchCars = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/imageDetails/getAllImageDetails"
      );
      const data = await response.json();
      setAllCars(data.slice(0, itemsPerPage)); // Only take the first 5 items
      setDisplayedCars(data.slice(0, itemsPerPage)); // Set the displayed cars to the first 5 items
    } catch (error) {
      console.error("Error fetching car details:", error);
    }
  };

  const applyFilters = () => {
    const filtered = allCars.filter((car) =>
      car.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedCars(filtered); // Set displayed cars to filtered results
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <section className="p-4">
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search by model"
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {displayedCars.map(({ id, vehicleImages, title, description }) => (
            <Link
              to={`/car/${id}`}
              key={id}
              state={{ car: { id, vehicleImages, title, description } }}
            >
              <div className="vehicle-card relative flex flex-col items-center justify-center p-4 border border-gray-300 rounded">
                <img
                  src={vehicleImages[1]?.imageUrl}
                  alt={title}
                  className="h-40 object-cover mb-4"
                />
                <h1 className="text-2xl font-medium">{title}</h1>
                <p className="text-sm font-medium">{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Vehicles;
