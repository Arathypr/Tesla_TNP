// import { useEffect, useState } from "react";
// import Button from "./Button";
// import { data } from "autoprefixer";

// const Hero = () => {
//   const [heroData, setHeroData] = useState([]);
//   console.log("herodata", heroData);
//   useEffect(() => {
//     // Fetch data from the backend
//     fetch("http://localhost:8080/api/imageDetails/getAllImageDetails")
//       .then((response) => response.json())
//       .then((data) => setHeroData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//     console.log("data", data);
//   }, []);

//   return (
//     <section>
//       {heroData.map((item, index) => (
//         <div
//           key={index}
//           className="relative flex flex-col items-center justify-center"
//         >
//           <img
//             src={item?.vehicleImages[0]?.imageUrl}
//             className="h-screen w-full object-cover"
//             alt={item?.vehicleImages?.color}
//           />
//           <div className="absolute pt-28 flex flex-col h-screen w-full items-center justify-between">
//             <div className="flex flex-col items-center title">
//               <h1 className="text-4xl font-medium">{item?.title}</h1>
//               <p className=" vvsm:text-base md:text-xl">{item?.description}</p>
//             </div>
//             <div className="flex flex-col mb-28 w-full gap-y-6 sm:flex">
//               <Button />
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Hero;
import { useEffect, useState } from "react";
import Button from "./Button";

const Hero = () => {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    // Fetch only the first 5 data items from the backend
    fetch("http://localhost:8080/api/imageDetails/getAllImageDetails")
      .then((response) => response.json())
      .then((data) => setHeroData(data.slice(0, 5))) // Fetch only the first 5 items
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section>
      {heroData.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center justify-center"
        >
          <img
            src={item?.vehicleImages[0]?.imageUrl}
            className="h-screen w-full object-cover"
            alt={item?.vehicleImages?.color}
          />
          <div className="absolute pt-28 flex flex-col h-screen w-full items-center justify-between">
            <div className="flex flex-col items-center title">
              <h1 className="text-4xl font-medium">{item?.title}</h1>
              <p className=" vvsm:text-base md:text-xl">{item?.description}</p>
            </div>
            <div className="flex flex-col mb-28 w-full gap-y-6 sm:flex">
              <Button />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
