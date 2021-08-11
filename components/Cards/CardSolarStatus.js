import React from "react";

// components

export default function CardSolarStatus() {

  const isSolarStatusGood = (currBill, savings) => {
    return savings - currBill >= 0 ? 
    <span class="from-green-700 via-yellow-400 to-green-700"> "Great"</span> : 
    <span class="from-red-700 via-orange-400 to-red-700"> "Not Great"</span>;
  }

  return (
    <div class="bg-white text-center w-3/4 p-8 rounded-lg shadow-2xl">
      <header class=" bg-blue-900 rounded-t-lg py-5 px-8 text-xl font-extrabold text-white"></header>
      <p>Your home is great for solar {isSolarStatusGood} </p>
      <div class="p-8">
        <button className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          Schedule Next Steps
          </button>
      </div>
    </div>
  );
}
