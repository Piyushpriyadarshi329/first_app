import React, { useRef, useState, useEffect } from "react";
import { Animated, View, StyleSheet, PanResponder, Text, Dimensions, FlatList } from "react-native";
import Movingcomponent from './component/Movingcomponent';

let ScreenHeight = Dimensions.get("window").height;

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'fourth Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'sixth Item',
  },  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'seventh Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'eigth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'ninth Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'tenth Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'eleventh Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'twelth Item',
  },
];


const data2 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item2',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item2',
  },
];


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  

const renderItem = ({ item }) => (
    <Movingcomponent 
    title={item.title}
     />
  );
  

  return (
    <View style={styles.container}>
      <View style={styles.left}>

     {/*  <Movingcomponent
      title="first"
      /> */}

{Object.keys(data).map((key) => {
      console.log("qqqq", data[key].title);
      //  console.log(properties);
      //console.log("In Map: ", properties[key].type)
     
  
      return (
        <View>
        <Movingcomponent
      title= {data[key].title}
      />
        </View>
      );
     })}



      </View>
      <View style={styles.right}>
        <FlatList
           data={data}
           renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
 
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },

  left: {
    flex: 1,
    height: ScreenHeight,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  right: {
    flex: 1,
    height: ScreenHeight,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
   height:30,
   width:50,
    backgroundColor: "green",
    borderRadius: 5
  }
});

export default App;