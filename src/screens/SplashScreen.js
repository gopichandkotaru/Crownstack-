import React from 'react';
import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
    // const { navigate } = navigation;
    React.useEffect(() => {
        setTimeout(goSong, 3000);
    }, [])

    const goSong = () => {
        navigation.navigate("Song")
    }
    return (
        <View style={styles.container}>
            <Animatable.Image
                animation="zoomIn"
                iterationCount={2}
                source={require('../assets/images/splash.jpg')}
                style={{
                    width: "25%",
                    height: "25%"
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SplashScreen;