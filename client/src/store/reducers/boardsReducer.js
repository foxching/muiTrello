const initialState = {
    "board-0": {
        id: "board-0",
        name: "Sample Board",
        color: "pink",
        team: "rechie",
        listsIds: ["list-0"]
    }
};

const boardsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default boardsReducer;