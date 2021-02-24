import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, Button } from 'react-native';
import axios from "axios";
import UselessTextInput from './component/inputcomonemt';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const YourApp = () => {
  const [data, setData] = useState({});
   const [properties, setProperties] = useState([]);
   //const [checked, setChecked] = useState(true);




   function validate(data, properties) {
    console.log("Validating");
    var validated = true;
    Object.keys(properties).map((key) => {
     if (!properties[key].allowNull) {
      if (properties[key].type == "bool") {
       console.log("Bool Type");
      } else {
       console.log(key);
       if (data[key] == "" ) {
        //toast.warning(`${key} cannot be empty`, { autoClose: 2000 });
       /*  setTimeout(() => {
         setDouble(false);
        }, 7000); */
        validated = false;
       }
      }
     }
    });
    if (validated) {
     // AddHandler();
     console.log("done")
     }
     else{
      console.log("Not validate");

     }
     //setDouble(true);

    //return validated;
   }

   function AddHandler() {
    console.warn(data)

    axios
     .request({
      method: "POST",
      url: "https://admin.sutradhar.tech:8090/addPageSubmit",
      headers: {
       "cache-control": "no-cache",
       Accept: "application/json",
       "Access-Control-Allow-Origin": "*",
       "Content-Type": "application/json; charset=utf-8",
      },
      data: {
       resourceId:"booking",
       data: data,
      },
     })
     .then((response) => {
      //  console.log(`from Submit handler response`, response.data.Success);
       //goBack();
       console.warn("submit successfully");
      
       //activateSubmit();
      }).catch((error) => {
      console.warn(error);
     });
    // toast.warning("data cannot be empty", {
    //   position: toast.POSITION.TOP_CENTER,
    //   autoClose: 2000,
    //  });
   }
  


   function submit()
   {
       console.warn(data)
     }

  useEffect(() => {
    axios
      .request({
        method: 'POST',
        url: "https://admin.sutradhar.tech:8090/addPage",
        headers: {
          'cache-control': 'no-cache',
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
        },
        data: {
          resourceId: "booking"
        },
      })
      .then((response) => {
        //console.log(response.data.properties);
        setProperties(response.data.properties);

      })
      .catch((e) => {
        console.log(e);
      });

    },[data]);

    return (
      <View style={[styles.body1]}>
      <ScrollView >
              <View style={[styles.header]}>
    <Text style={{fontSize:30}}>Header</Text>
  </View>
  <View style={[styles.body]}>

    {Object.keys(properties).map((key) => {
      //  console.log(key);
      //  console.log(properties);
      console.log("In Map: ", properties[key].type)
      if (
       properties[key].type.indexOf("str") != -1 ||
       properties[key].type.indexOf("Str") != -1
      ) {
       properties[key].type = "string";
      }
      if (properties[key].type.indexOf("decimal") != -1) {
       properties[key].type = "Int";
      }
      if (properties[key].type.indexOf("tinyint") != -1) {
       properties[key].type = "bool";
      }
      if (properties[key].type.indexOf("blob") != -1) {
       properties[key].type = "blob";
      }
      //console.log(properties[key])
      //setTye(properties[key].type)

      return (
        <View>
        <UselessTextInput
        type = {properties[key].type}
        keytext={key}
        properties={properties[key]}
        data={data}
        setData={setData}
         />
        </View>
      );
    
      
     })}
<Button title="Submit"
 onPress={(data, properties)=>{
  validate(data, properties);
 }}
    style={[styles.textin]}
></Button>
</View>

 </ScrollView>
   </View>
    );
}


export default YourApp;
const styles = StyleSheet.create({
  textin:{
    borderWidth:2,
     borderColor:'skyblue', 
     margin:20, 
     borderRadius:10

  },
  header: {
    justifyContent: 'center',
    backgroundColor: '#aaf',
    flex:1,
    fontSize:40,
    alignItems: 'center',

  },
  body: {
    backgroundColor: '#aaf',
    flex:2,
    
  },
  body1: {
    backgroundColor: '#aaf',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },


});