import React, { useState } from "react";

function Lists({ items }) {
  return (
    <div>
      <p>Lists</p>
      {items.map((task) => (
        <div key={task.currentItem.key}>
          <p>{task.currentItem.item}</p>
        </div>
      ))}
    </div>
  );
}

export default Lists;
