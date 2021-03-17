import React, { useRef, useState } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

const App = () => {

  const [textPosition, setTextPosition] = useState({ x:0, y:0})
 
 /*  constructor(props) 
  {
    super(props);
    console.log(this.props);
  } */
    position.addListener(latestPosition =>{
      setTextPosition(latestPosition);
    })

position= new Animated.ValueXY();
panResponder= PanResponder.create({
onStartShouldSetPanResponder:()=> true,
onPanResponderMove:(e, gestureState)=>{
  //console.log(gestureState);
  const newPosition= { x: gestureState.dx, y: gestureState.dy};
  position.setValue(newPosition);
},
onPanResponderGrant:()=>{
  position.setOffset({
    x:textPosition.x, y: textPosition.y

  });
  position.setValue({x:0, y:0});

},
onPanResponderEnd: ()=>{
  position.flattenOffset();
}
});

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!</Text>
      <Animated.View style={[position.getLayout()]} 
      {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  }
});

export default App;