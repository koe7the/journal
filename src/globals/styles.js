import {StyleSheet} from 'react-native';
const colors = {
  black: '#0B0A0D',
  lightGray: '#A4A49E',
  brown: '#5A2516',
};

const elements = StyleSheet.create({
  title: {
    fontSize: 60,
    fontWeight: '600',
    alignSelf: 'center',
    marginVertical: '4%',
    textTransform: 'uppercase',
  },
  image: {
    alignSelf: 'center',
  },
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
});
export default {
  elements,
  colors,
};
