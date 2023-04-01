import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import usersReducer from "./users/userSice";
import {
  persistStore,
  persistReducer,
  PERSIST,
  REHYDRATE,
  FLUSH,
  PAUSE,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { movieSlice } from "./movieApi/movieSlice";
import { userApiSlice } from "./users/userApiSlice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  movieSlice.middleware,
  userApiSlice.middleware,
];

const userPersistConfig = {
  key: "user",
  storage,
  // whitelist: ["token", "isLoggedIn"],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(userPersistConfig, usersReducer),
    [movieSlice.reducerPath]: movieSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },

  middleware,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
