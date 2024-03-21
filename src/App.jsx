import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action/Action";

const App = () => {
  const myState = useSelector((state) => state.chengNumber);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center px-10">
      <h1 className="text-2xl sm:text-4xl font-serif font-bold text-gray-400">
        Increment/Decrement Counter
      </h1>
      <p className="text-xl sm:text-3xl font-serif font-semibold text-gray-400 my-9">
        using React and Redux
      </p>
      <div className="flex items-center h-14">
        <a
          title="increment"
          className="bg-gray-200 px-8 sm:px-12 flex justify-center items-center h-full shadow-xl cursor-pointer hover:shadow-none duration-300"
          onClick={() => dispatch(decNumber())}
        >
          <span className="text-xl sm:text-3xl ">-</span>
        </a>
        <input
          type="text"
          name="number"
          value={myState}
          className="border-[5px] outline-none border-gray-200 text-center text-xl sm:text-3xl w-28 sm:w-40 h-full"
        />
        <a
          title="decrement"
          className="bg-gray-200 px-8 sm:px-12 flex justify-center items-center h-full shadow-xl cursor-pointer hover:shadow-none duration-300"
          onClick={() => dispatch(incNumber())}
        >
          <span className="text-xl sm:text-3xl ">+</span>
        </a>
      </div>
    </div>
  );
};

export default App;
