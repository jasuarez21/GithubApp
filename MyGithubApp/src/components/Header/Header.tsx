import React, {useState} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import {searchUser} from '../../redux/actions/actionCreators';

const Header = () => {
    const dispatch = useDispatch();
    let [userSearch, setUserSearch] = useState('');
    function userSearched(user: string){
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
        marginTop: hp('5%')
    },
    logo: {
        height: hp('5.4%'),
        width: wp('9%'),
        marginTop: hp('1.5%'),
        marginLeft: - wp('10%')
    },
    input: {
        backgroundColor: '#caf0f8',
        width: wp('50%'),
        height: hp('5.4%'),
        marginTop: hp('1.5%'),
        marginLeft: wp('3%'),
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#023e8a',
        padding: hp('1.5%')
    }
})

export default Header;