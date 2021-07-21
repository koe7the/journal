export const pinPost = () => ({});
export const pinUser = () => ({});
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
