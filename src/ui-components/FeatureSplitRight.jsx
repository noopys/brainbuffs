/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import ButtonSecondary from "./ButtonSecondary";
import vab from '../resources/sandy_headshot.jpg';

export default function FeatureSplitRight(props) {
  const { overrides, ...rest } = props;

  return (
    <View
      overflowX="hidden"
      width="110%"
      height="600px"
      display="flex"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FeatureSplitRight")}
      {...rest}
    >
      <View
        width="1440px"
        height="600px"
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
      <View
        padding="0px 0px 0px 0px"
        width="720px"
        height="600px"
        display="flex"
        gap="unset"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="55%"
        right="0%"
        {...getOverrideProps(overrides, "Media")}
      >
        <div
          style={{
            //width: '100%',
            // maxWidth: '100%',
            height: '600px',
            //maxHeight: '100%',
            // borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <img
            src={vab}
            alt="Brain Buffs Logo"
            style={{
              paddingLeft:'10px',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="422px"
        height="243px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="29.67%"
        left="9.38%"
        right="61.32%"
        {...getOverrideProps(overrides, "Content")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="33.75px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0"
          bottom="90.01%"
          left="0%"
          right="39.81%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Meet Brain Buffs"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,0,1)"
          lineHeight="28.125px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="422px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="50%"
          bottom="34.57%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sandy is a monkey"
          {...getOverrideProps(overrides, "Subtitle")}
        ></Text>
        {/* Rest of the code... */}
      </View>
    </View>
  );
}