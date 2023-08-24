/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";

export default function ButtonPrimary(props) {
  const { overrides, ...rest } = props;

  return (
    <View
      width="200px"
      height="60px"
      display="flex"
      alignItems="center"  // Centers children vertically in the container
      justifyContent="center" // Centers children horizontally in the container
      borderRadius="5px"
      backgroundColor="rgba(0,0,0,1)"
      {...getOverrideProps(overrides, "ButtonPrimary")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="21.09375px"
        textDecoration="none"
        textAlign="center"
        children="Learn More"
        {...getOverrideProps(overrides, "Text")}
      ></Text>
    </View>
  );
}
