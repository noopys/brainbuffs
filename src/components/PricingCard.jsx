import React from "react";
import TickSquare from '../resources/icons/tick_square.svg';

function PricingCard({ rows }) {
    return (
        <div className="flex flex-col gap-10 m-6 p-6 w-[380px] h-[583px] bg-white border border-gray-300 rounded-lg shadow-md">
            <div className="p-8 justify-start items-start ">
                <p style={{
                    color: '#222', // Using the provided color code
                    fontFamily: 'Inter', // Specifying the font-family
                    fontSize: '22px', // Setting font-size
                    fontWeight: '400', // Normal font weight
                    lineHeight: 'normal', // Normal line-height
                    letterSpacing: '-0.88px', // Custom letter-spacing
                }}

                >
                    Free
                </p>
                <div className="flex flex-row items-center">
                    <span style={{
                        color: '#000',
                        fontFamily: 'Inter',
                        fontSize: '42px',
                        fontWeight: '600',
                        lineHeight: '48px', // Custom line height
                    }}
                        className="text-center"
                    >
                        $0
                    </span>
                    <span style={{
                        color: '#606F7B', // Grey color
                        fontFamily: 'Inter',
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
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '24px', // 150%
                    }}>
                        Revolutionize your SAT
                    </p>
                </div>

                <div className="pt-4">
                    {rows && rows.map((row, index) => (
                        <div key={index} className="flex items-center my-2 pb-2"> {/* Added flex and vertical centering */}
                            <img src={TickSquare} alt="Icon" className="w-6 h-6" />
                            <span style={{
                                color: '#222', // Black color
                                fontFamily: 'Inter',
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
            <div className="flex justify-center items-center pt-5">
                {/*Plan Sign up Buttons*/}
                <button
                    style={{
                        borderColor: '#222', // Black border color
                        borderWidth:'1px',
                        borderRadius: '10px', // Border radius
                        gap: '10px', // Gap between elements inside the button (if any),
                        backgroundColor: "white",
                    }}
                    className="flex justify-center items-center p-2"
                >
                    <p style={{
                        color: '#222', // Black color
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
        </div>
    );
}

export default PricingCard;