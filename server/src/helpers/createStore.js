import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import { API_URL } from "../../config";
import reducers from "../client/reducers";

// console.log('createStore',`${API_URL}`)
//get req from index.js
export default req => {
  const axiosInstance = axios.create({
    baseURL: `${API_URL}`,
    headers: {
      cookie: req.get("cookie") || ""
    }
  });
  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
};
