import React, {useEffect} from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import { Text, TouchableHighlight, ScrollView, View, StyleSheet, Image} from 'react-native';
import { getFollowers, getRepos } from '../../redux/actions/actionCreators';


interface Props extends StackScreenProps<any, any> {}

const UserDetail = ({route, navigation}: any) => {
    const followers: any = useSelector((store: any) => store.followers);
    const repos: any = useSelector((store: any) => store.repos);
    const {userSelected} = route.params;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFollowers(userSelected.followers_url))
        dispatch(getRepos(userSelected.repos_url))
    }, [])
    return (
        <ScrollView style={styles.detailContainer}>
        <TouchableHighlight  
            style={styles.backContainer}
            onPress={() => navigation.navigate('ListOfUsers', {})}>
        <Image
                style={styles.iconBack}
                source={{
                    uri: "https://img.icons8.com/color/48/000000/circled-left-2--v1.png",
                }}
            />                          
        </TouchableHighlight>
            <Text style={styles.username}>{userSelected?.login}</Text>
            <Image
                style={styles.photoDetail}
                source={{
                    uri: userSelected?.avatar_url,
                }}
            />
            <Text style={styles.informationUser}>{userSelected?.html_url}</Text>
            <Text style={styles.informationUser}>Tiene {followers.length} seguidores!</Text>
            <Text style={styles.titleRepo}>REPOSITORIOS</Text>
            {
                repos?.slice(0,5).map((repo: any) => (
                    <View style={styles.repoContainer}>
                        <Text style={styles.nameRepo}>{repo.name}</Text>
                        <Text style={styles.informationRepo}>{repo.description}</Text>
                        <Text style={styles.informationRepo}>{repo.git_url}</Text>
                    </View>
                ))                 
            }
        </ScrollView>
    )}

    const styles = StyleSheet.create({
        detailContainer: {
            display: 'flex',
            flexDirection: 'column',
            borderColor: '#023e8a',
            backgroundColor: '#ade8f4'
        },
        backContainer:{
            width: 50,
            position: 'absolute',
            marginTop: 10,
            marginLeft: 10
        },
        iconBack: {
            height: 40,
            width: 40
        },
        repoContainer: {
            backgroundColor: '#caf0f8',
            marginTop: 10,
            width: 350,
            height: 'auto',
            padding: 10,
            alignSelf: 'center',
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#023e8a'
        },
        titleRepo: {
            fontSize: 18,
            borderBottomWidth: 1,
            borderBottomColor: '#023e8a',
            color: '#023e8a',
            marginLeft: 10,
            marginRight: 30,
            marginTop: 20
        },
        nameRepo: {
            fontSize: 16,
            marginLeft: 20,
            textTransform: 'uppercase'
        },
        informationRepo: {
            fontSize: 14,
            marginLeft: 20,
        },
        username: {
            color: '#023e8a',
            fontSize: 28,
            textTransform: 'uppercase',
            alignSelf: 'center',
            marginTop: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#023e8a'
        },
        informationUser: {
            alignSelf: 'center',
            marginTop: 20,
            fontSize: 20
        },
        photoDetail: {
            height: 200,
            width: 200,
            borderRadius: 25,
            marginTop: 20,
            alignSelf: 'center'
        },
        followersContainer: {
            width: 600,
            height: 600,
            borderWidth: 1,
            borderColor: 'red'
        }
    })
    

export default UserDetail