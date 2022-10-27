import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { firebaseReducer, getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk.withExtraArgument(getFirebase)];

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users"
};

const rootReducer = combineReducers({
  firebase: firebaseReducer
  // firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const rrfProps = {
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
};
