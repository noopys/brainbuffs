/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Testimonial(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="400px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Testimonial")}
      {...rest}
    >
      <View
        width="1440px"
        height="400px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(242,242,242,1)"
        {...getOverrideProps(overrides, "Background")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="19.03125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="248px"
        left="calc(50% - 118.5px - -0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Maria Lopez, VP of Design at Meshery"
        {...getOverrideProps(overrides, "Person Name")}
      ></Text>
      <Icon
        width="40px"
        height="40px"
        viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
        paths={[
          {
            d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="184px"
        left="calc(50% - 20px - 0px)"
        {...getOverrideProps(overrides, "Media Person")}
      ></Icon>
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="32.625px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="132px"
        left="calc(50% - 490.5px - -0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.”"
        {...getOverrideProps(overrides, "Quote Text")}
      ></Text>
    </View>
  );
}
