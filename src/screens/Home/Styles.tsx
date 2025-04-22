import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor:'#fffff',
    alignItems:'center',
    justifyContent:'center',
  },
  logoContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems:'center',
    width: '80%'
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    marginTop: 5,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#333333'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});



export default styles