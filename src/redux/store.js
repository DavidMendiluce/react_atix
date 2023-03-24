import {configureStore} from '@reduxjs/toolkit';
import reducers from "./reducers/propertiesSlice";

const store = configureStore({
  reducer: reducers
});

export default store;