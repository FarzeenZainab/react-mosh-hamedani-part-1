"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
const badges = [
  {
    id: 1,
    label: "Karachi",
  },
  {
    id: 2,
    label: "Lahore",
  },
  {
    id: 3,
    label: "Islamabad",
  },
  {
    id: 4,
    label: "Rawalpindi",
  },
  {
    id: 5,
    label: "Quetta",
  },
  {
    id: 6,
    label: "Swat",
  },
];

const ListGroup = () => {
  // If we try to update this value, the UI will not reflect the changes
  // It is local to this component
  // We have to tell react that we have data that might change over time, that is called state
  // let selectedIndex = 1;

  // useState() Hook
  // A hook is a function that allows to tap into the built-in features in react
  // Using the useState hook we tell react that this component has data that may change over time
  const [selectedIndex, setSelectedIndex] = useState(1); // returns an array

  // using the updater function, we can update the variable and at that point react will be notified that the state of the component has changed. React will rerender our component which causes the DOM to be updated under the hood

  // We should not touch the DOM directly. We think in terms of state. When the state of the component changes, react will update the DOM to match the new component state

  // Each component is going to have its own state

  function handleClick(id) {
    setSelectedIndex(id);
  }

  return (
    <div>
      {badges.map((badge) => {
        return (
          <Badge
            className="cursor-pointer mr-4"
            size="lg"
            variant={selectedIndex === badge.id ? "default" : "outline"}
            onClick={() => {
              handleClick(badge.id);
            }}
          >
            {badge?.label}
          </Badge>
        );
      })}
    </div>
  );
};

export default ListGroup;
