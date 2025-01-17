// import { Fragment, useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import { useDispatch, useSelector} from 'react-redux';
// import { useNavigate, useParams } from "react-router-dom";
// import { orderDetail as orderDetailAction, updateOrder } from "../../actions/orderActions";
// import { toast } from "react-toastify";
// import { clearOrderUpdated, clearError } from "../../slices/orderSlice";
// import { Link } from "react-router-dom";

// export default function UpdateOrder () {
    
    
//     const { loading, isOrderUpdated, error, orderDetail } = useSelector( state => state.orderState)
//     const { user = {}, orderItems = [], shippingInfo = {}, totalPrice = 0, paymentInfo = {}} = orderDetail;
//     const isPaid = paymentInfo.status === 'succeeded'? true: false;
//     const [orderStatus, setOrderStatus] = useState("Processing");
//     const { id:orderId } = useParams();


//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const submitHandler = (e) => {
//         e.preventDefault();
//         const orderData = {};
//         orderData.orderStatus = orderStatus;
//         dispatch(updateOrder(orderId, orderData))
//     }
    
//     useEffect(() => {
//         if(isOrderUpdated) {
//             toast('Order Updated Succesfully!',{
//                 type: 'success',
//                 position: toast.POSITION.BOTTOM_CENTER,
//                 onOpen: () => dispatch(clearOrderUpdated())
//             })
           
//             return;
//         }

//         if(error)  {
//             toast(error, {
//                 position: toast.POSITION.BOTTOM_CENTER,
//                 type: 'error',
//                 onOpen: ()=> { dispatch(clearError()) }
//             })
//             return
//         }

//         dispatch(orderDetailAction(orderId))
//     }, [isOrderUpdated, error, dispatch])


//     useEffect(() => {
//         if(orderDetail._id) {
//             setOrderStatus(orderDetail.orderStatus);
//         }
//     },[orderDetail])


//     return (
//         <div className="row">
//             <div className="col-12 col-md-2">
//                     <Sidebar/>
//             </div>
//             <div className="col-12 col-md-10">
//                 <Fragment>
//                 <div className="row d-flex justify-content-around">
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
//                         <div className="col-12 col-lg-3 mt-5">
//                             <h4 className="my-4">Order Status</h4>
//                             <div className="form-group">
//                                 <select 
//                                 className="form-control"
//                                 onChange={e => setOrderStatus(e.target.value)}
//                                 value={orderStatus}
//                                 name="status"
//                                 >
//                                     <option value="Processing">Processing</option>
//                                     <option value="Shipped">Shipped</option>
//                                     <option value="Delivered">Delivered</option>
//                                 </select>
                              
//                             </div>
//                             <button
//                                 disabled={loading}
//                                 onClick={submitHandler}
//                                 className="btn btn-primary btn-block"
//                                 >
//                                     Update Status
//                             </button>

//                         </div>
//                     </div>
//                 </Fragment>
//             </div>
//         </div>
        
//     )
// }




// // import { Fragment, useEffect, useState } from "react";
// // import Sidebar from "./Sidebar";
// // import { useDispatch, useSelector } from 'react-redux';
// // import { useNavigate, useParams } from "react-router-dom";
// // import { orderDetail as orderDetailAction, updateOrder } from "../../actions/orderActions";
// // import { toast } from "react-toastify";
// // import { clearOrderUpdated, clearError } from "../../slices/orderSlice";
// // import { Link } from "react-router-dom";

// // export default function UpdateOrder() {
// //     const { loading, isOrderUpdated, error, orderDetail } = useSelector(state => state.orderState);
// //     const { user = {}, orderItems = [], shippingInfo = {}, totalPrice = 0, paymentInfo = {}, trackingInfo = {} } = orderDetail;
// //     const isPaid = paymentInfo.status === 'succeeded' ? true : false;
// //     const [orderStatus, setOrderStatus] = useState("Processing");
// //     const [trackingNumber, setTrackingNumber] = useState(trackingInfo?.trackingNumber || "");
// //     const [shippingProvider, setShippingProvider] = useState(trackingInfo?.shippingProvider || "");
// //     const [currentTrackingStatus, setCurrentTrackingStatus] = useState(trackingInfo?.currentStatus || "Not Shipped");
// //     const { id: orderId } = useParams();

// //     const navigate = useNavigate();
// //     const dispatch = useDispatch();

// //     const submitHandler = (e) => {
// //         e.preventDefault();

// //         const orderData = {
// //             orderStatus,
// //             trackingInfo: {
// //                 trackingNumber,
// //                 shippingProvider,
// //                 currentStatus: currentTrackingStatus
// //             }
// //         };
// //         dispatch(updateOrder(orderId, orderData));
// //     };

// //     useEffect(() => {
// //         if (isOrderUpdated) {
// //             toast('Order Updated Successfully!', {
// //                 type: 'success',
// //                 position: toast.POSITION.BOTTOM_CENTER,
// //                 onOpen: () => dispatch(clearOrderUpdated())
// //             });
// //             return;
// //         }

// //         if (error) {
// //             toast(error, {
// //                 position: toast.POSITION.BOTTOM_CENTER,
// //                 type: 'error',
// //                 onOpen: () => { dispatch(clearError()); }
// //             });
// //             return;
// //         }

// //         dispatch(orderDetailAction(orderId));
// //     }, [isOrderUpdated, error, dispatch, orderId]);

// //     useEffect(() => {
// //         if (orderDetail._id) {
// //             setOrderStatus(orderDetail.orderStatus);
// //             setTrackingNumber(orderDetail.trackingInfo?.trackingNumber || "");
// //             setShippingProvider(orderDetail.trackingInfo?.shippingProvider || "");
// //             setCurrentTrackingStatus(orderDetail.trackingInfo?.currentStatus || "Not Shipped");
// //         }
// //     }, [orderDetail]);

// //     return (
// //         <div className="row">
// //             <div className="col-12 col-md-2">
// //                 <Sidebar />
// //             </div>
// //             <div className="col-12 col-md-10">
// //                 <Fragment>
// //                     <div className="row d-flex justify-content-around">
// //                         <div className="col-12 col-lg-8 mt-5 order-details">

// //                             <h1 className="my-5">Order # {orderDetail._id}</h1>

// //                             <h4 className="mb-4">Shipping Info</h4>
// //                             <p><b>Name:</b> {user.name}</p>
// //                             <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
// //                             <p className="mb-4"><b>Address:</b> {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.postalCode}, {shippingInfo.state}, {shippingInfo.country}</p>
// //                             <p><b>Amount:</b> ${totalPrice}</p>

// //                             <hr />

// //                             <h4 className="my-4">Payment</h4>
// //                             <p className={isPaid ? 'greenColor' : 'redColor'}><b>{isPaid ? 'PAID' : 'NOT PAID'}</b></p>

// //                             <h4 className="my-4">Order Status:</h4>
// //                             <p className={orderStatus.includes('Delivered') ? 'greenColor' : 'redColor'}><b>{orderStatus}</b></p>

// //                             <h4 className="my-4">Order Items:</h4>
// //                             <hr />
// //                             <div className="cart-item my-1">
// //                                 {orderItems && orderItems.map(item => (
// //                                     <div className="row my-5" key={item.product}>
// //                                         <div className="col-4 col-lg-2">
// //                                             <img src={item.image} alt={item.name} height="45" width="65" />
// //                                         </div>

// //                                         <div className="col-5 col-lg-5">
// //                                             <Link to={/product/`${item.product}`}>{item.name}</Link>
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
// //                         <div className="col-12 col-lg-3 mt-5">
// //                             <h4 className="my-4">Update Order Status</h4>
// //                             <div className="form-group">
// //                                 <select
// //                                     className="form-control"
// //                                     onChange={e => setOrderStatus(e.target.value)}
// //                                     value={orderStatus}
// //                                     name="status"
// //                                 >
// //                                     <option value="Processing">Processing</option>
// //                                     <option value="Shipped">Shipped</option>
// //                                     <option value="Delivered">Delivered</option>
// //                                 </select>
// //                             </div>

// //                             <h4 className="my-4">Tracking Information</h4>
// //                             <div className="form-group">
// //                                 <label htmlFor="trackingNumber">Tracking Number</label>
// //                                 <input
// //                                     type="text"
// //                                     className="form-control"
// //                                     id="trackingNumber"
// //                                     value={trackingNumber}
// //                                     onChange={(e) => setTrackingNumber(e.target.value)}
// //                                 />
// //                             </div>

// //                             <div className="form-group">
// //                                 <label htmlFor="shippingProvider">Shipping Provider</label>
// //                                 <input
// //                                     type="text"
// //                                     className="form-control"
// //                                     id="shippingProvider"
// //                                     value={shippingProvider}
// //                                     onChange={(e) => setShippingProvider(e.target.value)}
// //                                 />
// //                             </div>

// //                             <div className="form-group">
// //                                 <label htmlFor="trackingStatus">Current Tracking Status</label>
// //                                 <input
// //                                     type="text"
// //                                     className="form-control"
// //                                     id="trackingStatus"
// //                                     value={currentTrackingStatus}
// //                                     onChange={(e) => setCurrentTrackingStatus(e.target.value)}
// //                                 />
// //                             </div>

// //                             <button
// //                                 disabled={loading}
// //                                 onClick={submitHandler}
// //                                 className="btn btn-primary btn-block"
// //                             >
// //                                 Update Order
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </Fragment>
// //             </div>
// //         </div>
// //     );
// // }



import { Fragment, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { orderDetail as orderDetailAction, updateOrder } from "../../actions/orderActions";
import { toast } from "react-toastify";
import { clearOrderUpdated, clearError } from "../../slices/orderSlice";
import { Link } from "react-router-dom";

export default function UpdateOrder() {
    const { loading, isOrderUpdated, error, orderDetail } = useSelector(state => state.orderState);
    const { user = {}, orderItems = [], shippingInfo = {}, totalPrice = 0, paymentInfo = {}, trackingInfo = {} } = orderDetail;
    const isPaid = paymentInfo.status === 'succeeded' ? true : false;
    const [orderStatus, setOrderStatus] = useState("Processing");
    const [trackingNumber, setTrackingNumber] = useState(trackingInfo?.trackingNumber || "");
    const [shippingProvider, setShippingProvider] = useState(trackingInfo?.shippingProvider || "");
    const [currentTrackingStatus, setCurrentTrackingStatus] = useState(trackingInfo?.currentStatus || "Not Shipped");
    const { id: orderId } = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        
        // Prepare the order data with tracking information
        const orderData = {
            orderStatus,
            trackingInfo: {
                trackingNumber,
                shippingProvider,
                currentStatus: currentTrackingStatus
            }
        };
        dispatch(updateOrder(orderId, orderData));
    };

    useEffect(() => {
        if (isOrderUpdated) {
            toast('Order Updated Successfully!', {
                type: 'success',
                position: toast.POSITION.BOTTOM_CENTER,
                onOpen: () => dispatch(clearOrderUpdated())
            });
            return;
        }

        if (error) {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: () => { dispatch(clearError()); }
            });
            return;
        }

        dispatch(orderDetailAction(orderId));
    }, [isOrderUpdated, error, dispatch, orderId]);

    useEffect(() => {
        if (orderDetail._id) {
            setOrderStatus(orderDetail.orderStatus);
            setTrackingNumber(orderDetail.trackingInfo?.trackingNumber || "");
            setShippingProvider(orderDetail.trackingInfo?.shippingProvider || "");
            setCurrentTrackingStatus(orderDetail.trackingInfo?.currentStatus || "Not Shipped");
        }
    }, [orderDetail]);

    return (
        <div className="row">
            <div className="col-12 col-md-2">
                <Sidebar />
            </div>
            <div className="col-12 col-md-10">
                <Fragment>
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 col-lg-8 mt-5 order-details">

                            <h1 className="my-5">Order # {orderDetail._id}</h1>

                            <h4 className="mb-4">Shipping Info</h4>
                            <p><b>Name:</b> {user.name}</p>
                            <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
                            <p className="mb-4"><b>Address:</b> {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.postalCode}, {shippingInfo.state}, {shippingInfo.country}</p>
                            <p><b>Amount:</b> ₹{totalPrice}</p>

                            <hr />

                            <h4 className="my-4">Payment</h4>
                            <p className={isPaid ? 'greenColor' : 'redColor'}><b>{isPaid ? 'PAID' : 'NOT PAID'}</b></p>

                            <h4 className="my-4">Order Status:</h4>
                            <p className={orderStatus.includes('Delivered') ? 'greenColor' : 'redColor'}><b>{orderStatus}</b></p>

                            <h4 className="my-4">Order Items:</h4>

                            <hr />
                            <div className="cart-item my-1">
                                {orderItems && orderItems.map(item => (
                                    <div className="row my-5" key={item.product}>
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
                        <div className="col-12 col-lg-3 mt-5">
                            <h4 className="my-4">Update Order Status</h4>
                            <div className="form-group">
                                <select
                                    className="form-control"
                                    onChange={e => setOrderStatus(e.target.value)}
                                    value={orderStatus}
                                    name="status"
                                >
                                    <option value="Processing">Processing</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                </select>
                            </div>

                            <h4 className="my-4">Tracking Information</h4>
                            <div className="form-group">
                                <label htmlFor="trackingNumber">Tracking Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="trackingNumber"
                                    value={trackingNumber}
                                    onChange={(e) => setTrackingNumber(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="shippingProvider">Shipping Provider</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="shippingProvider"
                                    value={shippingProvider}
                                    onChange={(e) => setShippingProvider(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="trackingStatus">Current Tracking Status</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="trackingStatus"
                                    value={currentTrackingStatus}
                                    onChange={(e) => setCurrentTrackingStatus(e.target.value)}
                                />
                            </div>

                            <button
                                disabled={loading}
                                onClick={submitHandler}
                                className="btn btn-primary btn-block"
                            >
                                Update Order
                            </button>
                        </div>
                    </div>
                </Fragment>
            </div>
        </div>
    );
}

