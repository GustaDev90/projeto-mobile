import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden />

      <Stack>
        <Stack.Screen
          name="home"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="marketplaces"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="invite"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="cadastro"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
}