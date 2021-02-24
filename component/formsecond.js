import React, {useState, Component} from 'react';
import { View, Text, Button,  TextInput,StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const App= ()=>
{
  const [data, setData] = useState({});

 function submit()
{
    console.warn(data)
  }


  return(
   <View style={{flex:1}}>
  <View style={[styles.header]}>
    <Text style={{fontSize:30}}>Header</Text>
  </View>
  <View  style={[styles.container]}>
<Text style={[styles.textone]}>Name</Text>
  <TextInput
    placeholder="enter name"
    onChangeText={(e)=>{
      setData((prev)=>{
        var newdata = {};
        newdata["fullname"] = e
        return {...prev,...newdata}
      })
    }}

   
    style={[styles.textin]}  />
    <Text style={[styles.textone]} >Email</Text>
   <TextInput
    placeholder="enter email"
    onChangeText={(e)=>{
      setData((prev)=>{
        var newdata = {};
        newdata["email"] = e
        return {...prev,...newdata}
      })
    }}

  style={[styles.textin]}
  />
<Button title="Submit"
 onPress={submit}
    style={[styles.textin]}
></Button>
</View>
</View>
  );
}


export default  App;
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