import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import ButtonPrimary from "./ButtonPrimary";
import { NavLink } from 'react-router-dom';

export default function HeroCenter(props) {
  const { overrides, ...rest } = props;

  return (
    <View
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      {...getOverrideProps(overrides, "HeroCenter")}
      {...rest}
    >
      <View
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        backgroundColor="rgba(242,242,242,1)"
        {...getOverrideProps(overrides, "Background")}
      ></View>
      <View
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <NavLink to="/about" style={{ textDecoration: 'none' }}>
          <ButtonPrimary
            //width="28%",
            top="20%"
            paddingTop="0px"
            height="50px"
            transform="translate(-0%, 200%)" /* Center the text both vertically and horizontally */
            {...getOverrideProps(overrides, "Button Primary")}
          ></ButtonPrimary>
        </NavLink>
      </View>
      <Text
        className="subtitle"
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="center"
        width="100%"
        position="absolute"
        top="39%"
        left="50%" /* Horizontally center the text */
        transform="translate(-50%, -50%)" /* Center the text both vertically and horizontally */
        whiteSpace="pre-wrap"
        children="Specialized Tutoring and Custom Homework"
        {...getOverrideProps(overrides, "Subtitle")}
      ></Text>
      <Text
        className="title"
        fontFamily="Roboto"
        paddingBottom='65px'
        //fontSize="4vw"
        fontWeight="bolder"
        color="rgba(0,0,0,1)"
        textAlign="center"
        width="78%"
        position="absolute"
        top="25%"
        left="50%" /* Horizontally center the text */
        transform="translate(-50%, -50%)" /* Center the text both vertically and horizontally */
        whiteSpace="pre-wrap"
        children="Brain Buffs Test Prep"
        {...getOverrideProps(overrides, "Title")}
      ></Text>

      <style>{`
        .title {
          font-size: 5vw;
          line-height="70px"

        }
        
        .subtitle {
          font-size: 20px;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 10vw;
            line-height: 40px;
          }
          
          .subtitle {
            font-size: 18px;
            line-height: 20px;
          }
        }
      `}</style>
    </View>
  );
}
