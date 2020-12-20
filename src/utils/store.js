const cards = [
  {
    id: "card-1",
    title: "Learning how to cook ",
    description:
      "This is the most challenging project that i have ever been developed, so this is it.",
    labels: [
      { label: "New", color: "green" },
      { label: "Urgent", color: "red" }
    ]
  }
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Todo",
      cards
    }
  },
  listIds: ["list-1"]
};

//other data format
// const dataTwo = {
//   "board-0": {
//     id: "board-0",
//     lists: ["list-0"],
//     title: "myboard"
//   },
//   listIds: ["list-1"],
//   boardIds: ["board-1"]
// };

export default data;
