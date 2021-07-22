export const pinPost = v => ({
  type: 'PIN_POST',
  payload: v,
});
export const pinUser = v => ({
  type: 'PIN_USER',
  payload: v,
});
export const pinAlbum = v => ({type: 'PIN_ALBUM', payload: v});
export const pinTodo = v => ({type: 'PIN_TODO', payload: v});
export const pinComment = v => ({type: 'PIN_COMMENT', payload: v});

export const logIn = name => ({
  type: 'LOG_IN',
  payload: name,
});

export const logOut = name => ({
  type: 'LOG_OUT',
  payload: name,
});


export const clean = () =>({
  type: "CLEAN"
})