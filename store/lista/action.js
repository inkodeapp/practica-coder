const addItem = (item) => {

  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: id,
  };
};

const completeItem = (id) => {
    return {
        type: "COMPLETE_ITEM",
        payload: id,
    };
}

const updateItem = (id, text) => {
    return {
        type: "UPDATE_ITEM",
        payload: {
            id:id,
            text:text,
        },
    };
}

export { addItem, deleteItem,completeItem,updateItem };