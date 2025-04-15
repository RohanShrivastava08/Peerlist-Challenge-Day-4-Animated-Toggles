import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

const ToggleSwitch = () => {
  const [selected, setSelected] = useState("free");
  const [premiumOption, setPremiumOption] = useState("monthly");

  const handlePremiumClick = (option) => {
    setSelected("premium");
    setPremiumOption(option);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-black tracking-tight">
        <span className="bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-xl shadow-md">
          Peerlist Challenge Day 4 - Animated Toggles
        </span>
      </h1>

      <div className="relative w-[500px] h-[80px] bg-gray-100 shadow-lg rounded-full p-1 flex items-center justify-between px-2">
        {/* Free */}
        <button
          onClick={() => setSelected("free")}
          className={`w-[240px] h-[60px] flex items-center justify-center text-center relative z-10 font-semibold text-lg rounded-full transition-all duration-300 ${
            selected === "free" ? "text-white" : "text-black"
          }`}
        >
          {selected === "free" && (
            <motion.div
              layoutId="pill"
              className="absolute top-0 left-0 w-full h-full bg-black rounded-full z-[-1]"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          Free
        </button>

        {/* Premium or Monthly/Annual */}
        {selected === "free" ? (
          <div
            className="w-[240px] flex flex-col items-center justify-center cursor-pointer"
            onClick={() => handlePremiumClick("monthly")}
          >
            <span className="text-center relative z-10 font-semibold text-lg text-black rounded-full">
              Premium
            </span>
            <span className="text-xs text-gray-400 mt-1">Monthly • Annual</span>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key="premium-options"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="w-[240px] flex gap-2"
            >
              {["monthly", "annual"].map((option) => (
                <button
                  key={option}
                  onClick={() => handlePremiumClick(option)}
                  className={`w-1/2 h-[60px] flex items-center justify-center text-center relative z-10 font-medium text-base rounded-full transition-all duration-300 ${
                    premiumOption === option ? "text-white" : "text-black"
                  }`}
                >
                  {premiumOption === option && (
                    <motion.div
                      layoutId="pill"
                      className="absolute top-0 left-0 w-full h-full bg-black rounded-full z-[-1]"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  {option === "monthly" ? "Monthly" : "Annual"}
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default ToggleSwitch;
