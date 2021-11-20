import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


import { FlatList } from "react-native-gesture-handler";
import PostCard from "./PostCard"

export default class postCard extends Component {
    render(){
        return(
            <FlatList>
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                            source={require("../assets/profile_img.png")}
                            style={styles.profileImage}
                            ></Image>
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>                        
                    </View>
                    <Image source={require("../assets/post.jpeg")} style={styles.postImage} />
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            {this.prop.post.caption}
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicon name={"heart"} size={RFValue(30)} color={"white"} />
                            <Text style={styles.likeButton}>12k</Text> 
                        </View>
                    </View>
                </View>
            </View>
            </FlatList>
        )
    }
}