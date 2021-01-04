const cards = [
  {
    id: "card-1",
    title: "Learning how to cook ",
    description:
      "This is the most challenging project that i have ever been developed, so this is it.",
    labels: [
      { label: "New", color: "green" },
      { label: "Urgent", color: "red" }
    ],
    dueDate: ""
  }
];

const data = {
  boards: {
    "board-1": {
      id: "board-1",
      title: "board 1",
      color: "pink",
      listIds: ["list-1"],
      lists: {
        "list-1": {
          id: "list-1",
          cards,
          title: "My List",
          boardId: "board-1"
        }
      }
    },
    "board-2": {
      id: "board-2",
      title: "board 2",
      color: "brown",
      listIds: ["list-2"],
      lists: {
        "list-2": {
          id: "list-2",
          cards,
          title: "Todo",
          boardId: "board-2"
        }
      }
    }
  },
  boardIds: ["board-1", "board-2"]
};

export default data;
