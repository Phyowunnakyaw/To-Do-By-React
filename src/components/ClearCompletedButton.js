import React from "react";

export default function ClearCompletedButton({ clearCompleted }) {
  return (
    <div>
      <button
        onClick={clearCompleted}
        className=" p-[6px] text-[12px] font-medium text-gold rounded border-2 border-gray-600 hover:border-gold transition-all"
      >
        {" "}
        Clear Completed{" "}
      </button>
    </div>
  );
}
