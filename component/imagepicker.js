import React, { useState } from 'react';
import { StyleSheet, Button, View, Image, SafeAreaView, Text, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';


const App = () => {
  const [image1, setImage] = useState('https://reactnative.dev/docs/assets/p_cat2.png');
  const [image2, setImage2] = useState("");

   async function addbase (basestring) {
    await   setImage2(basestring);
    console.log(image2);
   }

  async function setImage1 (path1) {
    var data = await  RNFS.readFile( path1, 'base64').then(res => { return res });
  console.log(data);
  //setImage2(data);
  yourString= 'data:image/png;base64,'+data;
  //console.log(yourString);
  addbase(yourString)
  //console.log(image2);
  //var base64Icon = 'data:image/png;base64,'+data;

  }
  const openLibrary= ()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      //console.log(image);
      setImage1(image.path);

    });
  }
  
  const onCamara = ()=>{
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      //console.log(image);
      setImage1(image.path);
  
    });
  
  }
if(image2==""){

return(
  <SafeAreaView style={styles.container}>
    <View>


    <Image
          source={{
            uri: image1,
          }}
          style={{ width: 200, height: 200 }}
        />


<Text>bbb</Text>

      <Button
        title="logo From Gallary"
        onPress={openLibrary}
      />
    </View>
    <View>
     
      <Button
        title="Logo From Camara"
        color="#f194ff"
        onPress={  onCamara }
      />
    </View>
   
  </SafeAreaView>
);
        }

else{
  return(
    <SafeAreaView style={styles.container}>
      <View>
  
<Image style={{width: 300, height: 400}} source={{uri: image2}}/>
  
   {/*  
      <Image style={{ width: 100, height: 200}}
       source={{ "uri": image2 }} /> */}
      <Text>aaa</Text>
       
        <Button
          title="logo From Gallary"
          onPress={openLibrary}
        />
      </View>
      <View>
       
        <Button
          title="Logo From Camara"
          color="#f194ff"
          onPress={  onCamara }
        />
      </View>
     
    </SafeAreaView>
  );

}


      }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
}
);




export default App;