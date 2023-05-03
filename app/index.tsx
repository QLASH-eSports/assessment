import { Redirect } from "expo-router";
import { Provider as PaperProvider } from "react-native-paper";
export default function Index() {
  return (
    <PaperProvider>
      <Redirect href="onboarding" />
    </PaperProvider>
  );
}
