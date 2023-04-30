import React, { useEffect, useState } from "react";
import { Link, Stack, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const signin = (props: any) => {
  const [visible, setVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const options = {
    title: "Sign in",
  };
  function onShowPasswordHandler() {
    visible ? setVisible(false) : setVisible(true);
  }

  function handleNavigation({ email, password }) {
    console.log(email, password);
    setIsAuthenticated(true);
    router.push("/onboarding/game-selection");
    router.setParams({ email: email, password: password });
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={options} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleNavigation(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.rootContainer}>
              <Text style={styles.title}>Sign In </Text>
              <Text style={styles.subTitle}>Sign in with email</Text>

              <View style={styles.inputContainer}>
                <AppTextInput
                  icon={"email"}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onBlur={() => setFieldTouched("email")}
                  onChangeText={handleChange("email")}
                  placeholder="Email"
                  textContentType="emailAddress"
                  hiddenIcon={null}
                  onPress={null}
                />
                {touched.email && <ErrorMessage error={errors.email} />}
                <AppTextInput
                  icon={"lock"}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  textContentType="password"
                  placeholder="Password"
                  secureTextEntry={visible ? false : true}
                  hiddenIcon={"eye"}
                  onPress={onShowPasswordHandler}
                />
                {touched.password && <ErrorMessage error={errors.password} />}
              </View>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

export default signin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 2,
  },
  subTitle: {
    fontSize: 14,
    marginBottom: 20,
    color: "#848d937f",
  },
  rootContainer: {
    margin: 20,
    flex: 1,
  },
  inputContainer: {
    justifyContent: "center",
    flex: 0.7,
  },
  buttonText: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Roboto",
    textAlign: "center",
  },
  button: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    margin: 25,
    backgroundColor: "#17b1f3",
  },
});
