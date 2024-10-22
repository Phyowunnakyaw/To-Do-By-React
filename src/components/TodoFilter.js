import React, { useEffect, useState } from "react";

export default function TodoFilter({ filterBy }) {
  let [filter, setFilter] = useState("All");

  useEffect(() => {
    filterBy(filter);
  }, [filter, filterBy]);

  return (
    <div className=" flex justify-between items-center gap-4 text-[12px] font-medium text-gold">
      <button
        className={`p-[6px] ${
          filter === "All" ? "rounded border-2 border-gold" : ""
        } `}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      <button
        className={`p-[6px] ${
          filter === "Active" ? "rounded border-2 border-gold" : ""
        } `}
        onClick={() => setFilter("Active")}
      >
        Active
      </button>
      <button
        className={`p-[6px] ${
          filter === "Completed" ? "rounded border-2 border-gold" : ""
        } `}
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>
    </div>
  );
}
