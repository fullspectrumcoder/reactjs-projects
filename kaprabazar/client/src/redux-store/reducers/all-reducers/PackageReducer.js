const INIT_STATE = {
  data: [],
  packageItems: [],
  secretID: "",
  successPaymentDetail: null,
};

const PackageReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_PACKAGE":
      let dataClone = [...state.data];
      dataClone.push(action.payload);

      return {
        ...state,
        data: dataClone,
      };

    case "FETCH_PACKAGE":
      let fetchData = [...state.data];

      return {
        ...state,
        data: fetchData,
      };

    case "DELETE_ITEM":
      let cartUpdateData = [...state.data];
      cartUpdateData = action.payload;

      return {
        ...state,
        data: cartUpdateData,
      };

    case "PAYMENT_SUCCESS":
      let remainingCartItems = action.payload.filterCartItems;
      let secretID = action.payload.secretID;
      let data = action.payload.data;

      return {
        ...state,
        data: remainingCartItems,
        secretID: secretID,
        successPaymentDetail: data,
      };

    default:
      return state;
  }
};

export { PackageReducer };
