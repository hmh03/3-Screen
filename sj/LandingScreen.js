import {  TextInput,StyleSheet, View, Button, Text, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function LandingScreen ({navigation}) {
     // Kiểm tra trạng thái đăng nhập ở màn hình LandingScreen
  AsyncStorage.getItem('userToken').then(userToken => {
    if (userToken) {
      // Người dùng đã đăng nhập, chuyển họ đến màn hình chính
      navigation.navigate('Home');
    }
  });
    return(
        <View style={styles.container}>
            <View style={styles.image}>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/3428/3428655.png'}}
            style={{width: 120, height: 120,marginBottom:30}}/>
            </View>
           <Text style={styles.text1}>Welcome to our restaurant</Text>
           <Text style={styles.text2}>Order food and make reservations with one click.</Text>
            <View style={styles.btn}>
            <Button  title="Login" color={"#5EA33A"} onPress={()=> navigation.navigate('LoginAbc')}/>
            </View><View style={styles.btn1}>
            <Button  title="Sign Up"  color={'#344D91'} onPress={()=> navigation.navigate('SignUp')}/>
            </View>
            
        </View>
    );};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        backgroundColor: "#E5E5E5",
        alignContent:'center'
    },
    text1:{
        color:"#5EA33A",
        fontSize: 17,
        textAlign: "center",
        marginTop:30,
    },
    text2:{
        color:"#4A4A4A",
        fontSize: 17,
        textAlign: "center",
        marginTop:30,
        paddingHorizontal:60
    },
    btn:{
        
        marginTop: 20,
        marginHorizontal: 50,
        borderRadius: 80,
        overflow: "hidden",
        fontFamily: "FallingSkyBd",
    },
    btn1:{
        marginTop: 20,
        marginHorizontal: 50,
        borderRadius: 80,
        overflow: "hidden",
    },
    image:{
        alignItems:'center'
    }
});