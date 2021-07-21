export const pinPost = v => ({
  type: 'PIN_POST',
  payload: v,
});
export const pinUser = v => ({
  type: 'PIN_USER',
  payload: v,
});
export const pinAlbum = () => ({});
export const pinTodo = () => ({});
export const pinComment = () => ({});

export const logIn = name => ({
  type: 'LOG_IN',
  payload: name,
});

export const logOut = name => ({
  type: 'LOG_OUT',
  payload: name,
});
