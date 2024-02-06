import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TickSquare from '../../resources/icons/tick_square.svg';
import { useAuth } from '../frontend/accounts/AuthContext';

function PricingCard({ rows, price, title, plan, desc, showBanner, buttonDesc}) {
    const { isLoggedIn, userData } = useAuth();
    const [isProSubscription, setIsProSubscription] = useState(false);

    useEffect(() => {
        // Your logic to check if SubscriptionLevel is "pro" or "practice"
        // For demonstration purposes, I'm assuming your data is stored in a variable called "data"
        if (userData && userData.length > 0) {
            const subscriptionLevel = userData[0]?.SubscriptionLevel?.S;
            if (subscriptionLevel === 'pro' || subscriptionLevel === 'practice') {
                setIsProSubscription(true);
            } else {
                setIsProSubscription(false);
            }
        }
    }, [userData]);

    //Add plan argument to url 
    const signupUrl = `/signup?plan=${plan}`;
    return (
        <div className="flex flex-col m-4 gap-2 w-[380px] bg-white border border-gray-300 rounded-lg shadow-lg font-poppins">
            {showBanner ? (
                <div className="bg-red-500 text-white py-1 px-4 rounded-t-lg flex justify-center items-center font-poppins">
                    <div className="text-center" style={{ fontSize: '22px' }}>DISCOUNT</div>
                </div>
            ): (
                <div className="bg-white text-white py-1 px-4 rounded-t-lg">
                        <div className="text-center" style={{ fontSize: '22px' }}>.</div>
                </div>
            )}
            <div className="pl-8 pb-4 justify-start items-start flex-grow">
                <div style={{
                    color: '#222', // Using the provided color code
                    fontFamily: 'poppins', // Specifying the font-family
                    fontSize: '30px', // Setting font-size
                    fontWeight: '500', // Normal font weight
                    lineHeight: 'normal', // Normal line-height
                    paddingBottom: '4px', 
                }}
                >
                    {title}
                </div>
                <div className="flex flex-row items-center">
                    <span style={{
                        color: '#000',
                        fontFamily: 'poppins',
                        fontSize: '42px',
                        fontWeight: '600',
                        lineHeight: '48px', // Custom line height
                        display: 'flex', // Use flexbox to align items vertically
                        alignItems: 'flex-end', // Align items to the bottom
                    }}
                        className="text-center"
                    >
                        <span style={{ fontSize: '24px', marginBottom: '6px' }}>$</span>{price}
                    </span>
                    <span style={{
                        color: '#606F7B', // Grey color
                        fontFamily: 'poppins',
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '20px', // Custom line height
                    }}
                        className="text-center"
                    >
                        /month
                    </span>
                </div>
                <div className="pt-1">
                    <div style={{
                        color: '#606F7B', // Grey color
                        fontFamily: 'poppins',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px', // 150%
                        paddingLeft: '4px'
                    }}>
                        {desc}
                    </div>
                </div>

                <div className="pt-4">
                    {rows && rows.map((row, index) => (
                        <div key={index} className="flex items-starts my-2 pb-2 pr-4"> {/* Added flex and vertical centering */}
                            <img src={TickSquare} alt="Icon" className="w-6 h-6" />
                            <span style={{
                                color: '#222', // Black color
                                fontFamily: 'poppins',
                                fontSize: '16px',
                                fontWeight: '600',
                                lineHeight: '24px',
                            }}
                                className="pl-2" // Removed text-center to align text to the left
                            >
                                {row}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <Link to={isLoggedIn ? (isProSubscription ? '/homework-intermediate' : '/checkout?plan=practice') : signupUrl} style={{textDecoration:"none"}}>
                <div className="flex justify-center items-center pt-1 pb-5">
                    {/*Plan Sign up Buttons*/}
                    <button
                        style={{
                            borderColor: '#20a7a1', // Black border color
                            borderWidth: '1px',
                            borderRadius: '10px', // Border radius
                            gap: '10px', // Gap between elements inside the button (if any),
                            //backgroundColor: "white",
                        }}
                        className="flex justify-center items-center p-2 bg-whitesmoke-100 hover:bg-main-teal"
                    >
                        <p 
                        // style={{
                        //     color: '#20a7a1', // Black color
                        //     fontFamily: 'Inter',
                        //     fontSize: '16px',
                        //     fontWeight: '600',
                        //     margin: 0, // Removes default margin to aid in centering
                        // }}
                            className="text-main-teal font-Inter font-semibold text-lg m-0 p-2 hover:text-whitesmoke-100"
                        >
                            {isLoggedIn ? (isProSubscription ? "Go To Homework" : buttonDesc) : buttonDesc}
                        </p>
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default PricingCard;