import React from 'react';
import { Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';





const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Try editing me! 🎉
      </Text>
      <QRCode
          value="hello where are you"
          size={200}
          bgColor='black'
          fgColor='white'/>
    
    </View>
  );
}

export default YourApp;