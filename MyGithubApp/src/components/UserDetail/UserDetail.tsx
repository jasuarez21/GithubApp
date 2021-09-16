import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import { Text, SafeAreaView, ScrollView,  StyleSheet, Image} from 'react-native';


interface Props extends StackScreenProps<any, any> {}

const UserDetail = ({route}: any) => {
    const {userSelected} = route.params;
    console.log(userSelected)
    return (
        <>
            <Text>Usuario seleccionado</Text>
        <ScrollView style={styles.detailContainer}>
            <Image
                style={styles.photoDetail}
                source={{
                    uri: userSelected?.avatar_url,
                }}
            />
            <Text>{userSelected?.login}</Text>
            <Text>{userSelected?.html_url}</Text>
        </ScrollView>
    </>
    )}

    const styles = StyleSheet.create({
        detailContainer: {
            height: 150,
            width: 400,
            marginLeft: 30,
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            borderWidth: 1,
            borderRadius: 25,
            borderColor: '#023e8a',
            backgroundColor: '#ade8f4'
        },
        photoDetail: {
            height: 150,
            width: 300,
            borderRadius: 25,
            marginTop: 20
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
    

export default UserDetail