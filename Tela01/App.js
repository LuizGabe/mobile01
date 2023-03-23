import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha jornada no React Native </Text> <br/>
      <Text style={styles.buttonGreen}> Fundamentos do React Native</Text> <br/>
      <Text style={styles.buttonGreen}> Expo e Expo CLI</Text> <br/>
      <Text style={styles.buttonGreen}> Estilização com StyleSheet</Text> <br/>
      <Text style={styles.buttonRed}> Navegação</Text> <br/>
      <Text style={styles.buttonRed}> ScrollView e FlatList</Text> <br/>
      <Text style={styles.buttonRed}> Periféricos</Text> <br/>
      <Text style={styles.buttonRed}> Styled Components</Text> <br/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    borderBottomColor:'black',
    border:'solid' ,
    borderBottomWidth: 'fit-content',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    paddingBottom: '7px',
    fontSize: '25px'
  },
  buttonGreen: {
    fontSize:'14px',
    backgroundColor:'#00ff9f',
    borderRadius:'10px',
    padding:'13px',
    width:'330px',
    fontWeight: 'bold'
  },
  buttonRed: {
    fontSize:'14px',
    backgroundColor:'#f64348',
    borderRadius:'10px',
    padding:'13px',
    width:'330px',
    fontWeight: 'bold',
    alignSelf:'left'

  }

});