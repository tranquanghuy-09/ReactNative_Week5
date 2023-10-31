import React, { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App({navigation}) {
  const [image, setImage] = useState(require('../assets/image/vs_blue.png'));
  const [color, setColor] = useState('blue');
  const [price, setPrice] = useState('1.790.000 đ');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.style1}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 112, height: 132, marginRight: 10,}}
            source={image}
            resizeMode='contain'
          />
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
            <Text style={[styles.style1.text, {marginTop: 15,}]}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
            <Text style={[styles.style1.text, {marginTop: 5}]}>Màu: <Text style={[styles.style1.text, {fontWeight:'bold'}]}>{color}</Text></Text>
            <Text style={[styles.style1.text, {marginTop: 5}]}>Cung cấp bởi <Text style={[styles.style1.text, {fontWeight:'bold'}]}>Tiki Tradding</Text></Text>
            <Text style={[styles.style1.text, {marginTop: 5, fontWeight:'bold'}]}>{price}</Text>
          </View>
        </View>
      </View>

      <View style={styles.style2}>
        <Text style={[styles.style2.text, {textContent: 'left'}]}>Chọn một màu bên dưới:</Text>
        <TouchableOpacity style={{width: 80, height: 75, backgroundColor: '#C5F1FB'}} onPress={()=>{setImage(require('../assets/image/vs_silver.png')),
        setColor('silver'), setPrice('1.890.000 đ')}}>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 80, height: 75, backgroundColor: '#F30D0D'}} onPress={()=>{setImage(require('../assets/image/vs_red.png')),
        setColor('red'), setPrice('1.990.000 đ')}}>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 80, height: 75, backgroundColor: '#000000'}} onPress={()=>{setImage(require('../assets/image/vs_black.png')),
        setColor('black'), setPrice('2.090.000 đ')}}>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 80, height: 75, backgroundColor: '#234896'}} onPress={()=>{setImage(require('../assets/image/vs_blue.png')),
        setColor('blue'), setPrice('1.790.000 đ')}}>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 326, height: 44, backgroundColor: 'rgba(25, 82, 226, 0.58)', borderWidth: 1, borderColor: '#CA1536', borderRadius: 10, alignItems: 'center', justifyContent: 'center',}} 
        onPress={()=>navigation.navigate({
            name: 'Detail',
            params: { img: image , price: price},
            })}>
          <Text style={{color: "#F9F2F2", fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase'}}>Xong</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontfamily: "Roboto",
  },
  style1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 5,
    width: '100%',
    text: {
      fontSize: '15px',
      fontWeight: 'normal',
      color: "#000000",
      width: 200,
      fontfamily: "Roboto",
    },
  },
  style2: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#C4C4C4',
    width: '100%',
    paddingBottom: 5,
    text: {
      fontSize: 18,
      fontWeight: 'normal',
      color: "#000000",
      marginLeft: -140,
      marginTop: 5,
    },
  },
});
