import React, {useEffect, useState} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StackScreenProps } from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import { Text, TouchableHighlight, ScrollView, View, StyleSheet, Image} from 'react-native';
import { getFollowers, getRepos } from '../../redux/actions/actionCreators';
import { User } from '../../interfaces/User';


interface Props extends StackScreenProps<any, any> {}

const UserDetail = ({route, navigation}: Props) => {
    const followers: [User] = useSelector((store: any) => store.followers);
    const repos: any = useSelector((store: any) => store.repos);
    const {userSelected} = route.params;
    let [repoInit, setRepoInit] = useState(0);
    let [repoEnd, setRepoEnd] = useState(5);
    let [repoPage, setRepoPage] = useState(1)
    let [followerInit, setFollowerInit] = useState(0);
    let [followerEnd, setFollowerEnd] = useState(5);
    let [followerPage, setFollowerPage] = useState(1)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFollowers(userSelected.followers_url))
        dispatch(getRepos(userSelected.repos_url))
    }, [])
    const nextRepoPage = () => {
        if(repos.slice( repoInit + 5, repoEnd + 5).length === 0){
            return false
        } else {
            setRepoPage(repoPage += 1)
            setRepoInit(repoInit += 5);
            setRepoEnd(repoEnd += 5)
        }
    }
    const previousRepoPage = () => {
        if(repoPage === 1){
            return false
        } else {
            setRepoPage(repoPage -= 1)
            setRepoInit(repoInit-=5);
            setRepoEnd(repoEnd-=5)
        }
    }
    const nextFollowerPage = () => {
        if(followers.slice( followerInit + 5, followerEnd + 5).length === 0){
            return false
        } else {
            setFollowerPage(followerPage += 1)
            setFollowerInit(followerInit += 5);
            setFollowerEnd(followerEnd += 5)
        }
    }
    const previousFollowerPage = () => {
        if(followerPage === 1){
            return false
        } else {
            setFollowerPage(followerPage -= 1)
            setFollowerInit(followerInit-=5);
            setFollowerEnd(followerEnd-=5)
        }
    }
    return (
        <ScrollView style={styles.detailContainer}>
        <TouchableHighlight  
            style={styles.backContainer}
            onPress={() => navigation.navigate('ListOfUsers', {})}>
        <Image
                testID='backButton'
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
            <View style={styles.reposHeaderContainer}>
                <Text style={styles.titleRepo}>REPOSITORIOS</Text>
                <TouchableHighlight  
                    style={styles.backButton}
                    onPress={() => previousRepoPage()}>
                    <Image
                        testID="previousRepoPage"
                        style={styles.iconsPaginate}
                        source={{
                            uri: "https://i.postimg.cc/WbLjCbqG/icons8-back-32-2.png",
                        }}
                    />                          
                </TouchableHighlight>
                <Text style={styles.titleRepo}>{repoPage}</Text>
                <TouchableHighlight  
                    style={styles.nextButton}
                    onPress={() => nextRepoPage()}>
                    <Image
                        testID="nextRepoPage"
                        style={styles.iconsPaginate}
                        source={{
                            uri: "https://i.postimg.cc/wTsFr9Yd/icons8-more-than-50.png",
                        }}
                    />                          
                </TouchableHighlight>
            </View>
            {
                repos.slice(repoInit, repoEnd).map((repo: any) => (
                    <View style={styles.repoContainer}>
                        <Text style={styles.nameRepo}>{repo.name}</Text>
                        <Text style={styles.informationRepo}>{repo.description}</Text>
                        <Text style={styles.informationRepo}>{repo.git_url}</Text>
                    </View>
                ))
            }
            <View style={styles.followersContainer}>
                <View style={styles.followersHeaderContainer}>
                    <Text style={styles.titleRepo}>SEGUIDORES</Text>
                    <TouchableHighlight  
                            style={styles.backButton}
                            onPress={() => previousFollowerPage()}>
                            <Image
                                testID="previousFollowerPage"
                                style={styles.iconsPaginate}
                                source={{
                                    uri: "https://i.postimg.cc/WbLjCbqG/icons8-back-32-2.png",
                                }}
                            />                          
                        </TouchableHighlight>
                        <Text style={styles.titleRepo}>{followerPage}</Text>
                        <TouchableHighlight  
                            style={styles.nextButton}
                            onPress={() => nextFollowerPage()}>
                            <Image
                                testID="nextFollowerPage"
                                style={styles.iconsPaginate}
                                source={{
                                    uri: "https://i.postimg.cc/wTsFr9Yd/icons8-more-than-50.png",
                                }}
                            />                          
                        </TouchableHighlight>
                    </View>
                    {
                    followers.slice(followerInit, followerEnd).map((follower: any) => (
                            <Text style={styles.followerName}>{follower.login}</Text>
                    ))                                  
                    }
            </View>
        </ScrollView>
    )}

    const styles = StyleSheet.create({
        detailContainer: {
            display: 'flex',
            flexDirection: 'column'
        },
        backContainer:{
            width: wp('12%'),
            position: 'absolute',
            marginTop: hp('1%'),
            marginLeft: wp('2%')
        },
        iconsPaginate: {
            width: wp('4%'),
            height: hp('3%'),
            marginBottom: hp('0.5%') 
        },
        backButton: {
            alignSelf: 'flex-end'
        },
        nextButton: {
            alignSelf: 'flex-end'
        },
        reposHeaderContainer: {
            height: hp('5.5%'),
            width: wp('90%'),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: '#023e8a',
            marginBottom: hp('1%'),
            marginLeft: wp('2%'),
            marginTop: hp('1%')
        },
        iconBack: {
            height: hp('6%'),
            width: wp('12%')
        },
        repoContainer: {
            backgroundColor: '#caf0f8',
            marginTop: hp('1'),
            width: wp('75%'),
            height: 'auto',
            padding: hp('1.3%'),
            alignSelf: 'center',
            borderRadius: hp('1.2%'),
            borderWidth: 1,
            borderColor: '#023e8a'
        },
        titleRepo: {
            fontSize: hp('2%'),
            color: '#023e8a',
            marginLeft: hp('1%'),
            marginRight: wp('5%'),
            marginTop: hp('2%')
        },
        nameRepo: {
            fontSize: hp('1.8%'),
            marginLeft: wp('4%'),
            textTransform: 'uppercase'
        },
        informationRepo: {
            fontSize: hp('1.6%'),
            marginLeft: wp('4%'),
        },
        username: {
            color: '#023e8a',
            fontSize: hp('3%'),
            textTransform: 'uppercase',
            alignSelf: 'center',
            marginTop: hp('2.2%'),
            borderBottomWidth: 1,
            borderBottomColor: '#023e8a'
        },
        informationUser: {
            alignSelf: 'center',
            marginTop: hp('2.2%'),
            fontSize: hp('2.3%')
        },
        photoDetail: {
            height: hp('23%'),
            width: wp('43%'),
            borderRadius: hp('2.5%'),
            marginTop: hp('2.2%'),
            alignSelf: 'center',
            borderWidth: 3,
            borderColor: '#03045e'
        },
        followersHeaderContainer: {
            width: wp('90%'),
            height: 'auto',
            marginBottom: hp('1%'),
            marginLeft: wp('2%%'),
            marginTop: hp('2%'),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: '#023e8a',
            padding: hp('0.5%')
        },
        followerName: {
            textTransform: 'uppercase',
            textAlign: 'center',
            backgroundColor: '#caf0f8',
            alignSelf: 'center',
            borderRadius: hp('1%'),
            fontSize: hp('2.2%'),
            borderWidth: 1,
            height: hp('7%'),
            width: wp('38%'),
            margin: hp('0.5%'),
            padding: hp('1.3%')
        }
    })
    

export default UserDetail