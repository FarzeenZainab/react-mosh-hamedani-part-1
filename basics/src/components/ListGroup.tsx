"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";

// Instead of passing hardcoding badges arrray we should make it resuable and pass different data based on cases

// Creating reusable component using TypeScript
// Step 1. Define the shape of the input into this component
/**
 * The component will have below as input
 *  badges: [],
 *  title: string
 *
 * We can define a shape of a component using interface in TypeScript.
 */

interface ListGroupProps {
  // we are using type annotations to provide the type of various properties
  items: object[]; // array of object
  title: string; // string

  // (item: string) => void (does not return anything)
  onSelectItem: (item: object) => void;
}

const ListGroup = ({ items, title, onSelectItem }: ListGroupProps) => {
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

  // When we update the state of a component, there are cases that something should happen when the item is selected. It can be sending a new request to the server of simply update the parent component that child has changed. We can acheive that by pass functions as props

  function handleClick(id: number) {
    setSelectedIndex(id);
  }

  return (
    <div>
      <h2 className="mb-4 font-bold text-bold">{title}</h2>
      {items.map((badge) => (
        <Badge
          className="cursor-pointer mr-4"
          size="lg"
          variant={selectedIndex === badge.id ? "default" : "outline"}
          onClick={() => {
            handleClick(badge.id);
            onSelectItem(badge);
          }}
        >
          {badge?.label}
        </Badge>
      ))}
    </div>
  );
};

export default ListGroup;
