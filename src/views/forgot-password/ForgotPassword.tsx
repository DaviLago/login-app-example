import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './ForgotPassword.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginStackParamList } from '../../@types/Stacks';

type ForgotPasswordProps = NativeStackScreenProps<LoginStackParamList, 'ForgotPassword'>;

const ForgotPassword = (props: ForgotPasswordProps) => {
    const [email, setEmail] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.forgotPasswordTitle}>Forgot Password</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <TouchableOpacity style={styles.forgotPasswordBtn}>
                <Text style={styles.forgotPasswordText}>SEND</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForgotPassword;
