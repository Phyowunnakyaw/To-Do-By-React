import React from "react";

export default function CheckAllAndRemainding({ remainingCount, checkAll }) {
  return (
    <div className=" flex justify-between items-center">
      <button
        onClick={checkAll}
        className=" p-[6px] text-[12px] font-medium text-gold rounded border-2 border-gray-600 hover:border-gold transition-all"
      >
        Check All
      </button>
      <p className=" text-gold text-[13px] font-medium">
        {" "}
        {remainingCount} item{remainingCount > 1 ? "s" : ""} remaining{" "}
      </p>
    </div>
  );
}
