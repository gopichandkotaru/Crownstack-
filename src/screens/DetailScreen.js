import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DetailScreen = ({ navigation, route }) => {
    const { item } = route.params;
    console.log(item)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={{ width: "10%" }}
                    onPress={() => { navigation.goBack() }}
                >
                    <AntDesign name="left" size={25} color={"#2a3139"} />
                </TouchableOpacity>
                <View style={{ width: "90%" }}>
                    <Text style={styles.headerTitle}>itunes Player</Text>
                </View>
            </View>
            <View style={{ height: "40%", width: '100%', justifyContent: "center", alignItems: "center" }}>
                <Animatable.Image
                    animation="zoomIn"
                    source={{ uri: item.artworkUrl100 }}
                    style={{ width: 200, height: 200, borderRadius: 200 }}
                />
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#2a3139" }}>{item.trackName}</Text>
                <Text style={{ fontSize: 18, color: "#ccc" }}>{item.artistName}</Text>
                <View style={{marginTop: 20, alignItems:"center"}}>
                    <Text style={{ fontSize: 18, color: "#2a3139" }}>{item.collectionName}</Text>
                    <Text style={{ fontSize: 18, color: "#828894" }}>{item.collectionPrice}$</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    },
    header: {
        flexDirection: "row",
        width: '100%',
        height: 60,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fe553e",
        marginBottom: 5,
        paddingLeft: 20
    },
    headerTitle: {
        color: "#2a3139",
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default DetailScreen;