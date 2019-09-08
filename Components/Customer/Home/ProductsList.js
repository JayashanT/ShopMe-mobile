import React, {Component} from 'react';
import { Text, View, StyleSheet, Alert, Image, Dimensions, FlatList, Platform, TouchableOpacity} from 'react-native';
import {Data} from './Data';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProductDetails} from '../../Menu/screenNames'; 

const FlatListItem = (props) => {
    return(
        <View style={{borderWidth: 1,borderColor:'black', margin: 4 }} >
            <TouchableOpacity 
                onPress={() => props.navigation.navigate(ProductDetails, props.item)}    
            >  
                <View style={styles.listItem}>
                    <Text style={styles.text}>{props.item.name}</Text>
                    <Image style={styles.image} source={{uri: props.item.image}}/>

                    <Text style={styles.textDes} >{ props.item.description.length > 60 ? 
                        (((props.item.description).substring(0,57)) + '...') : 
                        props.item.description }
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={{alignSelf: 'baseline',flexDirection:'row'}}>
                <Text style={styles.text}>LKR: {props.item.sellingPrice}  </Text>
                <Text style={styles.textDiscount}>{props.item.unitPrice}</Text>
            </View>                
            <View style={{flex:1, flexDirection: 'row',alignSelf: 'baseline', bottom:0}}>
                <Text style={styles.textLike}><Icon name="ios-star" size={20} color="orange" /> {props.item.rating}  |</Text>
                <Text style={styles.textLike}><Icon name="ios-heart" size={20} color="red" /> {props.item.like}</Text>
            </View>
        </View>
    );
}

export default class ProductsList extends Component {
    render(){
        let columns= columns=Math.floor(widthScreen/200);
        return (
            <View style={styles.container}>
                <View>
                    <FlatList style={{backgroundColor: "white", opacity: 1}}
                        numColumns={columns}
                        horizontal={false}
                        data={this.props.data}
                        showsHorizontalScrollIndicator={false} 
                        renderItem={({item, index}) => {
                            return (
                                <FlatListItem navigation={this.props.navigation}
                                    item={item} index={index} parentFlatList={this}>
                                </FlatListItem>
                            )
                        }}
                        keyExtractor={(item, index) => item.id.toString()}
                    />
                </View>
            </View>
        );
    }
};


const widthScreen=Dimensions.get('window').width;
const heightScreen=Dimensions.get('window').height;

const styles = StyleSheet.create({
    
    container: { 
        flex: 1,
        flexDirection:'column',
        marginTop: Platform.OS==='ios' ? 34 : 0,
    },
    listItem: {
        flex: 1,
        flexDirection:'column',
        alignItems:'center',
        width: 200,
        height: 250,
    },
    icon: {
        width: 30,
        height:30,
        tintColor: 'red'
    },
    text:{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        margin: 3,
    },
    textDiscount:{
        fontSize: 17,
        color: 'red',
        textDecorationLine: 'line-through',
        margin: 3, 
    },
    textDes:{
        fontSize: 17,
        color: 'black',
        margin: 2,
    },
    textLike:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        margin: 3,
    },
    image:{
        width: 190,
        height: 180,
        resizeMode:'center'
    }
});
