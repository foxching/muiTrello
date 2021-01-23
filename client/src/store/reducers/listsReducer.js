const initialState = {
    "list-0": {
        id: "list-0",
        cards: ["card-0"],
        title: "myList",
        board: "board-0"
    }
};

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default listsReducer;