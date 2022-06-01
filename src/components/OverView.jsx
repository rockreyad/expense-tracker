import React from "react";

const OverView = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-xl ">
          Balance : <span className="font-semibold text-gray-600">3000</span>
        </p>
        <button
          type="button"
          className="bg-indigo-600 px-4 py-2 rounded uppercase text-white font-semibold"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default OverView;
