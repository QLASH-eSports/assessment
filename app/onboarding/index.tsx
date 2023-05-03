import { Link, Stack, useRouter } from "expo-router";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, Text } from "react-native-paper";
import { useMemo } from "react";
import onboardingStyles from "./styles";

interface Tip {
  title: string;
  description: string;
  icon: string;
}

export default function GameSelection() {
  const options = {
    headerShown: false,
  };

  const router = useRouter();

  const styles = useMemo(
    () => onboardingStyles(),
    [Dimensions.get("window").width]
  );

  const TIPS: Array<Tip> = [
    { title: "15M+", description: "Followers", icon: "heart-sharp" },
    { title: "250K+", description: "Community Members", icon: "md-people" },
    {
      title: "120+",
      description: "Pro players & Influencers",
      icon: "md-trophy",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Ionicons name={item.icon} size={100} color={"#5de3dc"} />
        <Text variant="headlineLarge">{item.title}</Text>
        <Text variant="headlineSmall">{item.description}</Text>
        {index === TIPS.length - 1 && (
          <Button
            mode="contained"
            style={styles.btn}
            onPress={() => router.replace("signup")}
          >
            Sign Up
          </Button>
        )}
      </View>
    );
  };

  return (
    <>
      <Stack.Screen options={options} />
      <FlatList
        data={TIPS}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").width}
        decelerationRate={"fast"}
        renderItem={renderItem}
      />
    </>
  );
}
