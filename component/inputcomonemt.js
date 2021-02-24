import React, {useEffect, useState} from 'react';
import { TextInput, Text, View, StyleSheet,Button,Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-crop-picker';
import CheckBox from 'react-native-check-box';
import RNFS from 'react-native-fs';

//const exampleImage = require('./default_logo.png')




const UselessTextInput = (props) => {
    const [checked, setChecked] = useState('');
    const [blob1, setBlob1] = useState('');
    const [image1, setImage] = useState("https://www.fama.org/wp-content/plugins/bp-custom-users/includes/img/logo.png");



    //console.log(props)
    useEffect(()=>{
        if(props.type=='bool'){
            console.log("useeffect");
            setChecked("false")
         props.setData((prev)=>{
           var newdata = {};
           newdata[props.keytext] = checked
           return {...prev,...newdata}
          })
        }
        if(props.type=="blob"){
          setBlob1(props.keytext)
        }
      },[])

      async function setImage1(path1) {
        var data = await  RNFS.readFile( path1, 'base64').then(res => { return res });
      console.log(data);
      props.setData((prev)=>{
        var newdata = {};
        newdata[props.keytext] = data
        return {...prev,...newdata}
       })

      
      }

      const openLibrary= ()=>{
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log(image);
          setImage(image.path);
          setImage1(image.path)
        });
      }
      
      const onCamara = ()=>{
        ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          console.log(image);
          setImage(image.path);
          setImage1(image.path)

      
        });
      
      }

    switch (props.type) {
        case "Int":
            return (
                <View >
                    <TextInput
                     keyboardType = 'numeric'
                        style={styles.textbox}
                        placeholder={props.keytext}
                        onChangeText={(e)=>{
                            props.setData((prev)=>{
                              var newdata = {};
                              newdata[props.keytext] = e
                              return {...prev,...newdata}
                            })
                          }}

                    />

                </View>
            );

        case "string":
            return (
                <View>
                    <TextInput
                        style={styles.textbox}
                        placeholder={props.keytext}
                        onChangeText={(e)=>{
                            props.setData((prev)=>{
                              var newdata = {};
                              newdata[props.keytext] = e
                              return {...prev,...newdata}
                            })
                          }}

                    />
                </View>
            );
        case "VARCHAR":
            return (
                <View>
                    <TextInput
                        style={styles.textbox}
                        placeholder={props.keytext}
                        onChangeText={(e)=>{
                            props.setData((prev)=>{
                              var newdata = {};
                              newdata[props.keytext] = e
                              return {...prev, ...newdata}
                            })
                          }}
                    />
                </View>
            );
        case "bool":
            return (
                <View>

{/* 
checked={props.data[props.keytext]}
      onChange={(e)=>props.setData((prev)=>{
        var newdata = {};
        newdata[props.keytext] = e.target.checked
        return {...prev,...newdata}
       })} */}


    <CheckBox
    style={{flex: 1, padding: 10}}
    var checked={props.data[props.keytext]}

    onClick={(e)=>{
     if(checked=="false"){
        setChecked("true")
     }
     else{
        setChecked("false")
     }
     props.setData((prev)=>{
        var newdata = {};
        newdata[props.keytext] = checked
        return {...prev,...newdata}
       })

}
}
      
    rightText={props.keytext}
/>

                                    </View>
            );
        case "richtext":
            return (
                <View>
                    <TextInput
                        style={styles.textbox}
                        placeholder={props.keytext}
                        onChangeText={(e)=>{
                            props.setData((prev)=>{
                              var newdata = {};
                              newdata[props.keytext] = e
                              return {...prev, ...newdata}
                            })
                          }}
                    />
                </View>
            );
        case "blob":
            return (
                <View>
                    <Text>Logo</Text>

      <View   style={{flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',

}}>
      <Button
        title="logo From Gallary"
        onPress={openLibrary}
      />
      <Button
        title="Logo From Camara"
        color="#f194ff"
        onPress={  onCamara }
      />
    </View>
<View  style={styles.logo }>
    <Image
          source={{
            uri: image1,
          }}
          style={{
            width: 250,
            height: 200,

          }}
        />
        </View>
                </View>
            );
        case "reference":
            return (
                <View>
                    <DropDownPicker
                    style={styles.textbox}
                    placeholder={props.keytext}
                    items={props.properties.availableValues}
                    onChangeItem={(item)=>{
                        props.setData((prev)=>{
                          var newdata = {};
                          newdata[props.keytext] = item.value
                          return {...prev, ...newdata}
                        })
                      }}
/>     
                </View>
            );
        default:
            return (
                <View  >
                    <TextInput
                        style={styles.textbox}
                        placeholder={props.keytext}
                        onChangeText={(e)=>{
                            props.setData((prev)=>{
                              var newdata = {};
                              newdata[props.keytext] = e
                              return {...prev, ...newdata}
                            })
                          }}

                    />
                </View>
            );




    }
}
export default UselessTextInput;


const styles = StyleSheet.create({
    textbox: {
        borderColor: 'gray',
        borderWidth: 2,
        padding: 10,
        marginVertical: 20,
        borderRadius: 10,
        width: 350,
        alignItems: 'center',

    },
    logo: {
      //justifyContent: 'center',
      alignItems: 'center',
     
  },

  

})