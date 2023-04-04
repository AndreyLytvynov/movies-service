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
import { movieCustomApiSlice } from "./movieCastomApi/movieCastomSlice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  movieSlice.middleware,
  userApiSlice.middleware,
  movieCustomApiSlice.middleware,
];

const userPersistConfig = {
  key: "user",
  storage,
};

export const store = configureStore({
  reducer: {
    users: persistReducer(userPersistConfig, usersReducer),
    [movieSlice.reducerPath]: movieSlice.reducer,
    [movieCustomApiSlice.reducerPath]: movieCustomApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },

  middleware,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
