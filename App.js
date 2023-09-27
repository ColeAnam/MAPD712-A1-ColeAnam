import { useState } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function App() {

  const [height, setHeight] = useState('Placeholder')
  const [weight, setWeight] = useState('Placeholder')
  const [bmi, setBMI] = useState()
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previosState => !previosState)

  // calculation function
  const calc = () => {
    if (isEnabled) {
      setHeight(height*2.54)
      setWeight(weight*0.453592)
      console.log(height, weight)
    }
    
    if ((height != null && height > 1) && (weight != null && weight > 1)) {
      setBMI((weight / ((height/100)**2)).toFixed(1))
    }
  }


  return (
    <View style={styles.container}>
      <Text style = {styles.title}>BMI Calculator</Text>
      <Text style = {styles.text}>Select One</Text>
      <View style={styles.row}>
        <Text style = {styles.textRow}>SI [kg,cm]</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style = {styles.textRow}>Imperial [lb,in]</Text>
      </View>
      <Text style = {styles.text}>Enter Your Height</Text>
      <TextInput style = {styles.edit}
        onChangeText={text=>setHeight(text)}
      />
      <Text style = {styles.text}>Enter Your Weight</Text>
      <TextInput style = {styles.edit}
        onChangeText={text=>setWeight(text)}
      />
      <Text style = {styles.text}></Text>
      <Button
        style = {styles.button}
        title='Calculate'
        color="#841584"
        onPress={calc}
      />
      <Text style = {styles.text}>Your BMI is:</Text>
      <Text>{bmi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 80,
    paddingBottom: 80,
    fontSize: 35
  },
  edit: {
    borderColor: 'black',
    borderWidth: 1,
    width: '50%',
    padding: 5,
  },
  text: {
    paddingTop: 20,
    paddingBottom: 5,
    fontSize:20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  textRow: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  switch: {
    paddingLeft: 10,
    paddingRight: 5,
  },
  button: {
  }
});
