const initialState = {
  lista: [],
};

export default function (state = initialState, action) {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      lista: [...state.lista, action.payload],
    };
  }

  if (action.type === "DELETE_ITEM") {
    return {
      ...state,
      lista: state.lista.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "COMPLETE_ITEM") {
    return {
      ...state,
      lista: state.lista.map((item) => {
        if (item.id === action.payload) {
          item.status = !item.status;
        }
        return item;
      }),
    };
  }

  if (action.type === "UPDATE_ITEM") {
    console.log(state.lista[0].id)
    console.log(action.payload.id.id)
    return {
        ...state,
        lista: state.lista.map((item) => {
            if (item.id === action.payload.id.id) {
                console.log(item)
                item.text = action.payload.id.text;
            }
            return item;
        }),

        /*
      ...state,
      lista: state.lista.map((item) => {
        if (item.id === action.payload.id) {
          item.text = action.payload.text;
        }
        return item;
      }),*/
    };
  }

  return state;
}
