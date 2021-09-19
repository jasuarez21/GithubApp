import React, {useEffect} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import Header from '../Header/Header';
import {TouchableHighlight, View, Text, ScrollView,  StyleSheet, Image} from 'react-native';
import { User } from '../../interfaces/User';


interface Props extends StackScreenProps<any, any> {}

const List = ({navigation}: Props) => {
    const user: [User] = useSelector((store: any) => store.user);
    let usersList: [User] = user;
    useEffect(() => {
        usersList = user
    }, [user])
    return ( 
        <View style={styles.backgroundView}>
        <Header />
        <Text style={styles.title}>Lista de usuarios</Text>
            <ScrollView style={styles.scrollContainer}>
            {
                    usersList.map((elem: User) => (
                            <TouchableHighlight style={styles.userTarget} onPress={() => navigation.navigate('DetailOfUser', {userSelected: elem})}>
                                <>
                                    <Image
                                        testID = {elem?.login}
                                        style={styles.photo}
                                        source={{
                                            uri: elem?.avatar_url,
                                        }}
                                    />
                                        <Text style={styles.username}>{elem?.login}</Text>
                                </>
                            </TouchableHighlight>
                    ))
            }
            {
                usersList[0]?.login === undefined ? (
                    <Text style={styles.errorMessage}>No hay resultados</Text>
                ):(
                    <Text style={styles.findUser}>Se han encontrado {usersList.length} resultados</Text>
                )
            }  
            </ScrollView>
        </View>  
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        width: 'auto',
        height: 'auto',
        marginTop: wp('3%')
    },
    backgroundView: {
        height: 'auto',
    },
    errorMessage:{
        fontSize: hp('2%'),
        color: '#03045e',
        textAlign: 'center'
    },
    findUser: {
        fontSize: hp('1.4%'),
        color: '#03045e',
        position: 'absolute',
        marginLeft: wp('50%')
    },
    title: {
        fontSize: hp('2%'),
        textTransform: 'uppercase',
        marginTop: hp('6%'),
        marginLeft: wp('6%'),
        color: '#03045e',
        borderBottomWidth: 1,
        width: wp('85%'),
        borderBottomColor: '#03045e'
    },
    photo: {
        height: hp('12%'),
        width: wp('20%'),
        borderRadius: 50,
        marginTop: hp('2%')
    },
    username: {
        fontSize: hp('2%'),
        marginTop: hp('6%'),
        textTransform: 'uppercase',
        color: '#03045e'
    },
    userTarget: {
        height: hp('17%'),
        width: wp('85%'),
        marginLeft: wp('6%'),
        marginTop: hp('2.5%'),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#023e8a',
        backgroundColor: '#caf0f8'
    },
    erroMessage: {
        color: 'red',
        fontSize: hp('2.2%')
    }
})

export default List;