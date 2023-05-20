/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function ButtonSecondary(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="200px"
      height="60px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ButtonSecondary")}
      {...rest}
    >
      <View
        width="200px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        //border="1px SOLID rgba(0,0,0,1)"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Background")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="24.2578125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="167px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 25.5px - -0.5px)"
        left="17px"
        right="16px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Contact Us:"
        {...getOverrideProps(overrides, "Text")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.2578125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="167px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 12.5px - -0.5px + 15px)"
        left="17px"
        right="16px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="brain.buffs.tutoring@gmail.com
        303-304-7391"
        {...getOverrideProps(overrides, "Text")}
      ></Text>
    </View>
  );
}
