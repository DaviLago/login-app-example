import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './Signup.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from '../../@types/Stacks';

type SignupProps = NativeStackScreenProps<LoginStackParamList, 'Signup'>;

const Signup = (props: SignupProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.signupTitle}>Signup</Text>
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
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Confirm Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setConfirmPassword(password)}
                />
            </View>
            <TouchableOpacity style={styles.signupBtn}>
                <Text style={styles.signupText}>SIGNUP</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Signup;
