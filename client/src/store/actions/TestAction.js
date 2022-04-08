import axios from "../../utils/axiosConfig";

export const getAllPosts = () => {
  return (dispatch) => {
    //   fetch placeholder data from jsonplaceholder

    axios("user/get")
      .then((result) => {
        dispatch({
          type: "DO_THIS",
          success: result.data.success,
          payload: result.data.users,
        });
      })
      .catch(() => dispatch({ type: "DO_THIS", success: false, payload: [] }));
  };
};
