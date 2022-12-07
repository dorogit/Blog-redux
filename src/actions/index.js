import JSONPlaceholder from "../APIs/JSONPlaceholder"
import _ from "lodash"

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())
  const userIDs = _.uniq(_.map(getState().reducers.posts, 'userId'));
  userIDs.forEach(id => dispatch(fetchUser(id)))
}

export const fetchPosts = () => async dispatch => {
    const response = await JSONPlaceholder.get("./posts")
    dispatch({type:"FETCH_POSTS",payload: response.data })
  }

  
export const fetchUser = (id) => async dispatch => {
  const response = await JSONPlaceholder.get(`/users/${id}`);
  dispatch({type:"FETCH_USER",payload: response.data })

}
/*the fetchPosts function is an arrow function which calls dispatch, which is a redux-thunk method and in turn makes the API request.
after the request is made, it "dispatches" itself and calls itself again but this time, it returns the payload object and hence, thunk does not call it again
then the action creator moves on and returns the payload as its supposed to. Remember, this was done because async method cannot be used with a synchronized action
creator. Shrimply, we return a function to return itself to make use of async, that is thunk. */


/*memoize is used to make a "copy" of a function where the real function is invoked just once and in the other iterations, it keeps returning the value of
itself without actually getting called. Shrimply, memoize remembers the output of the function first time, and keeps returning the same output
each time it's called */