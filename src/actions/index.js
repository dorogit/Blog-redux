import JSONPlaceholder from "../APIs/JSONPlaceholder"

export const fetchPosts = () => async dispatch => {
    const response = await JSONPlaceholder.get("./posts")
    dispatch({type:"FETCH_POSTS",payload: response.data })
  }
  /*the fetchPosts function is an arrow function which calls dispatch, which is a redux-thunk method and in turn makes the API request.
  after the request is made, it "dispatches" itself and calls itself again but this time, it returns the payload object and hence, thunk does not call it again
  then the action creator moves on and returns the payload as its supposed to. Remember, this was done because async method cannot be used with a synchronized action
  creator. Shrimply, we return a function to return itself to make use of async, that is thunk. */