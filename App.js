import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function App() {

  // Height hook
  const [height, setHeight] = useState(0)
  // Weight hook
  const [weight, setWeight] = useState(0)
  // BMI hook
  const [bmi, setBMI] = useState()
  // BMI Category global variable
  const [cat, setCat] = useState("")
  // Switch hook
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previosState => !previosState)

  // Calculation function
  const calc = () => {
    console.log()
    console.log("Send Button pressed")
    // If switch is set to Imperial then true
    if (isEnabled) {
      console.log("Imperial selected")
      // Check if height and weight are greater than 1
      if (height > 1 && weight > 1)
      {
        console.log(height, weight)
        // Convert height and weight from Imperial to SI
        var newHeight = height*2.54
        var newWeight = weight*0.453592
        console.log(newHeight, newWeight)
        // Calculate BMI
        var newBMI = (newWeight / ((newHeight/100)**2)).toFixed(1)
        setBMI(newBMI)
        console.log("BMI: " + newBMI)
        // Result BMI category
        var newCat = ""
        // If BMI is under 18.5, display "Underweight"
        if (newBMI < 18.5) {
          newCat = "Underweight"
          setCat(newCat)
          console.log("Under")
        }
        // If BMI is greater than or equal to 18.5 and is less than or equal to 24.9, display "Normal Weight"
        else if (18.5 <= newBMI && newBMI <= 24.9) {
          newCat = "Normal Weight"
          setCat(newCat)
          console.log("Normal")
        }
        // If BMI is greater than or equal to 25 and is less than or equal to 29.9, display "Overweight"
        else if (25 <= newBMI && newBMI <= 29.9) {
          newCat = "Overweight"
          setCat(newCat)
          console.log("Over")
        }
        // If BMI is greater than or equal to 30, display "Obese"
        else {
          newCat = "Obese"
          setCat(newCat)
          console.log("Obese")
        }
      }
      // If height or weight is less than 2 show alert
      else {
        Alert.alert(
          "Error",
          "Height or Weight is invalid!",
          [{text: "OK", onPress: () => console.log("Alert Closed")}]
        )
      }
    }
    // If switch is set to SI
    else {
      console.log("SI selected")
      // Check if height and weight are greater than 1
      if (height > 1 && weight > 1) {
        console.log(height, weight)
        // Calculate BMI
        var newBMI = (weight / ((height/100)**2)).toFixed(1)
        setBMI(newBMI)
        console.log("BMI: " + newBMI)
        // Result BMI category
        var newCat = ""
        // If BMI is under 18.5, display "Underweight"
        if (newBMI < 18.5) {
          newCat = "Underweight"
          setCat(newCat)
          console.log("Under")
        }
        // If BMI is greater than or equal to 18.5 and is less than or equal to 24.9, display "Normal Weight"
        else if (18.5 <= newBMI && newBMI <= 24.9) {
          newCat = "Normal Weight"
          setCat(newCat)
          console.log("Normal")
        }
        // If BMI is greater than or equal to 25 and is less than or equal to 29.9, display "Overweight"
        else if (25 <= newBMI && newBMI <= 29.9) {
          newCat = "Overweight"
          setCat(newCat)
          console.log("Over")
        }
        // If BMI is greater than or equal to 30, display "Obese"
        else {
          newCat = "Obese"
          setCat(newCat)
          console.log("Obese")
        }
      }
      // If height or weight is less than 2 show alert
      else {
        Alert.alert(
          "Error",
          "Height or Weight is invalid!",
          [{text: "OK", onPress: () => console.log("Alert Closed")}]
        )
      }
    }
  }


  return (
    <View style={styles.container}>
      <Text style = {styles.title}>BMI Calculator</Text>
      <Text style = {styles.text}>Select One</Text>
      <View style={styles.row}>
        <Text style = {styles.textRow}>SI [cm, kg]</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style = {styles.textRow}>Imperial [in, lb]</Text>
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
      <Text style = {styles.text}></Text>
      <Button
        title='Calculate'
        color="#841584"
        onPress={calc}
      />
      <Text style = {styles.text}>Your BMI is:</Text>
      <Text style = {styles.result}>{bmi}</Text>
      <Text style = {styles.result}>{cat}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Title style
  title: {
    paddingTop: 80,
    paddingBottom: 80,
    fontSize: 35
  },
  // TextInput style
  edit: {
    borderColor: 'black',
    borderWidth: 1,
    width: '50%',
    padding: 5,
  },
  // Text style
  text: {
    paddingTop: 20,
    paddingBottom: 5,
    fontSize:20
  },
  // SI/Imperial switch row View style
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  // SI/Imperial switch row Text style
  textRow: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  // SI/Imperial switch row Switch style
  switch: {
    paddingLeft: 10,
    paddingRight: 5,
  },
  // BMI result style
  result : {
    paddingTop: 20,
    paddingBottom: 5,
    fontSize:30
  }
});
