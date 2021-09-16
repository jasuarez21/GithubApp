import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import Header from '../Header/Header';
import {TouchableHighlight, View, Text, TextInput, SafeAreaView, ScrollView,  StyleSheet, Image} from 'react-native';


interface Props extends StackScreenProps<any, any> {}

const List = ({navigation}: Props) => {
    const user: any = useSelector((store: any) => store.user);
    let usersList = user;
    const dispatch = useDispatch();
    useEffect(() => {
        usersList = user
    }, [user])
    return ( 
        <View style={styles.backgroundView}>
        <Header navigation={undefined} route={undefined} />
        <Text style={styles.title}>Lista de usuarios</Text>
            <ScrollView style={styles.scrollContainer}>
            {
                usersList ? (
                    usersList.map((elem: any) => (
                            <TouchableHighlight style={styles.userTarget} onPress={() => navigation.navigate('DetailOfUser', {userSelected: elem})}>
                                <>
                                    <Image
                                        style={styles.photo}
                                        source={{
                                            uri: elem?.avatar_url,
                                        }}
                                    />
                                        <Text style={styles.username}>{elem?.login}</Text>
                                </>
                            </TouchableHighlight>
                    ))
                ):(
                    <Text style={styles.errorMessage}>No hay resultados</Text>
                )
            }
            </ScrollView>  
        </View>  
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        width: 500,
        height: 1000,
        marginTop: 30
    },
    backgroundView: {
        backgroundColor: '#ade8f4'
    },
    title: {
        fontSize: 18,
        marginTop: 50,
        color: '#03045e',
        textAlign: 'center'
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
        color: '#03045e'
    },
    userTarget: {
        height: 150,
        width: 400,
        marginLeft: 30,
        marginTop: 10,
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