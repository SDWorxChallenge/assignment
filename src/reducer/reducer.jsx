export const initialState = {
    hikers: [],
  };

  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return (state = {
          ...state,
          hikers: action.payload,
        });
      case "DELETE":
        return (state = {
          ...state,
          hikers: state.hikers.filter(item=>item.id!==action.payload),
        });
    }
  };
  