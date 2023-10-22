import ApiService from "../../services/ApiService";


export const getCart = async (dispatch) => {
    try {
      const res = await ApiService.getCart();
      dispatch({ type: "FETCH_CART_SUCCESS", cart: res.data });
    } catch (error) {
      dispatch({ type: "FETCH_CART_FAILURE", cart: error.message });
    }
  };

  export const removeItemFromCart = async (dispatch, itemId) => {
    try {
      // Make an API request to remove the item from the cart by its ID
      await ApiService.removeItemFromCart(itemId);
  
      // Dispatch an action to update the cart state in Redux (you may need to fetch the updated cart)
      // For simplicity, let's assume you're refetching the entire cart after removing an item
      const updatedCartRes = await ApiService.getCart();
      dispatch({ type: "GET_CART", cart: updatedCartRes.data });
    } catch (error) {
      dispatch({ type: "REMOVE_CART_ITEM_FAILURE", error: error.message });
    }
  };