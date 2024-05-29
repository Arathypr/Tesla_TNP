import React, { useState, useEffect } from "react";

import Copyright from "./Copyright";
function Shop() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/imageDetails/getAllImageDetails"
      );
      const data = await response.json();

      // Exclude the last item from the data array
      const allItemsExceptLast = data.slice(0, -1);

      // Get the last 5 items from the remaining data
      const lastFiveItems = allItemsExceptLast.slice(-5);

      setItems(lastFiveItems);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseOverlay = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <section className="p-4 text-white text-opacity-50 bg-black">
        <div className=" lg:ml-14 lg:w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map(({ id, vehicleImages, title, description }) => (
            <div
              key={id}
              className="item-card relative flex flex-col items-center justify-center p-4  border-gray-300 rounded"
              onClick={() =>
                handleClick({ id, vehicleImages, title, description })
              }
            >
              <img
                src={vehicleImages[0]?.imageUrl}
                alt={title}
                className="h-auto object-cover mb-4"
              />
              <h1 className="text-lg md:text-base font-medium">{title}</h1>
              <p className="text-sm font-medium">{description}</p>
            </div>
          ))}
        </div>
        {selectedItem && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 z-50">
            <div className="relative max-w-xl  p-6 bg-white bg-opacity-50 rounded-md shadow-lg text-black">
              <button
                className="absolute top-0 right-0 m-4 text-lg text-gray-500 hover:text-gray-700"
                onClick={handleCloseOverlay}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h1 className="text-2xl font-medium mb-2">
                {selectedItem.title}
              </h1>
              <div className="w-[100%] h-[50vh] overflow-hidden mb-4">
                <img
                  src={selectedItem.vehicleImages[0]?.imageUrl}
                  alt={selectedItem.title}
                  className="h-auto w-[100%] object-cover"
                />
              </div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis sequi non earum accusantium fuga quo consequatur
                aliquam fugit, magni ab culpa quam reiciendis necessitatibus ea,
                in dolorem consectetur officiis sunt!
              </p>
              <div className="flex justify-center mt-4">
                <button className="py-2 px-6 text-white rounded-md bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      <Copyright />
    </>
  );
}

export default Shop;
