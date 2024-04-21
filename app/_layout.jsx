import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const RootLayout = () => {
  return (
    <>
      <Text>Header</Text>
      <Slot name="root" />
      <Text>Footer</Text>
    </>
  );
};

export default RootLayout;
