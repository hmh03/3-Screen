import { TextInput,StyleSheet, View, Button, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function SignUpScreen ({navigation}) {
    const handleSignUp = async () => {
        try {
          // Thực hiện đăng ký và nhận được token hoặc thông tin đăng nhập
          const userToken = 'xyz456'; // Thay 'xyz456' bằng token hoặc thông tin đăng nhập thực tế
    
          // Lưu thông tin đăng nhập vào AsyncStorage
          await AsyncStorage.setItem('userToken', userToken);
    
          // Sau đó, chuyển người dùng đến màn hình chính
          navigation.navigate('Home');
        } catch (error) {
          console.error('Lỗi đăng ký: ', error);
        }
      };
    return(
        <View style={styles.container}>
            <Text style={styles.text0}>
                CREATE NEW ACCOUNT
            </Text>
            <TextInput style={styles.input}  placeholder="Full Name"/>
            <TextInput style={styles.input}  placeholder="Phone Number"/>
            <TextInput style={styles.input}  placeholder="Email Address"/>
            <TextInput style={styles.input}  placeholder="Password" secureTextEntry={true}/>
            <View style={styles.btn}>
                <Button title="Sign Up" color={"#344D91"} />
            </View>
            
        </View>
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
        marginHorizontal:40 ,
        fontFamily: 'System'
    },
    btn:{
        
        marginTop: 50,
        marginHorizontal: 80,
        borderRadius: 80,
        overflow: "hidden",
        marginBottom:50
        
    },
    
});