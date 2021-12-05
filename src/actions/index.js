import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostAndUsers = () => async (dispath) => {
  console.log("before");
  await dispath(fetchPosts());
  console.log("after");
};

export const fetchPosts = () => {
  return async (dispath) => {
    const repsonse = await jsonPlaceholder.get("/posts");
    dispath({
      type: "FETCH_POSTS",
      payload: repsonse.data
    });
  };
};

export const fetchUser = (id) => async (dispath) => {
  const repsonse = await jsonPlaceholder.get(`/users/${id}`);
  dispath({ type: "FETCH_USER", payload: repsonse.data });
};

/*  MEMOIZED VERSION
export const fetchUser = (id) => (dispath) => {
  _fetchUser(id, dispath);
};
const _fetchUser = _.memoize(async (id, dispath) => {
  const repsonse = await jsonPlaceholder.get(`/users/${id}`);
  dispath({ type: "FETCH_USER", payload: repsonse.data });
});
*/
