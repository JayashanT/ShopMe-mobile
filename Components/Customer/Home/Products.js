import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView, Dimensions, TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import ProductsList from './ProductsList';
import {fetchProductList} from '../Redux/Actions/productListActions';
import {connect} from 'react-redux';
import {Locaton} from '../../Menu/screenNames';
import SearchPlace from '../../Map/SearchPlace';

class Products extends Component {
  static navigationOptions = { title: "products" };

  componentDidMount(){
      this.props.fetchProductList(this.props.navigation.getParam('id', '-'),);
      console.log(this.props)
  }

  render () {

    let productList=<ProductsList data={this.props.productsList.products} navigation={this.props.navigation} />;
    var loading=this.props.productsList.loading;
    var done=this.props.productsList.loading 

    if(loading)
      return (<ActivityIndicator size="large" style={styles.container} />);
    else 
    return (
        <ScrollView>
          <View style={styles.container}>

            <Text style={styles.text}> </Text>
            {productList}

          </View>
        </ScrollView>
    );
  }
}

const mapStateToProps=state=>{
  return {
    productsList: state.productsList,
  };
}

export default connect(mapStateToProps,{
  fetchProductList,
})(Products);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height:30,
    tintColor: 'white'
  },
  textLocation:{
    fontSize: 16,
    fontWeight: 'normal',
    color:'#593196'
  },
  text:{
    fontSize: 18,
    fontWeight: 'normal',
    margin: 20,
    color:'#593196'
  }
});



