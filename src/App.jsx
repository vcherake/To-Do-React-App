import React, { useState, useEffect } from "react";

import { Grommet, Text, Box } from "grommet";

import Lists from "./components/Lists";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
    colors: {
      brand: "red",
    },
  },
};

function App() {
  const [item, setItem] = useState({});
  const [tasks, setTasks] = useState([]);

  const handleInput = function (e) {
    setItem({ currentItem: { item: e.target.value, key: Date.now() } });
    // setItem({ item: e.target.value, key: Date.now() });
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    const newTask = item;

    if (newTask.item !== "") {
      const itemsAdded = [...tasks, newTask];
      setTasks(itemsAdded);
    }
    setItem({});
  };

  // useEffect(() => {
  //   // handleSubmit();
  //   // return () => {
  //   // setItem({});
  //   // };
  // }, [setTasks, handleSubmit]);

  return (
    <Grommet theme={theme}>
      <Box>
        <Box>
          <Text color="brand">To Do App</Text>
        </Box>

        <form>
          <input
            type="text"
            placeholder="enter tasks"
            value={item.item}
            onChange={handleInput}
          />
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        </form>
        <Box>
          <Lists items={tasks} />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
