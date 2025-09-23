import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import { baseApi } from './api/baseApi';
import postJobReducer from './features/postJob/postJobSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
};

// Persist config for postJob slice, excluding site_images
const postJobPersistConfig = {
  key: 'postJob',
  storage,
  blacklist: ['formData.site_images'], // Exclude non-serializable File objects
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedPostJobReducer = persistReducer(postJobPersistConfig, postJobReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
    postJob: persistedPostJobReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['postJob.formData.site_images'],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
