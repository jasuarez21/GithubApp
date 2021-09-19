import React, {useEffect} from 'react';
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
        width: 500,
        height: 'auto',
        marginTop: 20
    },
    backgroundView: {
        height: 'auto',
    },
    errorMessage:{
        fontSize: 20,
        color: '#03045e',
        textAlign: 'center'
    },
    findUser: {
        fontSize: 12,
        color: '#03045e',
        position: 'absolute',
        marginTop: -5,
        marginLeft: 280
    },
    title: {
        fontSize: 18,
        marginTop: 50,
        marginLeft: 30,
        color: '#03045e',
        borderBottomWidth: 1,
        width: 400,
        borderBottomColor: '#03045e'
    },
    photo: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 16
    },
    username: {
        fontSize: 18,
        marginTop: 50,
        textTransform: 'uppercase',
        color: '#03045e'
    },
    userTarget: {
        height: 150,
        width: 400,
        marginLeft: 30,
        marginTop: 20,
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
        fontSize: 24
    }
})

export default List;