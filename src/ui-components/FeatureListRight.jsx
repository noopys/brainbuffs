/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import ButtonSecondary from "./ButtonSecondary";
import vab from '../resources/loganvab.jpg';
export default function FeatureSplitRight(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      overflowX="hidden"
      width="110%"
      height="600px"
      display="block"
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
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="50%"
        right="0%"
        {...getOverrideProps(overrides, "Media")}
      >
        <View
          width="720px"
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
          backgroundColor="rgba(105,105,105,1)"
          {...getOverrideProps(overrides, "Media Background")}
        ></View>
        <View
          width="320px"
          height="360px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="20%"
          bottom="20%"
          left="27.5%"
          right="28.06%"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(105,105,105,1)"
          {...getOverrideProps(overrides, "Media Object")}
        >
          <img
            src={vab}
            alt="Brain Buffs Logo"
            style={{
              borderRadius:"10%",
              width: '320px',
              height: '500px',
              position: 'absolute',
              top: '50%',
              left: '0', // Adjust the value based on your layout
              transform: 'translateY(-50%)',
            }}
          />
        </View>
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
        top="29.83%"
        bottom="29.67%"
        left="9.38%"
        right="61.32%"
        {...getOverrideProps(overrides, "Content")}
      >
        {/* <ButtonSecondary
          width="200px"
          height="60px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="75.31%"
          bottom="0%"
          left="0%"
          right="52.61%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Button Secondary")}
        ></ButtonSecondary> */}
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
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
          top="20%"
          bottom="34.57%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Logan is a motivated computer science student and NASA intern, who excelled on the SAT and is now dedicated to helping others
            achieve the same success. Logan understands firsthand the strategies and techniques needed to excel in each section. Combined with his 
            strong problem-solving, logical reasoning, and analytical skills, he brings a unique perspective to 
            his tutoring approach. Logan provides students with the tools and 
            guidance they need to achieve their own exceptional SAT scores. With his passion, expertise, Logan is committed to empowering students to reach their full potential on the SAT."
          {...getOverrideProps(overrides, "Subtitle")}
        ></Text>
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
      </View>
    </View>
  );
}
