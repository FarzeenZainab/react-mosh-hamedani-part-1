import React from "react";
import ListGroup from "@/components/ListGroup.tsx";

export default function Home() {
  return (
    <main className="p-6">
      {/* the state of a component is independent, the state of this ListGroup will not affect the state of another ListGroup component if used here */}
      <ListGroup />
    </main>
  );
}
