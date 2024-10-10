// import { Fragment, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useParams } from 'react-router-dom';
// import  Loader from '../layouts/Loader';
// import {orderDetail as orderDetailAction } from '../../actions/orderActions';
// export default function OrderDetail () {
//     const { orderDetail, loading } = useSelector(state => state.orderState)
//     const { shippingInfo={}, user={}, orderStatus="Processing", orderItems=[], totalPrice=0, paymentInfo={} } = orderDetail;
//     const isPaid = paymentInfo && paymentInfo.status === "succeeded" ? true: false;
//     const dispatch = useDispatch();
//     const {id } = useParams();

//     useEffect(() => {
//         dispatch(orderDetailAction(id))
//     },[id])

//     return (
//         <Fragment>
//             {   loading ? <Loader/> :
//                 <Fragment>
//                     <div className="row d-flex justify-content-between">
//                         <div className="col-12 col-lg-8 mt-5 order-details">
    
//                             <h1 className="my-5">Order # {orderDetail._id}</h1>
    
//                             <h4 className="mb-4">Shipping Info</h4>
//                             <p><b>Name:</b> {user.name}</p>
//                             <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
//                             <p className="mb-4"><b>Address:</b>{shippingInfo.address}, {shippingInfo.city}, {shippingInfo.postalCode}, {shippingInfo.state}, {shippingInfo.country}</p>
//                             <p><b>Amount:</b> ₹{totalPrice}</p>
    
//                             <hr />
    
//                             <h4 className="my-4">Payment</h4>
//                             <p className={isPaid ? 'greenColor' : 'redColor' } ><b>{isPaid ? 'PAID' : 'NOT PAID' }</b></p>
    
    
//                             <h4 className="my-4">Order Status:</h4>
//                             <p className={orderStatus&&orderStatus.includes('Delivered') ? 'greenColor' : 'redColor' } ><b>{orderStatus}</b></p>
    
    
//                             <h4 className="my-4">Order Items:</h4>
    
//                             <hr />
//                             <div className="cart-item my-1">
//                                 {orderItems && orderItems.map(item => (
//                                     <div className="row my-5">
//                                         <div className="col-4 col-lg-2">
//                                             <img src={item.image} alt={item.name} height="45" width="65" />
//                                         </div>

//                                         <div className="col-5 col-lg-5">
//                                             <Link to={`/product/${item.product}`}>{item.name}</Link>
//                                         </div>


//                                         <div className="col-4 col-lg-2 mt-4 mt-lg-0">
//                                             <p>₹{item.price}</p>
//                                         </div>

//                                         <div className="col-4 col-lg-3 mt-4 mt-lg-0">
//                                             <p>{item.quantity} Piece(s)</p>
//                                         </div>
//                                     </div>
//                                 ))}
                                    
//                             </div>
//                             <hr />
//                         </div>
//                     </div>
//                 </Fragment>
//             }
//         </Fragment>
//     )
// }




// // import { Fragment, useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { Link, useParams } from 'react-router-dom';
// // import Loader from '../layouts/Loader';
// // import { orderDetail as orderDetailAction } from '../../actions/orderActions';
// // import { toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // // Assume you have some CSS for styling

// // export default function OrderDetail() {
// //     const { orderDetail, loading, error } = useSelector(state => state.orderState);
// //     const {
// //         shippingInfo = {},
// //         user = {},
// //         orderStatus = "Processing",
// //         orderItems = [],
// //         totalPrice = 0,
// //         paymentInfo = {},
// //         trackingInfo = {}
// //     } = orderDetail;
// //     const isPaid = paymentInfo && paymentInfo.status === "succeeded" ? true : false;
// //     const dispatch = useDispatch();
// //     const { id } = useParams();

// //     useEffect(() => {
// //         if (error) {
// //             toast.error(error, {
// //                 position: toast.POSITION.BOTTOM_CENTER,
// //                 onClose: () => dispatch(clearError()),
// //             });
// //             return;
// //         }
// //         dispatch(orderDetailAction(id));
// //     }, [dispatch, id, error]);

// //     // Function to determine status color
// //     const getStatusColor = (status) => {
// //         switch (status) {
// //             case 'Processing':
// //                 return 'red';
// //             case 'Shipped':
// //                 return 'orange';
// //             case 'Delivered':
// //                 return 'green';
// //             default:
// //                 return 'grey';
// //         }
// //     };

// //     return (
// //         <Fragment>
// //             {loading ? <Loader /> :
// //                 <Fragment>
// //                     <div className="row d-flex justify-content-between">
// //                         <div className="col-12 col-lg-8 mt-5 order-details">

// //                             <h1 className="my-5">Order # {orderDetail._id}</h1>

// //                             <h4 className="mb-4">Shipping Info</h4>
// //                             <p><b>Name:</b> {user.name}</p>
// //                             <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
// //                             <p className="mb-4"><b>Address:</b> {`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.state}, ${shippingInfo.country}`}</p>
// //                             <p><b>Amount:</b> ${totalPrice}</p>

// //                             <hr />

// //                             <h4 className="my-4">Payment</h4>
// //                             <p className={isPaid ? 'greenColor' : 'redColor'}>
// //                                 <b>{isPaid ? 'PAID' : 'NOT PAID'}</b>
// //                             </p>

// //                             <h4 className="my-4">Order Status:</h4>
// //                             <p className={`status ${orderStatus.includes('Delivered') ? 'greenColor' : 'redColor'}`}>
// //                                 <b>{orderStatus}</b>
// //                             </p>

// //                             {/* Tracking Information Section */}
// //                             <h4 className="my-4">Tracking Information</h4>
// //                             {trackingInfo && trackingInfo.trackingNumber ? (
// //                                 <div className="tracking-info">
// //                                     <p><b>Tracking Number:</b> {trackingInfo.trackingNumber}</p>
// //                                     <p><b>Shipping Provider:</b> {trackingInfo.shippingProvider}</p>
// //                                     <p><b>Current Status:</b> <span style={{ color: getStatusColor(trackingInfo.currentStatus) }}>{trackingInfo.currentStatus}</span></p>
// //                                     {/* Optional: Add a progress bar or timeline here */}
// //                                     <div className="tracking-status">
// //                                         <div className={`status-step ${trackingInfo.currentStatus === 'Processing' ? 'active' : ''}`}>Processing</div>
// //                                         <div className={`status-step ${trackingInfo.currentStatus === 'Shipped' || trackingInfo.currentStatus === 'Delivered' ? 'active' : ''}`}>Shipped</div>
// //                                         <div className={`status-step ${trackingInfo.currentStatus === 'Delivered' ? 'active' : ''}`}>Delivered</div>
// //                                     </div>
// //                                 </div>
// //                             ) : (
// //                                 <p>No tracking information available.</p>
// //                             )}

// //                             <hr />

// //                             <h4 className="my-4">Order Items:</h4>

// //                             <hr />
// //                             <div className="cart-item my-1">
// //                                 {orderItems && orderItems.map(item => (
// //                                     <div className="row my-5" key={item.product}>
// //                                         <div className="col-4 col-lg-2">
// //                                             <img src={item.image} alt={item.name} height="45" width="65" />
// //                                         </div>

// //                                         <div className="col-5 col-lg-5">
// //                                             <Link to={`/product/${item.product}`}>{item.name}</Link>
// //                                         </div>

// //                                         <div className="col-4 col-lg-2 mt-4 mt-lg-0">
// //                                             <p>${item.price}</p>
// //                                         </div>

// //                                         <div className="col-4 col-lg-3 mt-4 mt-lg-0">
// //                                             <p>{item.quantity} Piece(s)</p>
// //                                         </div>
// //                                     </div>
// //                                 ))}
// //                             </div>
// //                             <hr />
// //                         </div>
// //                     </div>
// //                 </Fragment>
// //             }
// //         </Fragment>
// //     )
// // }


import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import  Loader from '../layouts/Loader';
import {orderDetail as orderDetailAction } from '../../actions/orderActions';
export default function OrderDetail () {
    const { orderDetail, loading } = useSelector(state => state.orderState)
    const { shippingInfo={}, user={}, orderStatus="Processing", orderItems=[], totalPrice=0, paymentInfo={} } = orderDetail;
    const isPaid = paymentInfo && paymentInfo.status === "succeeded" ? true: false;
    const dispatch = useDispatch();
    const {id } = useParams();

    useEffect(() => {
        dispatch(orderDetailAction(id))
    },[id])

    return (
        <Fragment>
            {   loading ? <Loader/> :
                <Fragment>
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8 mt-5 order-details">
    
                            <h1 className="my-5">Order # {orderDetail._id}</h1>
    
                            <h4 className="mb-4">Shipping Info</h4>
                            <p><b>Name:</b> {user.name}</p>
                            <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
                            <p className="mb-4"><b>Address:</b>{shippingInfo.address}, {shippingInfo.city}, {shippingInfo.postalCode}, {shippingInfo.state}, {shippingInfo.country}</p>
                            <p><b>Amount:</b> ₹{totalPrice}</p>
    
                            <hr />
    
                            <h4 className="my-4">Payment</h4>
                            <p className={isPaid ? 'greenColor' : 'redColor' } ><b>{isPaid ? 'PAID' : 'NOT PAID' }</b></p>
    
    
                            <h4 className="my-4">Order Status:</h4>
                            <p className={orderStatus&&orderStatus.includes('Delivered') ? 'greenColor' : 'redColor' } ><b>{orderStatus}</b></p>
    
    
                            <h4 className="my-4">Order Items:</h4>
    
                            <hr />
                            <div className="cart-item my-1">
                                {orderItems && orderItems.map(item => (
                                    <div className="row my-5">
                                        <div className="col-4 col-lg-2">
                                            <img src={item.image} alt={item.name} height="45" width="65" />
                                        </div>

                                        <div className="col-5 col-lg-5">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>


                                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                            <p>₹{item.price}</p>
                                        </div>

                                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                            <p>{item.quantity} Piece(s)</p>
                                        </div>
                                    </div>
                                ))}
                                    
                            </div>
                            <hr />
                        </div>
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}
