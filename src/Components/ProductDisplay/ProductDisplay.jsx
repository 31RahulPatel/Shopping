import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = () => {
        addToCart(product.id);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    
    

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull} alt="" />
                    <p>(124)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-discription">
                    Lorem ipsum dolor sit amet consectetur adipisicing eusdam alias fugit expedita consequatur culpa laudantium tenetur quisquam!

                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={handleAddToCart}>ADD TO CART</button>
                <p className='productdisplay-right-category'>
                    <span>Category:</span>Women , T-Shirt , Crop Top
                </p>
                <p className='productdisplay-right-category'>
                    <span>Tags :</span>Modern , Latest
                </p>
                {showPopup && (
                    <div className="popup-product">
                        <div className="popup-content">
                            <span className="close" onClick={handleClosePopup}> <h3>X</h3></span>
                            <p>You have a good taste in Fashion. Buy More Stay Happy😊 </p>
                            <button className='button-goto' onClick={handleClosePopup}>Buy More</button>

                            <button className="link-button">
                                <Link to="/cart" className="button-link">
                                    Go to Cart
                                </Link>
                            </button>
                            <h2> HOPPERS LIKES YOUR TASTE 👌</h2>


                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDisplay;
