// const catchAsyncError = require('../middlewares/catchAsyncError');
// const Order = require('../models/orderModel');
// const Product = require('../models/productModel');
// const ErrorHandler = require('../utils/errorHandler');
// //Create New Order - api/v1/order/new
// exports.newOrder =  catchAsyncError( async (req, res, next) => {
//     const {
//         orderItems,
//         shippingInfo,
//         itemsPrice,
//         taxPrice,
//         shippingPrice,
//         totalPrice,
//         paymentInfo
//     } = req.body;

//     const order = await Order.create({
//         orderItems,
//         shippingInfo,
//         itemsPrice,
//         taxPrice,
//         shippingPrice,
//         totalPrice,
//         paymentInfo,
//         paidAt: Date.now(),
//         user: req.user.id
//     })

//     res.status(200).json({
//         success: true,
//         order
//     })
// })

// //Get Single Order - api/v1/order/:id
// exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
//     const order = await Order.findById(req.params.id).populate('user', 'name email');
//     if(!order) {
//         return next(new ErrorHandler(`Order not found with this id: ${req.params.id}`, 404))
//     }

//     res.status(200).json({
//         success: true,
//         order
//     })
// })

// //Get Loggedin User Orders - /api/v1/myorders
// exports.myOrders = catchAsyncError(async (req, res, next) => {
//     const orders = await Order.find({user: req.user.id});

//     res.status(200).json({
//         success: true,
//         orders
//     })
// })

// //Admin: Get All Orders - api/v1/orders
// exports.orders = catchAsyncError(async (req, res, next) => {
//     const orders = await Order.find();

//     let totalAmount = 0;

//     orders.forEach(order => {
//         totalAmount += order.totalPrice
//     })

//     res.status(200).json({
//         success: true,
//         totalAmount,
//         orders
//     })
// })

// //Admin: Update Order / Order Status - api/v1/order/:id
// exports.updateOrder =  catchAsyncError(async (req, res, next) => {
//     const order = await Order.findById(req.params.id);

//     if(order.orderStatus == 'Delivered') {
//         return next(new ErrorHandler('Order has been already delivered!', 400))
//     }
//     //Updating the product stock of each order item
//     order.orderItems.forEach(async orderItem => {
//         await updateStock(orderItem.product, orderItem.quantity)
//     })

//     order.orderStatus = req.body.orderStatus;
//     order.deliveredAt = Date.now();
//     await order.save();

//     res.status(200).json({
//         success: true
//     })
    
// });

// async function updateStock (productId, quantity){
//     const product = await Product.findById(productId);
//     product.stock = product.stock - quantity;
//     product.save({validateBeforeSave: false})
// }

// //Admin: Delete Order - api/v1/order/:id
// exports.deleteOrder = catchAsyncError(async (req, res, next) => {
//     const order = await Order.findById(req.params.id);
//     if(!order) {
//         return next(new ErrorHandler(`Order not found with this id: ${req.params.id}`, 404))
//     }

//     await order.remove();
//     res.status(200).json({
//         success: true
//     })
// })


// // const catchAsyncError = require('../middlewares/catchAsyncError');
// // const Order = require('../models/orderModel');
// // const Product = require('../models/productModel');
// // const ErrorHandler = require('../utils/errorHandler');

// // // Create New Order - api/v1/order/new
// // exports.newOrder = catchAsyncError(async (req, res, next) => {
// //     const {
// //         orderItems,
// //         shippingInfo,
// //         itemsPrice,
// //         taxPrice,
// //         shippingPrice,
// //         totalPrice,
// //         paymentInfo,
// //         trackingInfo
// //     } = req.body;

// //     const order = await Order.create({
// //         orderItems,
// //         shippingInfo,
// //         itemsPrice,
// //         taxPrice,
// //         shippingPrice,
// //         totalPrice,
// //         paymentInfo,
// //         paidAt: Date.now(),
// //         trackingInfo,
// //         user: req.user.id
// //     });

// //     // Update stock for each product
// //     orderItems.forEach(async (item) => {
// //         await updateStock(item.product, item.quantity);
// //     });

// //     res.status(200).json({
// //         success: true,
// //         order
// //     });
// // });

// // // Get Single Order - api/v1/order/:id
// // exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
// //     const order = await Order.findById(req.params.id).populate('user', 'name email');
    
// //     if (!order) {
// //         return next(new ErrorHandler(`Order not found with this id: ${req.params.id}`, 404));
// //     }

// //     res.status(200).json({
// //         success: true,
// //         order
// //     });
// // });

// // // Get Logged-in User Orders - /api/v1/myorders
// // exports.myOrders = catchAsyncError(async (req, res, next) => {
// //     const orders = await Order.find({ user: req.user.id });

// //     res.status(200).json({
// //         success: true,
// //         orders
// //     });
// // });

// // // Admin: Get All Orders - api/v1/orders
// // exports.orders = catchAsyncError(async (req, res, next) => {
// //     const orders = await Order.find();

// //     let totalAmount = 0;

// //     orders.forEach(order => {
// //         totalAmount += order.totalPrice;
// //     });

// //     res.status(200).json({
// //         success: true,
// //         totalAmount,
// //         orders
// //     });
// // });

// // // Admin: Update Order / Order Status - api/v1/order/:id
// // exports.updateOrder = catchAsyncError(async (req, res, next) => {
// //     const order = await Order.findById(req.params.id);

// //     if (!order) {
// //         return next(new ErrorHandler(`Order not found with this id: ${req.params.id}`, 404));
// //     }

// //     if (order.orderStatus === 'Delivered') {
// //         return next(new ErrorHandler('Order has already been delivered!', 400));
// //     }

// //     // Update the order status
// //     order.orderStatus = req.body.orderStatus || order.orderStatus;

// //     // Update tracking information if provided
// //     if (req.body.trackingInfo) {
// //         order.trackingInfo = {
// //             trackingNumber: req.body.trackingInfo.trackingNumber || order.trackingInfo.trackingNumber,
// //             shippingProvider: req.body.trackingInfo.shippingProvider || order.trackingInfo.shippingProvider,
// //             currentStatus: req.body.trackingInfo.currentStatus || order.trackingInfo.currentStatus
// //         };
// //     }

// //     // If order is marked as shipped or delivered, update stock
// //     if (req.body.orderStatus === 'Shipped' || req.body.orderStatus === 'Delivered') {
// //         order.orderItems.forEach(async (item) => {
// //             await updateStock(item.product, item.quantity);
// //         });
// //     }

// //     await order.save();

// //     res.status(200).json({
// //         success: true,
// //         order
// //     });
// // });

// // async function updateStock(productId, quantity) {
// //     const product = await Product.findById(productId);
// //     if (!product) {
// //         throw new ErrorHandler(`Product not found with id: ${productId}`, 404);
// //     }
// //     product.stock -= quantity;
// //     await product.save({ validateBeforeSave: false });
// // }

// // // Admin: Delete Order - api/v1/order/:id
// // exports.deleteOrder = catchAsyncError(async (req, res, next) => {
// //     const order = await Order.findById(req.params.id);
// //     if (!order) {
// //         return next(new ErrorHandler(`Order not found with this id: ${req.params.id}`, 404));
// //     }

// //     await order.remove();
// //     res.status(200).json({
// //         success: true,
// //         message: 'Order deleted successfully'
// //     });
// // });





// // const catchAsyncError = require('../middlewares/catchAsyncError');
// // const Order = require('../models/orderModel');
// // const Product = require('../models/productModel');
// // const ErrorHandler = require('../utils/errorHandler');

// // // Create New Order - api/v1/order/new
// // exports.newOrder = catchAsyncError(async (req, res, next) => {
// //     const {
// //         orderItems,
// //         shippingInfo,
// //         itemsPrice,
// //         taxPrice,
// //         shippingPrice,
// //         totalPrice,
// //         paymentInfo,
// //         trackingInfo
// //     } = req.body;

// //     const order = await Order.create({
// //         orderItems,
// //         shippingInfo,
// //         itemsPrice,
// //         taxPrice,
// //         shippingPrice,
// //         totalPrice,
// //         paymentInfo,
// //         paidAt: Date.now(),
// //         trackingInfo,
// //         user: req.user.id
// //     });

// //     res.status(200).json({
// //         success: true,
// //         order
// //     });
// // });

// // // Get Single Order - api/v1/order/:id
// // exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
// //     const order = await Order.findById(req.params.id).populate('user', 'name email');
// //     if (!order) {
// //         return next(new ErrorHandler(`Order not found with this id: ${req.params.id}`, 404));
// //     }

// //     res.status(200).json({
// //         success: true,
// //         order
// //     });
// // });

// // // Get Logged-in User Orders - /api/v1/myorders
// // exports.myOrders = catchAsyncError(async (req, res, next) => {
// //     const orders = await Order.find({ user: req.user.id });

// //     res.status(200).json({
// //         success: true,
// //         orders
// //     });
// // });

// // // Admin: Get All Orders - api/v1/orders
// // exports.orders = catchAsyncError(async (req, res, next) => {
// //     const orders = await Order.find();

// //     let totalAmount = 0;

// //     orders.forEach(order => {
// //         totalAmount += order.totalPrice;
// //     });

// //     res.status(200).json({
// //         success: true,
// //         totalAmount,
// //         orders
// //     });
// // });

// // // Admin: Update Order / Order Status - api/v1/order/:id
// // exports.updateOrder = catchAsyncError(async (req, res, next) => {
// //     const order = await Order.findById(req.params.id);

// //     if (!order) {
// //         return next(new ErrorHandler(`Order not found with this id: ${req.params.id}`, 404));
// //     }

// //     if (order.orderStatus === 'Delivered') {
// //         return next(new ErrorHandler('Order has been already delivered!', 400));
// //     }

// //     // Update the order status
// //     order.orderStatus = req.body.orderStatus;

// //     // Update tracking information if provided
// //     if (req.body.trackingInfo) {
// //         order.trackingInfo.trackingNumber = req.body.trackingInfo.trackingNumber || order.trackingInfo.trackingNumber;
// //         order.trackingInfo.shippingProvider = req.body.trackingInfo.shippingProvider || order.trackingInfo.shippingProvider;
// //         order.trackingInfo.currentStatus = req.body.trackingInfo.currentStatus || order.trackingInfo.currentStatus;
// //     }

// //     await order.save();

// //     res.status(200).json({
// //         success: true,
// //         order
// //     });
// // });


// // async function updateStock(productId, quantity) {
// //     const product = await Product.findById(productId);
// //     product.stock -= quantity;
// //     await product.save({ validateBeforeSave: false });
// // }

// // // Admin: Delete Order - api/v1/order/:id
// // exports.deleteOrder = catchAsyncError(async (req, res, next) => {
// //     const order = await Order.findById(req.params.id);
// //     if (!order) {
// //         return next(new ErrorHandler(`Order not found with this id: ${req.params.id}`, 404));
// //     }

// //     await order.remove();
// //     res.status(200).json({
// //         success: true
// //     });
// // });





const catchAsyncError = require('../middlewares/catchAsyncError');

const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');

// Create a new order - api/v1/order/new
exports.newOrder = catchAsyncError(async (req, res, next) => {
    const { orderItems, shippingInfo, itemsPrice, taxPrice, shippingPrice, totalPrice, paymentInfo, trackingInfo } = req.body;

    const order = await Order.create({
        orderItems, shippingInfo, itemsPrice, taxPrice, shippingPrice, totalPrice, paymentInfo,
        paidAt: Date.now(), trackingInfo, user: req.user.id
    });

    res.status(200).json({ success: true, order });
});

// Get single order - api/v1/order/:id
exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');
    if (!order) {
        return next(new ErrorHandler(`Order not found with id: ${req.params.id}`, 404));
    }
    res.status(200).json({ success: true, order });
});

// Get logged-in user's orders - /api/v1/myorders
exports.myOrders = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find({ user: req.user.id });
    res.status(200).json({ success: true, orders });
});

// Admin: Get all orders - api/v1/admin/orders
exports.orders = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find();
    let totalAmount = 0;
    orders.forEach(order => { totalAmount += order.totalPrice; });
    res.status(200).json({ success: true, totalAmount, orders });
});

// Admin: Update order status/tracking - api/v1/admin/order/:id
exports.updateOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if (!order) {
        return next(new ErrorHandler(`Order not found with id: ${req.params.id}`, 404));
    }
    if (order.orderStatus === 'Delivered') {
        return next(new ErrorHandler('Order has already been delivered!', 400));
    }
    // Update order status and tracking info
    order.orderStatus = req.body.orderStatus;
    if (req.body.trackingInfo) {
        order.trackingInfo.trackingNumber = req.body.trackingInfo.trackingNumber || order.trackingInfo.trackingNumber;
        order.trackingInfo.shippingProvider = req.body.trackingInfo.shippingProvider || order.trackingInfo.shippingProvider;
        order.trackingInfo.currentStatus = req.body.trackingInfo.currentStatus || order.trackingInfo.currentStatus;
    }
    await order.save();
    res.status(200).json({ success: true, order });
});


// Admin: Delete an order - api/v1/admin/order/:id
exports.deleteOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if (!order) {
        return next(new ErrorHandler(`Order not found with id: ${req.params.id}`, 404));
    }
    await order.remove();
    res.status(200).json({ success: true });
});