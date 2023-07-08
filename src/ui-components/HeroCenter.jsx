import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import ButtonPrimary from "./ButtonPrimary";
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

export default function HeroCenter(props) {
  const { overrides, ...rest } = props;
  const isMobile = useMediaQuery({ maxWidth: 768 });
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
        <NavLink to="/about">
          <ButtonPrimary
            //width="28%"
            height="20px"
            transform="translate(-0%, 300%)" /* Center the text both vertically and horizontally */
            {...getOverrideProps(overrides, "Button Primary")}
          ></ButtonPrimary>
        </NavLink>
      </View>
      <Text
        fontFamily="Roboto"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="center"
        width="44%"
        position="absolute"
        top="50%"
        left="50%" /* Horizontally center the text */
        transform="translate(-50%, -50%)" /* Center the text both vertically and horizontally */
        whiteSpace="pre-wrap"
        children="Guaranteed score increase or your money back."
        {...getOverrideProps(overrides, "Subtitle")}
      ></Text>
      <Text
        fontFamily="Roboto"
        paddingBottom='65px'
        fontSize="4vw"
        fontWeight="bolder"
        color="rgba(0,0,0,1)"
        lineHeight="70px"
        textAlign="center"
        width="78%"
        position="absolute"
        top="30%"
        left="50%" /* Horizontally center the text */
        transform="translate(-50%, -50%)" /* Center the text both vertically and horizontally */
        whiteSpace="pre-wrap"
        children="Proven SAT tutoring from experts in the new digital SAT"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
    </View>
  );
}
