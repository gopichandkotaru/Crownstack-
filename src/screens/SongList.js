import React from 'react';
import { View, StyleSheet, Text, FlatList, Platform, TouchableOpacity } from 'react-native';

import { DATA } from '../constants/dummy-data';
import { Avatar } from 'react-native-elements';

const SongList = ({ navigation }) => {
    const [song, setSong] = React.useState();
    const [count, setCount] = React.useState(10);
    let SongData = DATA.results;

    React.useEffect(() => {
        console.log(DATA.results);
        getData();
    }, []);

    const getData = () => {
        let d = SongData.slice(0, 10);
        setSong(d);
    }

    const FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#ccc",
                }}
            />
        );
    }

    const renderList = ({ item }) => {
        return (
            <TouchableOpacity style={{
                width: "100%",
                height: 80,
                backgroundColor: "#ffff",
            }}
                key={item.artistId + item.collectionName + item.trackName}
                onPress={() => {
                    navigation.navigate("Detail", {
                        item
                    })
                }}
            >
                <View style={{ flexDirection: "row", paddingLeft: 10, paddingTop: 2 }}>

                    <Avatar
                        size="large"
                        rounded
                        source={{
                            uri: item.artworkUrl100
                            // uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                        }}
                        iconStyle={{backgroundColor:"red"}}
                    />
                    <View style={{ paddingTop: 5, marginLeft: 5 }}>
                        <Text style={{ fontSize: 18, fontWeight: "300", color:"#2a3139" }}>{item.trackName}</Text>
                        <Text style={{ fontSize: 15, color: "#ccc" }}>{item.artistName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>itunes Player</Text>
            </View>

            <FlatList
                ItemSeparatorComponent={FlatListItemSeparator}
                data={DATA.results}
                keyExtractor={(item) => item.artistId + item.collectionName + item.trackName}
                renderItem={renderList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fe553e",
        marginBottom: 5
    },
    headerTitle: {
        color: "#2a3139",
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default SongList;