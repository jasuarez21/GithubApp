import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
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
        <>
        <Text>Lista de usuarios</Text>
        {
        usersList.map((elem) => <Text>Esta es el user {elem?.login}</Text>)
        }
        </>  
    )
}

const styles = StyleSheet.create({
})

export default List;