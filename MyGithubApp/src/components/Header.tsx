import React, {useState} from 'react';
import {TouchableHighlight, View, Text, TextInput, SafeAreaView, ScrollView,  StyleSheet, Image} from 'react-native';

const Header = () => {
    let [userSearch, setUserSearch] = useState('');
    return (
        <View style={styles.headerContainer}>
            <TextInput
            style={styles.input}
            testID='searchInput'
            placeholder="Que buscas?"
            autoCapitalize="none"
            onChangeText={(user: string) => {setUserSearch(user)}}
            defaultValue={userSearch}
            value={userSearch}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 15
    },
    input: {
        backgroundColor: 'white',
        width: 250,
        height: 50,
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 25
    }
})

export default Header;