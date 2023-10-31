import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function App({route, navigation}) {
    const [image, setImage] = useState(require('../assets/image/vs_blue.png'));
    const [price, setPrice] = useState('1.790.000 đ');
    // console.log(route);
    // console.log(route.params);
    useEffect(() => {
        setImage(route.params.img);
        setPrice(route.params.price);
    }, [route.params]);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.style1}>
      <Image
            style={{ width: 301, height: 361}}
            source={image}
            resizeMode='contain'
          />
      </View>
      <View style={styles.style2}>
        <Text style={styles.style2.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={{ flexDirection: 'row', marginTop:'9px'}}>
            <Image style={styles.style2.star}
                source={require('../assets/image/star.png')}
            />
            <Image style={styles.style2.star}
                source={require('../assets/image/star.png')}
            />
            <Image style={styles.style2.star}
                source={require('../assets/image/star.png')}
            />
            <Image style={styles.style2.star}
                source={require('../assets/image/star.png')}
            />
            <Image style={styles.style2.star}
                source={require('../assets/image/star.png')}
            />
            <Text style={styles.style2.danhgia}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: '13px', alignItems: 'center',}}>
            <Text style={[styles.style2.price, { marginLeft: 0 }]}>{price}</Text>
            <Text style={{ fontSize: '15', textDecorationLine: 'line-through', marginLeft: '44px' }}>1.790.000 đ</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: '13px', alignItems: 'center',}}>
            <Text style={{fontSize: '12', fontWeight:'bold', color:'#FA0000'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Image style={{width: 20, height: 20, marginLeft: '8px'}}
                source={require('../assets/image/hoicham.png')}
            />
        </View>
        <TouchableOpacity style={styles.style2.chonMau} onPress={()=>navigation.navigate('ChooseColor')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{ color: "#000000", fontSize: 15, fontWeight: 'normal', textAlign: 'center', width: 300}}>4 MÀU-CHỌN MÀU</Text>
          <Image
            style={{ width: 11.5, height: 14}}
            source={require('../assets/image/Vector.png')}
          />
          </View>
        </TouchableOpacity>
        
      </View>
      <View style={styles.style3}>
      <TouchableOpacity style={styles.style3.chonMua}>
          <Text style={styles.style3.text}>Chọn mua</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  style1:{
    flex:5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  style2:{
    flex: 2,
    marginLeft: 40,
    justifyContent: 'space-between',
    title:{
        fontSize: 15,
        color: "#000000",
    },
    star:{
        width: 23,
        height: 25,
        marginRight: 2,
    },
    danhgia:{
        fontSize: 15,
        color: "#000000",
        marginLeft: 23,
        fontWeight: 'normal',
    },
    price:{
        fontSize: 18,
        color: "#000",
        fontWeight: 'bold',
    },
    chonMau:{
        fontSize: 15,
        color: "#000",
        marginTop: 10,
        marginLeft: -10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 332,
        height: 34,
        borderWidth: 1,
        borderColor: 'argb(0, 0, 0, 0.46)',
        borderRadius: 10,
    },
    
  },
  style3:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    chonMua:{
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 326,
        height: 44,
        borderRadius: 10,
        backgroundColor: '#EE0A0A',
        shadowColor: '#CA1536',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    text:{
        fontSize: 20,
        alignItems:'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: "#FFFFFF",
        textTransform: "uppercase",
    }
  },
});
