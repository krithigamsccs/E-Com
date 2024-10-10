// import { Fragment, useEffect} from 'react'
// import MetaData from '../layouts/MetaData';
// import {MDBDataTable} from 'mdbreact'
// import { useDispatch, useSelector } from 'react-redux';
// import { userOrders as userOrdersAction } from '../../actions/orderActions';
// import { Link } from 'react-router-dom';

// export default function UserOrders () {
//     const { userOrders = []} = useSelector(state => state.orderState)
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(userOrdersAction)
//     },[])

//     const setOrders = () => {
//         const data = {
//             columns: [
//                 {
//                     label: "Order ID",
//                     field: 'id',
//                     sort: "asc"
//                 },
//                 {
//                     label: "Number of Items",
//                     field: 'numOfItems',
//                     sort: "asc"
//                 },
//                 {
//                     label: "Amount",
//                     field: 'amount',
//                     sort: "asc"
//                 },
//                 {
//                     label: "Status",
//                     field: 'status',
//                     sort: "asc"
//                 },
//                 {
//                     label: "Actions",
//                     field: 'actions',
//                     sort: "asc"
//                 }
//             ],
//             rows:[]
//         }

//         userOrders.forEach(userOrder => {
//             data.rows.push({
//                 id:  userOrder._id,
//                 numOfItems: userOrder.orderItems.length,
//                 amount: `₹${userOrder.totalPrice}`,
//                 status: userOrder.orderStatus && userOrder.orderStatus.includes('Delivered') ?
//                 (<p style={{color: 'green'}}> {userOrder.orderStatus} </p>):
//                 (<p style={{color: 'red'}}> {userOrder.orderStatus} </p>),
//                 actions: <Link to={`/order/${userOrder._id}`} className="btn btn-primary" >
//                     <i className='fa fa-eye'></i>
//                 </Link>
//             })
//         })


//         return  data;
//     }


//     return (
//         <Fragment>
//             <MetaData title="My Orders" />
//             <h1 className='mt-5'>My Orders</h1> 
//             <MDBDataTable
//                 className='px-3'
//                 bordered
//                 striped
//                 hover
//                 data={setOrders()}
//             />
//         </Fragment>
//     )
// }



// // // src/components/orders/UserOrders.js

// // import { Fragment, useEffect } from 'react';
// // import MetaData from '../layouts/MetaData';
// // import { MDBDataTable } from 'mdbreact';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { userOrders as userOrdersAction } from '../../actions/orderActions';
// // import { Link } from 'react-router-dom';
// // import { toast } from 'react-toastify';
// // import { clearError } from '../../slices/orderSlice';
// // import Loader from '../layouts/Loader';

// // export default function UserOrders() {
// //     // Extract necessary state from Redux store
// //     const { userOrders = [], loading = false, error } = useSelector(state => state.orderState);
// //     const dispatch = useDispatch();

// //     useEffect(() => {
// //         // Handle errors by displaying a toast notification
// //         if (error) {
// //             toast(error, {
// //                 position: toast.POSITION.BOTTOM_CENTER,
// //                 type: 'error',
// //                 onOpen: () => { dispatch(clearError()) }
// //             });
// //             return;
// //         }
// //         // Dispatch the action to fetch user orders
// //         dispatch(userOrdersAction());
// //     }, [dispatch, error]);

// //     // Function to structure data for MDBDataTable
// //     const setOrders = () => {
// //         const data = {
// //             columns: [
// //                 {
// //                     label: "Order ID",
// //                     field: 'id',
// //                     sort: "asc"
// //                 },
// //                 {
// //                     label: "Number of Items",
// //                     field: 'numOfItems',
// //                     sort: "asc"
// //                 },
// //                 {
// //                     label: "Amount",
// //                     field: 'amount',
// //                     sort: "asc"
// //                 },
// //                 {
// //                     label: "Status",
// //                     field: 'status',
// //                     sort: "asc"
// //                 },
// //                 {
// //                     label: "Tracking Number",
// //                     field: 'trackingNumber',
// //                     sort: "asc"
// //                 },
// //                 {
// //                     label: "Shipping Provider",
// //                     field: 'shippingProvider',
// //                     sort: "asc"
// //                 },
// //                 {
// //                     label: "Current Tracking Status",
// //                     field: 'currentStatus',
// //                     sort: "asc"
// //                 },
// //                 {
// //                     label: "Actions",
// //                     field: 'actions',
// //                     sort: "asc"
// //                 }
// //             ],
// //             rows: []
// //         };

// //         // Populate rows with order data including tracking information
// //         userOrders.forEach(userOrder => {
// //             data.rows.push({
// //                 id: userOrder._id,
// //                 numOfItems: userOrder.orderItems.length,
// //                 amount: `$${userOrder.totalPrice}`,
// //                 status: userOrder.orderStatus && userOrder.orderStatus.includes('Delivered') ?
// //                     (<p style={{ color: 'green' }}> {userOrder.orderStatus} </p>) :
// //                     (<p style={{ color: 'red' }}> {userOrder.orderStatus} </p>),
// //                 trackingNumber: userOrder.trackingInfo?.trackingNumber || 'N/A',
// //                 shippingProvider: userOrder.trackingInfo?.shippingProvider || 'N/A',
// //                 currentStatus: userOrder.trackingInfo?.currentStatus || 'N/A',
// //                 actions: (
// //                     <Link to={`/order/${userOrder._id}`} className="btn btn-primary">
// //                         <i className='fa fa-eye'></i>
// //                     </Link>
// //                 )
// //             });
// //         });

// //         return data;
// //     };

// //     return (
// //         <Fragment>
// //             <MetaData title="My Orders" />
// //             <h1 className='mt-5'>My Orders</h1>
// //             {loading ? <Loader /> :
// //                 <MDBDataTable
// //                     className='px-3'
// //                     bordered
// //                     striped
// //                     hover
// //                     data={setOrders()}
// //                 />
// //             }
// //         </Fragment>
// //     );
// // }






import { Fragment, useEffect } from 'react';
import MetaData from '../layouts/MetaData';
import { MDBDataTable } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { userOrders as userOrdersAction } from '../../actions/orderActions';
import { Link } from 'react-router-dom';

export default function UserOrders() {
    const { userOrders = [] } = useSelector(state => state.orderState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userOrdersAction());
    }, [dispatch]);

    const setOrders = () => {
        const data = {
            columns: [
                { label: 'Order ID', field: 'id', sort: 'asc' },
                { label: 'Number of Items', field: 'numOfItems', sort: 'asc' },
                { label: 'Amount', field: 'amount', sort: 'asc' },
                { label: 'Status', field: 'status', sort: 'asc' },
                { label: 'Tracking', field: 'tracking', sort: 'asc' }
            ],
            rows: []
        };

        userOrders.forEach(userOrder => {
            data.rows.push({
                id: userOrder._id,
                numOfItems: userOrder.orderItems.length,
                amount: `₹${userOrder.totalPrice}`,
                status: userOrder.orderStatus.includes('Delivered') ? (
                    <p style={{ color: 'green' }}>{userOrder.orderStatus}</p>
                ) : (
                    <p style={{ color: 'red' }}>{userOrder.orderStatus}</p>
                ),
                tracking: userOrder.trackingInfo?.trackingNumber ? (
                    <Fragment>
                        <p><b>Tracking Number:</b> {userOrder.trackingInfo.trackingNumber}</p>
                        <p><b>Provider:</b> {userOrder.trackingInfo.shippingProvider}</p>
                        <p><b>Status:</b> {userOrder.trackingInfo.currentStatus}</p>
                    </Fragment>
                ) : 'Not Available'
            });
        });

        return data;
    };

    return (
        <Fragment>
            <MetaData title={'My Orders'} />
            <h1 className="my-5">My Orders</h1>
            <MDBDataTable
                data={setOrders()}
                className="px-3"
                bordered
                striped
                hover
            />
        </Fragment>
    );
}
