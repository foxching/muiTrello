
const initialState = {
  "card-0": {
    id: "card-0",
    listId: "list-0",
    text: "Last Episode",
    description:
      "This is the most challenging project that i have ever been developed, so this is it.",
    labels: [
      { label: "New", color: "green" },
      { label: "Urgent", color: "red" }
    ],
    dueDate: ""
  }
};
const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cardsReducer;