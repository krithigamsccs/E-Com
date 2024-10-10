// import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../actions/productActions";
// import Loader from "./layouts/Loader";
// import MetaData from "./layouts/MetaData";
// import Product from "./product/Product";
// import  {toast} from 'react-toastify';
// import Pagination from 'react-js-pagination';

// export  default function Home(){
//     const dispatch = useDispatch();
//     const {products, loading, error, productsCount, resPerPage} =    useSelector((state) => state.productsState)
//     const [currentPage, setCurrentPage] = useState(1);
 
//     const setCurrentPageNo = (pageNo) =>{

//         setCurrentPage(pageNo)
       
//     }

//     useEffect(()=>{
//         if(error) {
//             return toast.error(error,{
//                 position: toast.POSITION.BOTTOM_CENTER
//             })
//         }
//         dispatch(getProducts(null, null, null, null, currentPage)) 
//     }, [error, dispatch, currentPage])


//     return (
//         <Fragment>
//             {loading ? <Loader/>:
//                 <Fragment>
//                     <MetaData title={'Buy Best Products'} />
//                     <h1 id="products_heading">Latest Products</h1>
//                      <section id="products" className="container mt-5">
//                         <div className="row">
//                             { products && products.map(product => (
//                                 <Product col={3} key={product._id}  product={product}/>
//                             ))}
                        
//                         </div>
//                     </section> 




//                     {productsCount > 0 && productsCount > resPerPage?
//                     <div className="d-flex justify-content-center mt-5">
//                            <Pagination 
//                                 activePage={currentPage}
//                                 onChange={setCurrentPageNo}
//                                 totalItemsCount={productsCount}
//                                 itemsCountPerPage={resPerPage}
//                                 nextPageText={'Next'}
//                                 firstPageText={'First'}
//                                 lastPageText={'Last'}
//                                 itemClass={'page-item'}
//                                 linkClass={'page-link'}
//                            />     
//                     </div> : null } 
//                 </Fragment>
//            }
//         </Fragment>

//     )
// }














// import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../actions/productActions";
// import Loader from "./layouts/Loader";
// import MetaData from "./layouts/MetaData";
// import Product from "./product/Product";
// import { toast } from 'react-toastify';
// import Pagination from 'react-js-pagination';

// export default function Home() {
//     const dispatch = useDispatch();
//     const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [showWelcome, setShowWelcome] = useState(true); // New state to manage welcome page

//     const setCurrentPageNo = (pageNo) => {
//         setCurrentPage(pageNo);
//     };

//     const handleStart = () => {
//         setShowWelcome(false); // Hide the welcome page when user clicks "Start"
//     };

//     useEffect(() => {
//         if (error) {
//             return toast.error(error, {
//                 position: toast.POSITION.BOTTOM_CENTER,
//             });
//         }
//         if (!showWelcome) { // Fetch products only after the welcome page is dismissed
//             dispatch(getProducts(null, null, null, null, currentPage));
//         }
//     }, [error, dispatch, currentPage, showWelcome]);

//     // Welcome page component
//     const WelcomePage = () => (
//         <div className="welcome-page">
//             <img src="/images/logo.png" alt="Welcome Logo" className="welcome-logo" />
//             <h1>Welcome to Our Store</h1>
//             <button className="btn btn-primary" onClick={handleStart}>Start Shopping</button>
//         </div>
//     );

//     return (
//         <Fragment>
//             {showWelcome ? (
//                 <WelcomePage /> // Render the welcome page first
//             ) : (
//                 <Fragment>
//                     {loading ? <Loader /> :
//                         <Fragment>
//                             <MetaData title={'Buy Best Products'} />
//                             <h1 id="products_heading">Latest Products</h1>
//                             <section id="products" className="container mt-5">
//                                 <div className="row">
//                                     {products && products.map(product => (
//                                         <Product col={3} key={product._id} product={product} />
//                                     ))}
//                                 </div>
//                             </section>

//                             {productsCount > 0 && productsCount > resPerPage ? (
//                                 <div className="d-flex justify-content-center mt-5">
//                                     <Pagination
//                                         activePage={currentPage}
//                                         onChange={setCurrentPageNo}
//                                         totalItemsCount={productsCount}
//                                         itemsCountPerPage={resPerPage}
//                                         nextPageText={'Next'}
//                                         firstPageText={'First'}
//                                         lastPageText={'Last'}
//                                         itemClass={'page-item'}
//                                         linkClass={'page-link'}
//                                     />
//                                 </div>
//                             ) : null}
//                         </Fragment>
//                     }
//                 </Fragment>
//             )}
//         </Fragment>
//     );
// }










// import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../actions/productActions";
// import Loader from "./layouts/Loader";
// import MetaData from "./layouts/MetaData";
// import Product from "./product/Product";
// import { toast } from 'react-toastify';
// import Pagination from 'react-js-pagination';

// export default function Home() {
//     const dispatch = useDispatch();
//     const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [showWelcome, setShowWelcome] = useState(true); // State to manage welcome page visibility

//     const setCurrentPageNo = (pageNo) => {
//         setCurrentPage(pageNo);
//     };

//     const handleStart = () => {
//         setShowWelcome(false); // Hide welcome page when "Start" button is clicked
//     };

//     useEffect(() => {
//         if (error) {
//             return toast.error(error, {
//                 position: toast.POSITION.BOTTOM_CENTER,
//             });
//         }
//         if (!showWelcome) { // Fetch products only after the welcome page is dismissed
//             dispatch(getProducts(null, null, null, null, currentPage));
//         }
//     }, [error, dispatch, currentPage, showWelcome]);

//     // Welcome page component with full-width laptop image
//     const WelcomePage = () => (
//         <div className="welcome-page" style={{ textAlign: "center", position: "relative" }}>
//             <img
//                 src="/images/logo.png" // Replace with the path to your laptop image
//                 alt="Laptop Banner"
//                 style={{
//                     width: "100%",
//                     height: "auto",
//                     maxHeight: "90vh", // To ensure the image does not exceed the viewport height
//                     objectFit: "cover",
//                 }}
//             />
//             <div
//                 style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     backgroundColor: "rgba(0, 0, 0, 0.5)",
//                     padding: "20px",
//                     borderRadius: "10px",
//                 }}
//             >
//                 <h1 style={{ color: "#fff" }}>Welcome to Our Store</h1>
//                 <button className="btn btn-primary" onClick={handleStart}>Start Shopping</button>
//             </div>
//         </div>
//     );

//     return (
//         <Fragment>
//             {showWelcome ? (
//                 <WelcomePage /> // Render the welcome page first
//             ) : (
//                 <Fragment>
//                     {loading ? <Loader /> :
//                         <Fragment>
//                             <MetaData title={'Buy Best Products'} />
//                             <h1 id="products_heading">Latest Products</h1>
//                             <section id="products" className="container mt-5">
//                                 <div className="row">
//                                     {products && products.map(product => (
//                                         <Product col={3} key={product._id} product={product} />
//                                     ))}
//                                 </div>
//                             </section>

//                             {productsCount > 0 && productsCount > resPerPage ? (
//                                 <div className="d-flex justify-content-center mt-5">
//                                     <Pagination
//                                         activePage={currentPage}
//                                         onChange={setCurrentPageNo}
//                                         totalItemsCount={productsCount}
//                                         itemsCountPerPage={resPerPage}
//                                         nextPageText={'Next'}
//                                         firstPageText={'First'}
//                                         lastPageText={'Last'}
//                                         itemClass={'page-item'}
//                                         linkClass={'page-link'}
//                                     />
//                                 </div>
//                             ) : null}
//                         </Fragment>
//                     }
//                 </Fragment>
//             )}
//         </Fragment>
//     );
// }



// import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../actions/productActions";
// import Loader from "./layouts/Loader";
// import MetaData from "./layouts/MetaData";
// import Product from "./product/Product";
// import { toast } from 'react-toastify';
// import Pagination from 'react-js-pagination';

// export default function Home() {
//     const dispatch = useDispatch();
//     const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [showWelcome, setShowWelcome] = useState(true); // State to manage welcome page visibility

//     const setCurrentPageNo = (pageNo) => {
//         setCurrentPage(pageNo);
//     };

//     const handleStart = () => {
//         setShowWelcome(false); // Hide welcome page when "Start" button is clicked
//     };

//     useEffect(() => {
//         if (error) {
//             return toast.error(error, {
//                 position: toast.POSITION.BOTTOM_CENTER,
//             });
//         }
//         if (!showWelcome) { // Fetch products only after the welcome page is dismissed
//             dispatch(getProducts(null, null, null, null, currentPage));
//         }
//     }, [error, dispatch, currentPage, showWelcome]);

//     // Welcome page component with full-width laptop image
//     const WelcomePage = () => (
//         <div className="welcome-page" style={{ textAlign: "center", position: "relative" }}>
//             <img
//                 src="/images/e_2.avif" // Replace with the path to your laptop image
//                 alt="Laptop Banner"
//                 style={{
//                     width: "100%",
//                     height: "100%",
//                     // maxHeight: "90vh", // To ensure the image does not exceed the viewport height
//                     objectFit: "cover",
//                 }}
//             />
//             <div
//                 style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     backgroundColor: "rgba(0, 0, 0, 0.5)",
//                     padding: "20px",
//                     borderRadius: "10px",
//                 }}
//             >
//                 <h1 style={{ color: "#fff" }}>Welcome to Our Store</h1>
//                 <button className="btn btn-primary" onClick={handleStart}>Start Shopping</button>
//             </div>
//         </div>
//     );

//     // Categories section component
//     const CategoriesSection = () => (
//         <section id="categories" className="container mt-5">
//             <h2 className="text-center">Categories</h2>
//             <div className="row">
//                 <div className="col-md-3">
//                     <div className="category-box text-center">
//                         <img src="/images/R.png" alt="Electronics" className="img-fluid" />
//                         <h3>Electronics</h3>
//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="category-box text-center">
//                         <img src="/images/shoes.jpeg" alt="Fashion" className="img-fluid" />
//                         <h3>Shoes</h3>
//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="category-box text-center">
//                         <img src="/images/toy_1.jpeg" height="90%" alt="Home Appliances" className="img-fluid" />
//                         <h3>Toy</h3>
//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="category-box text-center">
//                         <img src="/images/book_1.jpeg" alt="Books" className="img-fluid" />
//                         <h3>Books</h3>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );

//     return (
//         <Fragment>
//             {showWelcome ? (
//                 <WelcomePage /> // Render the welcome page first
//             ) : (
//                 <Fragment>
//                     {loading ? <Loader /> :
//                         <Fragment>
//                             <MetaData title={'Buy Best Products'} />
                            
//                             {/* Categories Section */}
//                             <CategoriesSection />

//                             <h1 id="products_heading" className="mt-5">Latest Products</h1>
//                             <section id="products" className="container">
//                                 <div className="row">
//                                     {products && products.map(product => (
//                                         <Product col={3} key={product._id} product={product} />
//                                     ))}
//                                 </div>
//                             </section>

//                             {productsCount > 0 && productsCount > resPerPage ? (
//                                 <div className="d-flex justify-content-center mt-5">
//                                     <Pagination
//                                         activePage={currentPage}
//                                         onChange={setCurrentPageNo}
//                                         totalItemsCount={productsCount}
//                                         itemsCountPerPage={resPerPage}
//                                         nextPageText={'Next'}
//                                         firstPageText={'First'}
//                                         lastPageText={'Last'}
//                                         itemClass={'page-item'}
//                                         linkClass={'page-link'}
//                                     />     
//                                 </div>
//                             ) : null}
//                         </Fragment>
//                     }
//                 </Fragment>
//             )}
//         </Fragment>
//     );
// }



// import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../actions/productActions";
// import Loader from "./layouts/Loader";
// import MetaData from "./layouts/MetaData";
// import Product from "./product/Product";
// import { toast } from 'react-toastify';
// import Pagination from 'react-js-pagination';

// export default function Home() {
//     const dispatch = useDispatch();
//     const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [showWelcome, setShowWelcome] = useState(true); // State to manage welcome page visibility

//     const setCurrentPageNo = (pageNo) => {
//         setCurrentPage(pageNo);
//     };

//     const handleStart = () => {
//         setShowWelcome(false); // Hide welcome page when "Start" button is clicked
//     };

//     useEffect(() => {
//         if (error) {
//             return toast.error(error, {
//                 position: toast.POSITION.BOTTOM_CENTER,
//             });
//         }
//         if (!showWelcome) { // Fetch products only after the welcome page is dismissed
//             dispatch(getProducts(null, null, null, null, currentPage));
//         }
//     }, [error, dispatch, currentPage, showWelcome]);

//     // Welcome page component with full-width image that covers the entire viewport
//     const WelcomePage = () => (
//         <div className="welcome-page" style={{ textAlign: "center", position: "relative", height: "100vh", overflow: "hidden" }}>
//             <img
//                 src="/images/e_2.avif" // Replace with the path to your image
//                 alt="Laptop Banner"
//                 style={{
//                     width: "100%",
//                     height: "100vh", // Ensure it covers the full height of the viewport
//                     objectFit: "cover", // Cover the whole viewport
//                 }}
//             />
//             <div
//                 style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     backgroundColor: "rgba(0, 0, 0, 0.5)",
//                     padding: "20px",
//                     borderRadius: "10px",
//                 }}
//             >
//                 <h1 style={{ color: "#fff" }}>Welcome to Our Store</h1>
//                 <button className="btn btn-primary" onClick={handleStart}>Start Shopping</button>
//             </div>
//         </div>
//     );

//     return (
//         <Fragment>
//             {showWelcome ? (
//                 <WelcomePage /> // Render the welcome page first
//             ) : (
//                 <Fragment>
//                     {loading ? <Loader /> :
//                         <Fragment>
//                             <MetaData title={'Buy Best Products'} />

//                             <h1 id="products_heading" className="mt-5">Latest Products</h1>
//                             <section id="products" className="container">
//                                 <div className="row">
//                                     {products && products.map(product => (
//                                         <Product col={3} key={product._id} product={product} />
//                                     ))}
//                                 </div>
//                             </section>

//                             {productsCount > 0 && productsCount > resPerPage ? (
//                                 <div className="d-flex justify-content-center mt-5">
//                                     <Pagination
//                                         activePage={currentPage}
//                                         onChange={setCurrentPageNo}
//                                         totalItemsCount={productsCount}
//                                         itemsCountPerPage={resPerPage}
//                                         nextPageText={'Next'}
//                                         firstPageText={'First'}
//                                         lastPageText={'Last'}
//                                         itemClass={'page-item'}
//                                         linkClass={'page-link'}
//                                     />     
//                                 </div>
//                             ) : null}
//                         </Fragment>
//                     }
//                 </Fragment>
//             )}
//         </Fragment>
//     );
// }


// //krithiga
// import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../actions/productActions";
// import Loader from "./layouts/Loader";
// import MetaData from "./layouts/MetaData";
// import Product from "./product/Product";
// import { toast } from 'react-toastify';
// import Pagination from 'react-js-pagination';

// export default function Home() {
//     const dispatch = useDispatch();
//     const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [showWelcome, setShowWelcome] = useState(true); // State to manage welcome page visibility

//     const setCurrentPageNo = (pageNo) => {
//         setCurrentPage(pageNo);
//     };

//     const handleStart = () => {
//         setShowWelcome(false); // Hide welcome page when "Start" button is clicked
//     };

//     useEffect(() => {
//         if (error) {
//             return toast.error(error, {
//                 position: toast.POSITION.BOTTOM_CENTER,
//             });
//         }
//         if (!showWelcome) { // Fetch products only after the welcome page is dismissed
//             dispatch(getProducts(null, null, null, null, currentPage));
//         }
//     }, [error, dispatch, currentPage, showWelcome]);


//     const WelcomePage = () => (
//         <div
//             className="welcome-page"
//             style={{
//                 textAlign: "center",
//                 position: "relative",
//                 height: "100vh", // Ensure full height of the viewport
//                 width: "100vw",  // Ensure full width of the viewport
//                 overflow: "hidden",
//                 margin: 0,
//                 padding: 0,
//             }}
//         >
//             <img
//                 src="/images/banner.jpg" // Replace with the path to your image
//                 alt="Laptop Banner"
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",   // Ensures the image spans the full width
//                     height: "100%",  // Ensures the image spans the full height
//                     objectFit: "cover",  // Ensures the image covers the viewport while maintaining aspect ratio
//                     objectPosition: "center", // Centers the image
//                 }}
//             />
//             <div
//                 style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     backgroundColor: "rgba(0, 0, 0, 0.5)",
//                     padding: "20px",
//                     borderRadius: "10px",
//                     zIndex: 2, // Ensure the text is above the image
//                 }}
//             >
//                 <h1 style={{ color: "#fff" }}>Welcome to Our Store</h1>
//                 <button className="btn btn-primary" onClick={handleStart}>
//                     Start Shopping
//                 </button>
//             </div>
//         </div>
//     );
    
    



//     return (
//         <Fragment>
//             {showWelcome ? (
//                 <WelcomePage /> // Render the welcome page first
//             ) : (
//                 <Fragment>
//                     {loading ? <Loader /> :
//                         <Fragment>
//                             <MetaData title={'Buy Best Products'} />

//                             <h1 id="products_heading" className="mt-5">Latest Products</h1>
//                             <section id="products" className="container">
//                                 <div className="row">
//                                     {products && products.map(product => (
//                                         <Product col={3} key={product._id} product={product} />
//                                     ))}
//                                 </div>
//                             </section>

//                             {productsCount > 0 && productsCount > resPerPage ? (
//                                 <div className="d-flex justify-content-center mt-5">
//                                     <Pagination
//                                         activePage={currentPage}
//                                         onChange={setCurrentPageNo}
//                                         totalItemsCount={productsCount}
//                                         itemsCountPerPage={resPerPage}
//                                         nextPageText={'Next'}
//                                         firstPageText={'First'}
//                                         lastPageText={'Last'}
//                                         itemClass={'page-item'}
//                                         linkClass={'page-link'}
//                                     />     
//                                 </div>
//                             ) : null}
//                         </Fragment>
//                     }
//                 </Fragment>
//             )}
//         </Fragment>
//     );
// }






// import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../actions/productActions";
// import { getCategories } from "../actions/categoryActions"; 
// import Loader from "./layouts/Loader";
// import MetaData from "./layouts/MetaData";
// import Product from "./product/Product";

// import { toast } from 'react-toastify';
// import Pagination from 'react-js-pagination';

// export default function Home() {
//     const dispatch = useDispatch();
//     const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [showWelcome, setShowWelcome] = useState(true); // State to manage welcome page visibility

//     // Sample categories array (replace with real data or API call if needed)
//     const categories = ["Electronics", "Fashion", "Books", "Home & Kitchen"];

//     const setCurrentPageNo = (pageNo) => {
//         setCurrentPage(pageNo);
//     };

//     const handleStart = () => {
//         setShowWelcome(false); // Hide welcome page when "Start" button is clicked
//     };

//     useEffect(() => {
//         if (error) {
//             return toast.error(error, {
//                 position: toast.POSITION.BOTTOM_CENTER,
//             });
//         }
//         if (!showWelcome) { // Fetch products only after the welcome page is dismissed
//             dispatch(getProducts(null, null, null, null, currentPage));
//         }
//     }, [error, dispatch, currentPage, showWelcome]);

//     const WelcomePage = () => (
//         <div
//             className="welcome-page"
//             style={{
//                 textAlign: "center",
//                 position: "relative",
//                 height: "100vh", // Ensure full height of the viewport
//                 width: "100vw",  // Ensure full width of the viewport
//                 overflow: "hidden",
//                 margin: 0,
//                 padding: 0,
//             }}
//         >
//             <img
//                 src="/images/banner.jpg" // Replace with the path to your image
//                 alt="Laptop Banner"
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",   // Ensures the image spans the full width
//                     height: "100%",  // Ensures the image spans the full height
//                     objectFit: "cover",  // Ensures the image covers the viewport while maintaining aspect ratio
//                     objectPosition: "center", // Centers the image
//                 }}
//             />
//             <div
//                 style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     backgroundColor: "rgba(0, 0, 0, 0.5)",
//                     padding: "20px",
//                     borderRadius: "10px",
//                     zIndex: 2, // Ensure the text is above the image
//                 }}
//             >
//                 <h1 style={{ color: "#fff" }}>Welcome to Our Store</h1>
//                 <button className="btn btn-primary" onClick={handleStart}>
//                     Start Shopping
//                 </button>
//             </div>
//         </div>
//     );

//     return (
//         <Fragment>
//             {showWelcome ? (
//                 <WelcomePage /> // Render the welcome page first
//             ) : (
//                 <Fragment>
//                     {loading ? <Loader /> :
//                         <Fragment>
//                             <MetaData title={'Buy Best Products'} />

//                             <h1 id="products_heading" className="mt-5">Latest Products</h1>

//                             {/* Show categories only on the first page */}
//                             {currentPage === 1 && (
//                                 <section id="categories" className="container my-5">
//                                     <h2>Categories</h2>
//                                     <div className="row">
//                                         {categories.map((category, index) => (
//                                             <div key={index} className="col-3">
//                                                 <div className="category-card">
//                                                     <h4>{category}</h4>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </section>
//                             )}

//                             {/* Products section */}
//                             <section id="products" className="container">
//                                 <div className="row">
//                                     {products && products.map(product => (
//                                         <Product col={3} key={product._id} product={product} />
//                                     ))}
//                                 </div>
//                             </section>

//                             {/* Pagination */}
//                             {productsCount > 0 && productsCount > resPerPage && (
//                                 <div className="d-flex justify-content-center mt-5">
//                                     <Pagination
//                                         activePage={currentPage}
//                                         onChange={setCurrentPageNo}
//                                         totalItemsCount={productsCount}
//                                         itemsCountPerPage={resPerPage}
//                                         nextPageText={'Next'}
//                                         firstPageText={'First'}
//                                         lastPageText={'Last'}
//                                         itemClass={'page-item'}
//                                         linkClass={'page-link'}
//                                     />     
//                                 </div>
//                             )}
//                         </Fragment>
//                     }
//                 </Fragment>
//             )}
//         </Fragment>
//     );
// }





// import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../actions/productActions";
// import Loader from "./layouts/Loader";
// import MetaData from "./layouts/MetaData";
// import Product from "./product/Product";
// import { toast } from 'react-toastify';
// import Pagination from 'react-js-pagination';

// export default function Home() {
//     const dispatch = useDispatch();
//     const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [showWelcome, setShowWelcome] = useState(true); // State to manage welcome page visibility

//     // Sample categories array with images
//     const categories = [
//         {
//             name: "Electronics",
//             image: "/images/R.png" // Replace with actual image path
//         },
//         {
//             name: "Toy",
//             image: "/images/toy_1.jpeg" // Replace with actual image path
//         },
//         {
//             name: "Books",
//             image: "/images/book_1.jpeg" // Replace with actual image path
//         },
//         {
//             name: "Shoes",
//             image: "/images/shoes.jpeg" // Replace with actual image path
//         }
//     ];

//     const setCurrentPageNo = (pageNo) => {
//         setCurrentPage(pageNo);
//     };

//     const handleStart = () => {
//         setShowWelcome(false); // Hide welcome page when "Start" button is clicked
//     };

//     useEffect(() => {
//         if (error) {
//             return toast.error(error, {
//                 position: toast.POSITION.BOTTOM_CENTER,
//             });
//         }
//         if (!showWelcome) { // Fetch products only after the welcome page is dismissed
//             dispatch(getProducts(null, null, null, null, currentPage));
//         }
//     }, [error, dispatch, currentPage, showWelcome]);

//     const WelcomePage = () => (
//         <div
//             className="welcome-page"
//             style={{
//                 textAlign: "center",
//                 position: "relative",
//                 height: "100vh", // Ensure full height of the viewport
//                 width: "100vw",  // Ensure full width of the viewport
//                 overflow: "hidden",
//                 margin: 0,
//                 padding: 0,
//             }}
//         >
//             <img
//                 src="/images/banner2.avif" // Replace with the path to your image
                
//                 alt="Laptop Banner"
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",   // Ensures the image spans the full width
//                     height: "100%",  // Ensures the image spans the full height
//                     objectFit: "cover",  // Ensures the image covers the viewport while maintaining aspect ratio
//                     objectPosition: "center", // Centers the image
//                 }}
//             />
//             <div
//                 style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     backgroundColor: "rgba(0, 0, 0, 0.5)",
//                     padding: "20px",
//                     borderRadius: "10px",
//                     zIndex: 2, // Ensure the text is above the image
//                 }}
//             >
//                 <h1 style={{ color: "#fff" }}>Welcome to Our Store</h1>
//                 <button className="btn btn-primary" onClick={handleStart}>
//                     Start Shopping
//                 </button>
//             </div>
//         </div>
//     );

//     return (
//         <Fragment>
//             {showWelcome ? (
//                 <WelcomePage /> // Render the welcome page first
//             ) : (
//                 <Fragment>
//                     {loading ? <Loader /> :
//                         <Fragment>
//                             <MetaData title={'Buy Best Products'} />

//                             <h1 id="products_heading" className="mt-5">Latest Products</h1>

//                             {/* Show categories only on the first page */}
//                             {currentPage === 1 && (
//                                 <section id="categories" className="container my-5">
//                                     <h2>Categories</h2>
//                                     <div className="row">
//                                         {categories.map((category, index) => (
//                                             <div key={index} className="col-3">
//                                                 <div className="category-card">
//                                                     <img
//                                                         src={category.image}
//                                                         alt={category.name}
//                                                         style={{
//                                                             width: "100%",
//                                                             height: "200px",
//                                                             objectFit: "cover",
//                                                             borderRadius: "10px",
//                                                         }}
//                                                     />
//                                                     <h4 style={{ textAlign: "center", marginTop: "10px" }}>
//                                                         {category.name}
//                                                     </h4>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </section>
//                             )}

//                             {/* Products section */}
//                             <section id="products" className="container">
//                                 <div className="row">
//                                     {products && products.map(product => (
//                                         <Product col={3} key={product._id} product={product} />
//                                     ))}
//                                 </div>
//                             </section>

//                             {/* Pagination */}
//                             {productsCount > 0 && productsCount > resPerPage && (
//                                 <div className="d-flex justify-content-center mt-5">
//                                     <Pagination
//                                         activePage={currentPage}
//                                         onChange={setCurrentPageNo}
//                                         totalItemsCount={productsCount}
//                                         itemsCountPerPage={resPerPage}
//                                         nextPageText={'Next'}
//                                         firstPageText={'First'}
//                                         lastPageText={'Last'}
//                                         itemClass={'page-item'}
//                                         linkClass={'page-link'}
//                                     />     
//                                 </div>
//                             )}
//                         </Fragment>
//                     }
//                 </Fragment>
//             )}
//         </Fragment>
//     );
// }





// import { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../actions/productActions";
// import Loader from "./layouts/Loader";
// import MetaData from "./layouts/MetaData";
// import Product from "./product/Product";
// import { toast } from 'react-toastify';
// import Pagination from 'react-js-pagination';

// export default function Home() {
//     const dispatch = useDispatch();
//     const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [showWelcome, setShowWelcome] = useState(true); // State to manage welcome page visibility

//     // Sample categories array with images
//     const categories = [
//         {
//             name: "Electronics",
//             image: "/images/R.png" // Replace with actual image path
//         },
//         {
//             name: "Toy",
//             image: "/images/toy_1.jpeg" // Replace with actual image path
//         },
//         {
//             name: "Books",
//             image: "/images/book_1.jpeg" // Replace with actual image path
//         },
//         {
//             name: "Shoes",
//             image: "/images/shoes.jpeg" // Replace with actual image path
//         }
//     ];

//     const setCurrentPageNo = (pageNo) => {
//         setCurrentPage(pageNo);
//     };

//     const handleStart = () => {
//         setShowWelcome(false); // Hide welcome page when "Start" button is clicked
//     };

//     useEffect(() => {
//         if (error) {
//             return toast.error(error, {
//                 position: toast.POSITION.BOTTOM_CENTER,
//             });
//         }
//         if (!showWelcome) { // Fetch products only after the welcome page is dismissed
//             dispatch(getProducts(null, null, null, null, currentPage));
//         }
//     }, [error, dispatch, currentPage, showWelcome]);

//     const WelcomePage = () => (
//         <div
//             className="welcome-page"
//             style={{
//                 textAlign: "center",
//                 position: "relative",
//                 height: "100vh", // Ensure full height of the viewport
//                 width: "100vw",  // Ensure full width of the viewport
//                 overflow: "hidden",
//                 margin: 0,
//                 padding: 0,
//             }}
//         >
//             <img
//                 src="/images/banner2.avif" // Replace with the path to your image
//                 alt="Laptop Banner"
//                 style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100vw",   // Use 100vw for full width
//                     height: "100vh",  // Use 100vh for full height
//                     objectFit: "cover",  // Ensures the image covers the viewport while maintaining aspect ratio
//                     objectPosition: "center", // Centers the image
//                     zIndex: 1, // Ensure the image is behind the overlay
//                 }}
//             />
//             <div
//                 style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     backgroundColor: "rgba(0, 0, 0, 0.5)",
//                     padding: "20px",
//                     borderRadius: "10px",
//                     zIndex: 2, // Ensure the text is above the image
//                 }}
//             >
//                 <h1 style={{ color: "#fff" }}>Welcome to Our Store</h1>
//                 <button className="btn btn-primary" onClick={handleStart}>
//                     Start Shopping
//                 </button>
//             </div>
//         </div>
//     );

//     return (
//         <Fragment>
//             {showWelcome ? (
//                 <WelcomePage /> // Render the welcome page first
//             ) : (
//                 <Fragment>
//                     {loading ? <Loader /> :
//                         <Fragment>
//                             <MetaData title={'Buy Best Products'} />

//                             <h1 id="products_heading" className="mt-5">Latest Products</h1>

//                             {/* Show categories only on the first page */}
//                             {currentPage === 1 && (
//                                 <section id="categories" className="container my-5">
//                                     <h2>Categories</h2>
//                                     <div className="row">
//                                         {categories.map((category, index) => (
//                                             <div key={index} className="col-3">
//                                                 <div className="category-card">
//                                                     <img
//                                                         src={category.image}
//                                                         alt={category.name}
//                                                         style={{
//                                                             width: "100%",
//                                                             height: "200px",
//                                                             objectFit: "cover",
//                                                             borderRadius: "10px",
//                                                         }}
//                                                     />
//                                                     <h4 style={{ textAlign: "center", marginTop: "10px" }}>
//                                                         {category.name}
//                                                     </h4>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </section>
//                             )}

//                             {/* Products section */}
//                             <section id="products" className="container">
//                                 <div className="row">
//                                     {products && products.map(product => (
//                                         <Product col={3} key={product._id} product={product} />
//                                     ))}
//                                 </div>
//                             </section>

//                             {/* Pagination */}
//                             {productsCount > 0 && productsCount > resPerPage && (
//                                 <div className="d-flex justify-content-center mt-5">
//                                     <Pagination
//                                         activePage={currentPage}
//                                         onChange={setCurrentPageNo}
//                                         totalItemsCount={productsCount}
//                                         itemsCountPerPage={resPerPage}
//                                         nextPageText={'Next'}
//                                         firstPageText={'First'}
//                                         lastPageText={'Last'}
//                                         itemClass={'page-item'}
//                                         linkClass={'page-link'}
//                                     />     
//                                 </div>
//                             )}
//                         </Fragment>
//                     }
//                 </Fragment>
//             )}
//         </Fragment>
//     );
// }





import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import Loader from "./layouts/Loader";
import MetaData from "./layouts/MetaData";
import Product from "./product/Product";
import { toast } from 'react-toastify';
import Pagination from 'react-js-pagination';

export default function Home() {
    const dispatch = useDispatch();
    const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);
    const [currentPage, setCurrentPage] = useState(1);
    const [showWelcome, setShowWelcome] = useState(true); // State to manage welcome page visibility

    // Sample categories array with images
    const categories = [
        {
            name: "Electronics",
            image: "/images/R.png" // Replace with actual image path
        },
        {
            name: "Toy",
            image: "/images/toy_1.jpeg" // Replace with actual image path
        },
        {
            name: "Books",
            image: "/images/book_1.jpeg" // Replace with actual image path
        },
        {
            name: "Shoes",
            image: "/images/shoes.jpeg" // Replace with actual image path
        }
    ];

    const setCurrentPageNo = (pageNo) => {
        setCurrentPage(pageNo);
    };

    const handleStart = () => {
        setShowWelcome(false); // Hide welcome page when "Start" button is clicked
    };

    useEffect(() => {
        if (error) {
            return toast.error(error, {
                position: toast.POSITION.BOTTOM_CENTER,
            });
        }
        if (!showWelcome) { // Fetch products only after the welcome page is dismissed
            dispatch(getProducts(null, null, null, null, currentPage));
        }
    }, [error, dispatch, currentPage, showWelcome]);

    const WelcomePage = () => (
        <div
            className="welcome-page"
            style={{
                display: "flex", // Use flexbox for layout
                justifyContent: "center", // Center images horizontally
                alignItems: "center", // Center images vertically
                height: "100vh", // Ensure full height of the viewport
                width: "100vw", // Ensure full width of the viewport
                overflow: "hidden",
                margin: 0,
                padding: 0,
                position: "relative", // Position relative for the overlay
            }}
        >
            {/* First Banner Image */}
             <img
                src="/images/logo4.png" // Replace with the path to your first image
                alt="First Banner"
                style={{
                    width: "50%", // Set the width of the first image
                    height: "100%", // Auto height to maintain aspect ratio
                    objectFit: "cover", 
                    objectPosition:"left",// Maintain aspect ratio
                }}
            /> 
            {/* Second Banner Image */}
            {/* <img
                src="/images/banner2.avif" // Replace with the path to your second image
                alt="Second Banner"
                style={{
                    width: "50%", // Set the width of the second image
                    height: "70%", // Auto height to maintain aspect ratio
                    objectFit: "cover", // Maintain aspect ratio
                }}
            /> */}
            {/* Overlay for text and button */}
            <div
                style={{
                    position:"left",
                    top: "50%", // Center vertically
                    left: "50%", // Center horizontally
                    transform: "translate(-50%, -50%)", // Translate to center the text
                    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: to make the text more readable
                    padding: "20px",
                    borderRadius: "10px",
                    zIndex: 2, // Ensure the text is above the images
                    textAlign: "center", // Center the text and button
                }}
            >
                <h1 style={{ color: "blue", fontSize: "2rem", margin: "10px 0" }}>Welcome to Our Store</h1>
                <button className="btn btn-primary" style={{ fontSize: "1.2rem", padding: "10px 20px", margin: "10px 0" }} onClick={handleStart}>
                    Start Shopping
                </button>
            </div>
        </div>
    );
    
    
    
    return (
        <Fragment>
            {showWelcome ? (
                <WelcomePage /> // Render the welcome page first
            ) : (
                <Fragment>
                    {loading ? <Loader /> :
                        <Fragment>
                            <MetaData title={'Buy Best Products'} />

                            <h1 id="products_heading" className="mt-5">Latest Products</h1>

                            {/* Show categories only on the first page */}
                            {currentPage === 1 && (
                                <section id="categories" className="container my-5">
                                    <h2>Categories</h2>
                                    <div className="row">
                                        {categories.map((category, index) => (
                                            <div key={index} className="col-3">
                                                <div className="category-card">
                                                    <img
                                                        src={category.image}
                                                        alt={category.name}
                                                        style={{
                                                            width: "100%",
                                                            height: "200px",
                                                            objectFit: "cover",
                                                            borderRadius: "10px",
                                                        }}
                                                    />
                                                    <h4 style={{ textAlign: "center", marginTop: "10px" }}>
                                                        {category.name}
                                                    </h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Products section */}
                            <section id="products" className="container">
                                <div className="row">
                                    {products && products.map(product => (
                                        <Product col={3} key={product._id} product={product} />
                                    ))}
                                </div>
                            </section>

                            {/* Pagination */}
                            {productsCount > 0 && productsCount > resPerPage && (
                                <div className="d-flex justify-content-center mt-5">
                                    <Pagination
                                        activePage={currentPage}
                                        onChange={setCurrentPageNo}
                                        totalItemsCount={productsCount}
                                        itemsCountPerPage={resPerPage}
                                        nextPageText={'Next'}
                                        firstPageText={'First'}
                                        lastPageText={'Last'}
                                        itemClass={'page-item'}
                                        linkClass={'page-link'}
                                    />     
                                </div>
                            )}
                        </Fragment>
                    }
                </Fragment>
            )}
        </Fragment>
    );
}
