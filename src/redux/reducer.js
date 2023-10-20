import DISHES from "../data/dishes";

const initialState = {
  dishes: DISHES,
};

export const Reducer = (state = initialState, action) => {
  if (action.type === "ADD_COMMENT") {
    //let comment = action.payload;
    // comment.id = state.comments.length;
    // comment.date = new Date().toDateString();
    // return {
    //     ...state,
    //     comments: state.comments.concat(comment)
    // }
  }
  return state;
};
