import React, {Component} from 'react';
import { View, Text, Button,  TextInput,StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


export default class App extends Component
{
constructor(){
super();
this.state={
     name:'',
     email:'',
     password:'',
     country: null,
     city: null,
     cities: []

}
}
changeCountry(item) {
  let city = null;
  let cities;
  switch (item.value) {
      case 'fr':
          cities = [
              {label: 'Paris', value: 'paris'}
          ];
      break;
      case 'es':
          cities = [
              {label: 'Madrid', value: 'madrid'}
          ];
      break;
  }

  this.setState({
      city,
      cities
  });
}
changeCity(item) {
  this.setState({
      city: item.value
  });
}


submit(){
  console.warn(this.state)
}

render(){
  return(

   <View style={{flex:1}}>
     

  <View style={[styles.header]}>
    <Text style={{fontSize:30}}>Header</Text>
  </View>
  <View  style={[styles.container]}>
<Text style={[styles.textone]}>Name</Text>
  <TextInput
    placeholder="enter name"
    onchangeText={(text)=>{this.setState({name: text})}}
    style={[styles.textin]}  />
    <Text style={[styles.textone]} >Email</Text>

   <TextInput
    placeholder="enter email"
    onchangeText={(text)=>{this.setState({email: text})}}
    style={[styles.textin]}
  />
  <Text style={[styles.textone]}>Password</Text>

   <TextInput
    placeholder="enter password"
    secureTextEntry={true}
    onchangeText={(text)=>{this.setState({password:text})}}
    style={[styles.textin]}
  />
    <Text style={[styles.textone]}>Select</Text>

    <DropDownPicker
                    items={[
                        {label: 'France', value: 'fr'},
                        {label: 'Spain', value: 'es'},
                    ]}
                    defaultNull
                    placeholder="Select your country"
                    containerStyle={{height: 40}}
                    onChangeItem={item => this.changeCountry(item)}
                />
                <DropDownPicker
                    items={this.state.cities}
                    defaultNull={this.state.city === null}
                    placeholder="Select your city"
                    containerStyle={{height: 40}}
                    onChangeItem={item => this.changeCity(item)}
                />

<Button title="Submit" onPress={()=>(this.submit())}  
    style={[styles.textin]}
></Button>


</View>
</View>
  );

}
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ffff',
    flex:2,
  },
  header: {
    backgroundColor: '#aaf',
    flex:1,
    fontSize:40,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  num:{
    fontSize:20,
  },
  textin:{
    borderWidth:2,
     borderColor:'skyblue', 
     margin:20, 
     borderRadius:10

  },
  textone:{
marginLeft:20,
fontSize:20,

  }

});