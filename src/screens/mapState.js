export default (state, obj) => {
  let res = state[obj];
  return {[`${obj}`]: res};
};
