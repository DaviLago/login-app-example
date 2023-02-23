import { Text, TouchableOpacity, View } from 'react-native';
import { useUserStore } from '../../store/userStore';
import styles from './Settings.styles';

const Settings = () => {
    const logout = useUserStore((state) => state.logout)

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Settings</Text>
            <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Settings;
