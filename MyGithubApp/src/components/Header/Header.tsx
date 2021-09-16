import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {TouchableHighlight, View, Text, TextInput, SafeAreaView, ScrollView,  StyleSheet, Image} from 'react-native';
import {searchUser} from '../../redux/actions/actionCreators';


interface Props extends StackScreenProps<any, any> {}

const Header = ({navigation}: Props) => {
    const user = useSelector((store: any) => store.user);
    const dispatch = useDispatch();
    let [userSearch, setUserSearch] = useState('');
    function userSearched(user){
        setUserSearch(user);
        dispatch(searchUser(user))
    }
    return (
        <View style={styles.headerContainer}>
            <Image
                style={styles.logo}
                source={{
                    uri: "https://i.postimg.cc/W4pH9FN9/icons8-github-50.png",
                }}
            />  
            <TextInput
            style={styles.input}
            testID='searchInput'
            placeholder="Introduce el usuario"
            autoCapitalize="none"
            onChangeText={(user: string) => {userSearched(user)}}
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
    logo: {
        height: 50,
        width: 50,
        marginTop: 10,
        marginLeft: -40
    },
    input: {
        backgroundColor: '#caf0f8',
        width: 250,
        height: 50,
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#023e8a',
        padding: 10
    }
})

export default Header;