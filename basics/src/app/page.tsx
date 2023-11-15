"use client";
import React from "react";
import ListGroup from "@/components/ListGroup";

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

export default function Home() {
  const onSelectItem = (item) => {
    console.log(item);
  };

  return (
    <main className="p-6">
      {/* the state of a component is independent, the state of this ListGroup will not affect the state of another ListGroup component if used here */}

      {/* The typescript compiler will remind us that we have forgotton to pass the defined props, if we do not pass the props that is defined in the interface of our component  */}
      <ListGroup items={badges} title="Cities" onSelectItem={onSelectItem} />
    </main>
  );
}
