import {
    POPULAR_PRODUCT_LIST_REQUEST,
    POPULAR_PRODUCT_LIST_FAILURE,
    POPULAR_PRODUCT_LIST_SUCCESS,
} from './types'; 
import axios from 'axios';


export const popularProductListRequest=()=>({
    type: POPULAR_PRODUCT_LIST_REQUEST
});

export const popularProductListSuccess=(json ,sellerId)=>({
    type: POPULAR_PRODUCT_LIST_SUCCESS,
    payload: json,
    sellerId: sellerId
}); 

export const popularProductListFailure=(error)=>({
    type: POPULAR_PRODUCT_LIST_FAILURE,
    payload: error
}); 

export const fetchProductList=(id)=>{
    console.log(id)
    return dispatch=>{
        dispatch(popularProductListRequest());
        axios.get(`https://backend-webapi20191102020215.azurewebsites.net/api/products/GetProductsByShop/${id}`) //http://192.168.43.15:5001/api
        .then(json=>{
            dispatch(popularProductListSuccess(json.data, id));
        })
        .catch (error=>{
			console.log(error);
            dispatch(popularProductListFailure(error));
        })
    }
}
