const cards = [
  {
    id: "card-1",
    listId: "list-1",
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
    }
  },
  boardIds: ["board-1"]
};

export default data;
