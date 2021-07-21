import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const postsState = [];
const usersState = [];
const commentsState = [];
const albumsState = [];
const todosState = [];
const userState = '';

const userReducer = (state = userState, {type, payload}) => {
  switch (type) {
    case 'LOG_IN':
      return payload;

    case 'LOG_OUT':
      return '';

    default:
      return state;
  }
};
const postsReducer = (state = postsState, {type, payload}) => {
  switch (type) {
    case 'PIN_POST':
      return [...state, payload];

    case 'UNPIN_POST':
      let res = state.slice(state.indexOf(payload), 1);
      return res;

    default:
      return state;
  }
};
const usersReducer = (state = usersState, {type, payload}) => {
  switch (type) {
    case 'PIN_USER':
      return [...state, payload];

    case 'UNPIN_USER':
      let res = state.slice(state.indexOf(payload), 1);
      return res;

    default:
      return state;
  }
};
const commentsReducer = (state = commentsState, {type, payload}) => {
  switch (type) {
    case 'PIN_COMMENT':
      return [...state, payload];

    case 'UNPIN_COMMENT':
      let res = state.slice(state.indexOf(payload), 1);
      return res;

    default:
      return state;
  }
};
const todosReducer = (state = todosState, {type, payload}) => {
  switch (type) {
    case 'PIN_TODO':
      return [...state, payload];

    case 'UNPIN_TODO':
      let res = state.slice(state.indexOf(payload), 1);
      return res;

    default:
      return state;
  }
};
const albumsReducer = (state = albumsState, {type, payload}) => {
  switch (type) {
    case 'PIN_ALBUM':
      return [...state, payload];

    case 'UNPIN_ALBUM':
      let res = state.slice(state.indexOf(payload), 1);
      return res;

    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['user', 'albums', 'todos', 'users', 'comments', 'posts'],
};

const reducers = combineReducers({
  albums: albumsReducer,
  todos: todosReducer,
  comments: commentsReducer,
  users: usersReducer,
  posts: postsReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, reducers);
