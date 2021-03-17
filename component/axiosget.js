import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import axios from "axios";


const YourApp = () => {
  const [num, setNum] = useState();
  useEffect(()=> {
    alert("hii");
    async function getData(){
      const res = await axios.get( `https://localhost:8000/students` );
      console.log(res);
    }
    getData();

  });


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Try editing me! 🎉
      </Text>
    </View>
  );
}

export default YourApp;