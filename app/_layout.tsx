import { Stack } from "expo-router";
import "react-native-reanimated";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Disney Character Gallery" }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
