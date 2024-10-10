// import {adminOrdersFail, adminOrdersRequest, adminOrdersSuccess, createOrderFail, createOrderRequest, createOrderSuccess, deleteOrderFail, deleteOrderRequest, deleteOrderSuccess, orderDetailFail, orderDetailRequest, orderDetailSuccess, updateOrderFail, updateOrderRequest, updateOrderSuccess, userOrdersFail, userOrdersRequest, userOrdersSuccess } from '../slices/orderSlice';
// import axios from 'axios';

// export const createOrder = order => async(dispatch) => {
//     try {
//        dispatch(createOrderRequest())
//        const {data} = await axios.post(`/api/v1/order/new`, order)
//        dispatch(createOrderSuccess(data))
//     } catch (error) {
//         dispatch(createOrderFail(error.response.data.message))
//     }
// }
// export const userOrders = async(dispatch) => {
//     try {
//        dispatch(userOrdersRequest())
//        const {data} = await axios.get(`/api/v1/myorders`)
//        dispatch(userOrdersSuccess(data))
//     } catch (error) {
//         dispatch(userOrdersFail(error.response.data.message))
//     }
// }
// export const orderDetail = id => async(dispatch) => {
//     try {
//        dispatch(orderDetailRequest())
//        const {data} = await axios.get(`/api/v1/order/${id}`)
//        dispatch(orderDetailSuccess(data))
//     } catch (error) {
//         dispatch(orderDetailFail(error.response.data.message))
//     }
// }

// export const adminOrders = async(dispatch) => {
//     try {
//        dispatch(adminOrdersRequest())
//        const {data} = await axios.get(`/api/v1/admin/orders`)
//        dispatch(adminOrdersSuccess(data))
//     } catch (error) {
//         dispatch(adminOrdersFail(error.response.data.message))
//     }
// }

// export const deleteOrder = id => async(dispatch) => {
//     try {
//        dispatch(deleteOrderRequest())
//        await axios.delete(`/api/v1/admin/order/${id}`)
//        dispatch(deleteOrderSuccess())
//     } catch (error) {
//        dispatch(deleteOrderFail(error.response.data.message))
//     }
// }

// export const updateOrder = (id, orderData)  => async(dispatch) => {
//     try {
//        dispatch(updateOrderRequest())
//        const { data} = await axios.put(`/api/v1/admin/order/${id}`, orderData)
//        dispatch(updateOrderSuccess(data))
//     } catch (error) {
//        dispatch(updateOrderFail(error.response.data.message))
//     }
// }



// // actions/adminOrderActions.js

// // import { 
// //     adminOrdersFail, 
// //     adminOrdersRequest, 
// //     adminOrdersSuccess, 
// //     createOrderFail, 
// //     createOrderRequest, 
// //     createOrderSuccess, 
// //     deleteOrderFail, 
// //     deleteOrderRequest, 
// //     deleteOrderSuccess, 
// //     orderDetailFail, 
// //     orderDetailRequest, 
// //     orderDetailSuccess, 
// //     updateOrderFail, 
// //     updateOrderRequest, 
// //     updateOrderSuccess, 
// //     userOrdersFail, 
// //     userOrdersRequest, 
// //     userOrdersSuccess 
// // } from '../slices/orderSlice';
// // import axios from 'axios';

// // // Create a new order
// // export const createOrder = order => async(dispatch) => {
// //     try {
// //         dispatch(createOrderRequest());
// //         const { data } = await axios.post(`/api/v1/order/new`, order);
// //         dispatch(createOrderSuccess(data));
// //     } catch (error) {
// //         dispatch(createOrderFail(error.response.data.message));
// //     }
// // };

// // // Get user orders
// // export const userOrders = () => async(dispatch) => {
// //     try {
// //         dispatch(userOrdersRequest());
// //         const { data } = await axios.get(`/api/v1/myorders`);
// //         dispatch(userOrdersSuccess(data));
// //     } catch (error) {
// //         dispatch(userOrdersFail(error.response.data.message));
// //     }
// // };

// // // Get order details
// // export const orderDetail = id => async(dispatch) => {
// //     try {
// //         dispatch(orderDetailRequest());
// //         const { data } = await axios.get(`/api/v1/order/${id}`);
// //         dispatch(orderDetailSuccess(data));
// //     } catch (error) {
// //         dispatch(orderDetailFail(error.response.data.message));
// //     }
// // };

// // // Admin: Get all orders
// // export const adminOrders = () => async(dispatch) => {
// //     try {
// //         dispatch(adminOrdersRequest());
// //         const { data } = await axios.get(`/api/v1/admin/orders`);
// //         dispatch(adminOrdersSuccess(data));
// //     } catch (error) {
// //         dispatch(adminOrdersFail(error.response.data.message));
// //     }
// // };

// // // Admin: Delete an order
// // export const deleteOrder = id => async(dispatch) => {
// //     try {
// //         dispatch(deleteOrderRequest());
// //         await axios.delete(`/api/v1/admin/order/${id}`);
// //         dispatch(deleteOrderSuccess());
// //     } catch (error) {
// //         dispatch(deleteOrderFail(error.response.data.message));
// //     }
// // };

// // // Admin: Update an order
// // export const updateOrder = (id, orderData) => async(dispatch) => {
// //     try {
// //         dispatch(updateOrderRequest());
// //         const { data } = await axios.put(`/api/v1/admin/order/${id}`, orderData);
// //         dispatch(updateOrderSuccess(data));
// //     } catch (error) {
// //         dispatch(updateOrderFail(error.response.data.message));
// //     }
// // };



import {
    adminOrdersFail, adminOrdersRequest, adminOrdersSuccess, 
    createOrderFail, createOrderRequest, createOrderSuccess, 
    deleteOrderFail, deleteOrderRequest, deleteOrderSuccess, 
    orderDetailFail, orderDetailRequest, orderDetailSuccess, 
    updateOrderFail, updateOrderRequest, updateOrderSuccess, 
    userOrdersFail, userOrdersRequest, userOrdersSuccess ,
} from '../slices/orderSlice';

import axios from 'axios';

// Create a new order
export const createOrder = order => async(dispatch) => {
    try {
        dispatch(createOrderRequest());
        const { data } = await axios.post(`/api/v1/order/new`, order);
        dispatch(createOrderSuccess(data));
    } catch (error) {
        dispatch(createOrderFail(error.response.data.message));
    }
}

// Get user orders
export const userOrders = () => async(dispatch) => {
    try {
        dispatch(userOrdersRequest());
        const { data } = await axios.get(`/api/v1/myorders`);
        dispatch(userOrdersSuccess(data));
    } catch (error) {
        dispatch(userOrdersFail(error.response.data.message));
    }
}

// Get order details
export const orderDetail = id => async(dispatch) => {
    try {
        dispatch(orderDetailRequest());
        const { data } = await axios.get(`/api/v1/order/${id}`);
        dispatch(orderDetailSuccess(data));
    } catch (error) {
        dispatch(orderDetailFail(error.response.data.message));
    }
}

// Get admin orders
export const adminOrders = () => async(dispatch) => {
    try {
        dispatch(adminOrdersRequest());
        const { data } = await axios.get(`/api/v1/admin/orders`);
        dispatch(adminOrdersSuccess(data));
    } catch (error) {
        dispatch(adminOrdersFail(error.response.data.message));
    }
}

// Delete an order
export const deleteOrder = id => async(dispatch) => {
    try {
        dispatch(deleteOrderRequest());
        await axios.delete(`/api/v1/admin/order/${id}`);
        dispatch(deleteOrderSuccess());
    } catch (error) {
        dispatch(deleteOrderFail(error.response.data.message));
    }
}

// Update order status and tracking
export const updateOrder = (id, orderData) => async(dispatch) => {
    try {
        dispatch(updateOrderRequest());
        const { data } = await axios.put(`/api/v1/admin/order/${id}`, orderData);
        dispatch(updateOrderSuccess(data));
    } catch (error) {
        dispatch(updateOrderFail(error.response.data.message));
    }
}



