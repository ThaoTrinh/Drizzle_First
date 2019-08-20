const Types = {
  CREATE_ITEM: "CREATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  CREATE_ITEM_SAGA: "CREATE_ITEM_SAGA",
  DELETE_ITEM_SAGA: "DELETE_ITEM_SAGA"
};

const createItem = task => ({
  type: Types.CREATE_ITEM,
  payload: {
    task
  } // nen la struct
});

const deleteItem = id => ({
  type: Types.DELETE_ITEM, // Kieu nen la chuoi de biet minh nen lam gi
  payload: {
    id
  } // Du lieu truyen vo
});

const createItemSaga = () => ({
  type: Types.CREATE_ITEM_SAGA,
  payload: {}
});

const deleteItemSaga = id => ({
  type: Types.DELETE_ITEM_SAGA,
  payload: {
    id
  }
});

export default {
  createItem,
  deleteItem,
  createItemSaga,
  deleteItemSaga,
  Types
};
