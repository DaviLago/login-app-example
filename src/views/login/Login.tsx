import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './Login.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from '../../@types/Stacks';
import { useUserStore } from '../../store/userStore';

type LoginProps = NativeStackScreenProps<LoginStackParamList, 'Login'>;

const Login = (props: LoginProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = useUserStore((state) => state.login)

    return (
        <View style={styles.container}>
            <Text style={styles.loginTitle}>Login</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <View style={styles.signupForgotView}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                    <Text style={styles.signupButton}>Signup</Text>
                </TouchableOpacity>
                <Text> | </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgotButton}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={() => login('123')}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
