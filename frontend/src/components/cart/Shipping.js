// import { useDispatch, useSelector } from "react-redux";
// import { Fragment, useState } from "react";
// import {countries} from 'countries-list'
// import { saveShippingInfo } from "../../slices/cartSlice";
// import { useNavigate } from "react-router-dom";
// import CheckoutSteps from "./CheckoutStep";
// import { toast } from "react-toastify";

// export const validateShipping = (shippingInfo, navigate) => {
   
//     if(
//         !shippingInfo.address||
//         !shippingInfo.city||
//         !shippingInfo.state|| 
//         !shippingInfo.country||
//         !shippingInfo.phoneNo||
//         !shippingInfo.postalCode
//         ) {
//             toast.error('Please fill the shipping information',{position: toast.POSITION.BOTTOM_CENTER})
//             navigate('/shipping')
//     }
// } 


// export default function Shipping() {
//     const {shippingInfo={} } = useSelector(state => state.cartState)

//     const [address, setAddress] = useState(shippingInfo.address);
//     const [city, setCity] = useState(shippingInfo.city);
//     const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
//     const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
//     const [country, setCountry] = useState(shippingInfo.country);
//     const [state, setState] = useState(shippingInfo.state);
//     const countryList =  Object.values(countries);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const submitHandler = (e) => {
//         e.preventDefault();
//         dispatch(saveShippingInfo({address, city, phoneNo, postalCode, country, state}))
//         navigate('/order/confirm')
//     }





//     return (
//         <Fragment>
//             <CheckoutSteps shipping />
//             <div className="row wrapper">
//                     <div className="col-10 col-lg-5">
//                         <form onSubmit={submitHandler} className="shadow-lg">
//                             <h1 className="mb-4">Shipping Info</h1>
//                             <div className="form-group">
//                                 <label htmlFor="address_field">Address</label>
//                                 <input
//                                     type="text"
//                                     id="address_field"
//                                     className="form-control"
//                                     value={address}
//                                     onChange={(e) => setAddress(e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="city_field">City</label>
//                                 <input
//                                     type="text"
//                                     id="city_field"
//                                     className="form-control"
//                                     value={city}
//                                     onChange={(e) => setCity(e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="phone_field">Phone No</label>
//                                 <input
//                                     type="phone"
//                                     id="phone_field"
//                                     className="form-control"
//                                     value={phoneNo}
//                                     onChange={(e) => setPhoneNo(e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="postal_code_field">Postal Code</label>
//                                 <input
//                                     type="number"
//                                     id="postal_code_field"
//                                     className="form-control"
//                                     value={postalCode}
//                                     onChange={(e) => setPostalCode(e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="country_field">Country</label>
//                                 <select
//                                     id="country_field"
//                                     className="form-control"
//                                     value={country}
//                                     onChange={(e) => setCountry(e.target.value)}
//                                     required

//                                 >{ countryList.map((country, i) => (

//                                     <option key={i} value={country.name}>
//                                         {country.name}
//                                     </option>
//                                 ))
//                                 }
//                                 </select>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="state_field">State</label>
//                                 <input
//                                     type="text"
//                                     id="state_field"
//                                     className="form-control"
//                                     value={state}
//                                     onChange={(e) => setState(e.target.value)}
//                                     required
//                                 />
//                             </div>

//                             <button
//                                 id="shipping_btn"
//                                 type="submit"
//                                 className="btn btn-block py-3"
//                             >
//                                 CONTINUE
//                                 </button>
//                         </form>
//                     </div>
//             </div>
//         </Fragment>
//     )
// }



import { useDispatch, useSelector } from "react-redux";
import { Fragment, useState } from "react";
import { countries } from 'countries-list';
import { saveShippingInfo } from "../../slices/cartSlice";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "./CheckoutStep";
import { toast } from "react-toastify";

// Helper function to validate phone number
const validatePhoneNumber = (phoneNo) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNo);
};

// Helper function to validate postal code
const validatePostalCode = (postalCode) => {
    const postalCodeRegex = /^\d{5,6}$/;
    return postalCodeRegex.test(postalCode);
};

// Helper function to validate city
const validateCity = (city) => {
    const cityRegex = /^[a-zA-Z\s]+$/; // Only allows letters and spaces
    return cityRegex.test(city) && city.trim().length >= 2;
};

// Helper function to validate address
const validateAddress = (address) => {
    return address.trim().length >= 5; // Ensure address is at least 5 characters long
};

export const validateShipping = (shippingInfo, navigate) => {
    if (
        !shippingInfo.address ||
        !shippingInfo.city ||
        !shippingInfo.state ||
        !shippingInfo.country ||
        !shippingInfo.phoneNo ||
        !shippingInfo.postalCode
    ) {
        toast.error('Please fill the shipping information', { position: toast.POSITION.BOTTOM_CENTER });
        navigate('/shipping');
    }
};

export default function Shipping() {
    const { shippingInfo = {} } = useSelector(state => state.cartState);

    const [address, setAddress] = useState(shippingInfo.address);
    const [city, setCity] = useState(shippingInfo.city);
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
    const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
    const [country, setCountry] = useState(shippingInfo.country);
    const [state, setState] = useState(shippingInfo.state);
    const countryList = Object.values(countries);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        // Address validation
        if (!validateAddress(address)) {
            toast.error('Address must be at least 5 characters long', { position: toast.POSITION.BOTTOM_CENTER });
            return;
        }

        // City validation
        if (!validateCity(city)) {
            toast.error('City must contain only letters and be at least 2 characters long', { position: toast.POSITION.BOTTOM_CENTER });
            return;
        }

        // Phone number validation
        if (!validatePhoneNumber(phoneNo)) {
            toast.error('Phone number must be exactly 10 digits', { position: toast.POSITION.BOTTOM_CENTER });
            return;
        }

        // Postal code validation
        if (!validatePostalCode(postalCode)) {
            toast.error('Postal code must be 5 or 6 digits', { position: toast.POSITION.BOTTOM_CENTER });
            return;
        }

        // Save shipping info and navigate to order confirmation
        dispatch(saveShippingInfo({ address, city, phoneNo, postalCode, country, state }));
        navigate('/order/confirm');
    };

    return (
        <Fragment>
            <CheckoutSteps shipping />
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form onSubmit={submitHandler} className="shadow-lg">
                        <h1 className="mb-4">Shipping Info</h1>
                        <div className="form-group">
                            <label htmlFor="address_field">Address</label>
                            <input
                                type="text"
                                id="address_field"
                                className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city_field">City</label>
                            <input
                                type="text"
                                id="city_field"
                                className="form-control"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone_field">Phone No</label>
                            <input
                                type="phone"
                                id="phone_field"
                                className="form-control"
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="postal_code_field">Postal Code</label>
                            <input
                                type="number"
                                id="postal_code_field"
                                className="form-control"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="country_field">Country</label>
                            <select
                                id="country_field"
                                className="form-control"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            >
                                {countryList.map((country, i) => (
                                    <option key={i} value={country.name}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="state_field">State</label>
                            <input
                                type="text"
                                id="state_field"
                                className="form-control"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            id="shipping_btn"
                            type="submit"
                            className="btn btn-block py-3"
                        >
                            CONTINUE
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}
