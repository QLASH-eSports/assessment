import { Stack, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../common/components/Input";
import { Button, Text } from "react-native-paper";
import signupStyles from "./styles";
import { useMemo } from "react";
interface UserCredentials {
  email: string;
  password: string;
}

export default function Signup() {
  const router = useRouter();
  const styles = useMemo(() => signupStyles(), []);

  const schema: yup.ObjectSchema<UserCredentials> = yup
    .object({
      email: yup
        .string()
        .required("Email is a required field")
        .email("Please enter a valid email address"),
      password: yup.string().required("Password is a required field"),
    })
    .required();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>({
    resolver: yupResolver(schema),
  });

  const options = {
    title: "Signup",
  };

  const onSubmit = () => {
    router.push("home");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={options} />
      <View style={styles.inputsContainer}>
        <Input
          name="email"
          control={control}
          label="Email"
          keyboardType="email-address"
        />
        {errors?.email && (
          <Text style={styles.errorTxt}> {errors.email.message}</Text>
        )}
        <Input
          name="password"
          control={control}
          label="Password"
          keyboardType="visible-password"
          isSecureTextEntry
        />
        {errors?.password && (
          <Text style={styles.errorTxt}> {errors.password.message}</Text>
        )}
      </View>

      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={styles.submitBtn}
        textColor="white"
      >
        Signup
      </Button>
    </View>
  );
}
