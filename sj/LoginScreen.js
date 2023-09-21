import { TextInput,StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function LoginScreen ({navigation}) {
    const handleLogin = async () => {
        try {
          // Thực hiện đăng nhập và nhận được token hoặc thông tin đăng nhập
          const userToken = 'abc123'; // Thay 'abc123' bằng token hoặc thông tin đăng nhập thực tế
    
          // Lưu thông tin đăng nhập vào AsyncStorage
          await AsyncStorage.setItem('userToken', userToken);
    
          // Sau đó, chuyển người dùng đến màn hình chính
          navigation.navigate('Home');
        } catch (error) {
          console.error('Lỗi đăng nhập: ', error);
        }
      };
    return(
        <>
        {/* <View style={{backgroundColor:'white', paddingVertical:15 ,marginTop:20}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Text style={{fontSize: 20, marginLeft: 20, color: 'black'}}>
                    back
                </Text>
            </TouchableOpacity>
        </View> */}

        <View style={styles.container}>
            <Text style={styles.text0}>
                SIGN IN
            </Text>
            <TextInput style={styles.input}  placeholder="Email or Number Phone"/>
            <TextInput style={styles.input}  placeholder="Password" secureTextEntry={true}/>
            <View style={styles.btn}>
                <Button title="Login" color={"#5EA33A"} />
            </View>
            <Text style={styles.text1}>
                OR
            </Text>
            <View style={styles.btn}>
                <Button title="Facebook Login" color={"#344D91"} />
            </View>
        </View>
        </>
    );};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        backgroundColor: "#E5E5E5",

    },
    text0:{
        fontSize:20,
        color:"#5EA33A",
        marginBottom:50,
        paddingLeft:20
    },
    text1:{
        fontSize:17,
        color:"#4A4A4A",
        marginBottom:10,
        textAlign:'center'
    },
    input:{
        backgroundColor: "white",
        width:323,
        height:53,
        paddingLeft:30,
        marginTop:30,
        borderRadius: 999,
        marginHorizontal:40 
    },
    btn:{
        
        marginTop: 30,
        marginHorizontal: 80,
        borderRadius: 80,
        overflow: "hidden",
        marginBottom:50
        
    },
    
});