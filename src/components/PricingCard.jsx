import React from "react";
import { Link } from 'react-router-dom';
import TickSquare from '../resources/icons/tick_square.svg';

function PricingCard({ rows, price, title }) {
    return (
        <div className="flex flex-col gap-10 m-4 w-[380px] bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="pl-8 pt-8 justify-start items-start flex-grow">
                <p style={{
                    color: '#222', // Using the provided color code
                    fontFamily: 'poppins', // Specifying the font-family
                    fontSize: '22px', // Setting font-size
                    fontWeight: '400', // Normal font weight
                    lineHeight: 'normal', // Normal line-height
                    letterSpacing: '-0.88px', // Custom letter-spacing
                }}

                >
                    {title}
                </p>
                <div className="flex flex-row items-center">
                    <span style={{
                        color: '#000',
                        fontFamily: 'poppins',
                        fontSize: '42px',
                        fontWeight: '600',
                        lineHeight: '48px', // Custom line height
                    }}
                        className="text-center"
                    >
                        ${price}
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
                    <p style={{
                        color: '#606F7B', // Grey color
                        fontFamily: 'poppins',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px', // 150%
                    }}>
                        Revolutionize your SAT
                    </p>
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
            <Link to="/contact" style={{textDecoration:"none"}}>
                <div className="flex justify-center items-center pt-1 pb-5">
                    {/*Plan Sign up Buttons*/}
                    <button
                        style={{
                            borderColor: '#20a7a1', // Black border color
                            borderWidth: '1px',
                            borderRadius: '10px', // Border radius
                            gap: '10px', // Gap between elements inside the button (if any),
                            backgroundColor: "white",
                        }}
                        className="flex justify-center items-center p-2"
                    >
                        <p style={{
                            color: '#20a7a1', // Black color
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontWeight: '600',
                            margin: 0, // Removes default margin to aid in centering
                        }}
                            className="p-2"
                        >
                            Choose Plan
                        </p>
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default PricingCard;