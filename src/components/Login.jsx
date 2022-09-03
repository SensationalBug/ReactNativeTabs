import React from "react";
import StyledText from "./StyledText";
import { Formik, useField } from "formik";
import StyledTextInput from "./StyledTextInput";
import { loginValidationSchema } from "../validationSchema/login";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const FormikInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    return (
      <>
        <StyledTextInput
          error={meta.error}
          value={field.value}
          onChangeText={(value) => helpers.setValue(value)}
          {...props}
        />
        {meta.error && (
          <StyledText style={styles.error}>{meta.error}</StyledText>
        )}
      </>
    );
  };

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.container}>
            <Text style={styles.header}>Rate Repository App!</Text>
            <FormikInput name="email" placeholder="Email" />
            <FormikInput
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonR} onPress={handleSubmit}>
                <Text style={styles.button}>Registrar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonL} onPress={handleSubmit}>
                <Text style={styles.button}>Loguear</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  header: {
    fontSize: 35,
    paddingVertical: "10%",
    textTransform: "uppercase",
  },
  buttonContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  button: {
    padding: 5,
    fontSize: 20,
    paddingVertical: 15,
  },
  buttonR: {
    width: "45%",
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "red",
  },
  buttonL: {
    width: "45%",
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "green",
  },
  error: {
    color: "red",
    marginTop: -30,
    marginBottom: 30,
  },
});

export default Login;
