import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LemonName from "../../assets/svg/LemonName";
import GradientText from "../components/utils/GradientText";

export default function Login({ navigation }: any) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <View>
        <Text style={styles.loginTitle}>Inicio de Sesión</Text>
      </View>
      <View style={styles.logoContainer}>
        <ImageBackground
          source={{
            uri: "https://res.cloudinary.com/ivannavas/image/upload/v1722542162/red_social/icons/vb1yxs4sbgstehwinjhy.jpg",
          }}
          resizeMode="stretch"
          style={styles.imageBack}
          blurRadius={50}
          imageStyle={styles.imageIconBack}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/ivannavas/image/upload/v1723912403/red_social/icons/nvynboeounfkki0y8jst.png",
              }}
              style={styles.lemon}
            />
            <LemonName
              style={[
                styles.lemonName,
                {
                  transform: [{ rotate: "-10deg" }],
                },
              ]}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Correo"
          style={styles.input}
          placeholderTextColor={"#9F9F9F"}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <LinearGradient
          colors={["#87DBFF", "#EAC7FF"]}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.borderInput}
        ></LinearGradient>
        <View
          style={{
            width: "100%",
            marginTop: 64,
            position: "relative",
          }}
        >
          <TextInput
            placeholder="Contraseña"
            style={styles.input}
            placeholderTextColor={"#9F9F9F"}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <Pressable style={styles.hideIcon}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/ivannavas/image/upload/v1723912694/red_social/icons/c3cctz34iciklvv5hwm0.png",
              }}
              style={styles.hideIcon}
            />
          </Pressable>
          <LinearGradient
            colors={["#87DBFF", "#EAC7FF"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.borderInput}
          ></LinearGradient>
        </View>
        <View style={styles.forgotContainer}>
          <Pressable>
            <Text style={styles.forgot}>Olvidé mi contraseña</Text>
          </Pressable>
        </View>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            navigation.navigate("Main");
          }}
        >
          <LinearGradient
            colors={["#87DBFF", "#EAC7FF"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.pressable}
          >
            <Text style={styles.textButtonLogin}>Confirmar</Text>
          </LinearGradient>
        </Pressable>
        <View style={styles.createLinkContainer}>
          <Text style={styles.createLinkMessage}>¿No tienes cuenta?</Text>
          <Pressable style={styles.createLinkButton}>
            <GradientText
              colors={["#87DBFF", "#EAC7FF"]}
              style={styles.createLink}
            >
              Crea una.
            </GradientText>
          </Pressable>
        </View>
        <View style={styles.optionContainer}>
          <LinearGradient
            style={styles.line}
            colors={["#87DBFF", "#EAC7FF"]}
            end={[1, 1]}
            start={[0, 0]}
          ></LinearGradient>
          <View>
            <Text style={styles.option}>O</Text>
          </View>
          <LinearGradient
            style={styles.line}
            colors={["#87DBFF", "#EAC7FF"]}
            end={[1, 1]}
            start={[0, 0]}
          ></LinearGradient>
        </View>
        <Pressable style={styles.pressable}>
          <LinearGradient
            colors={["#87DBFF", "#EAC7FF"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.pressable}
          >
            <Image
              source={{
                uri: "https://res.cloudinary.com/ivannavas/image/upload/v1722571782/red_social/icons/oycmolfzvfiej1axevuu.png",
              }}
              style={styles.googleImage}
            />
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1F1F1F",
  },
  loginTitle: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 48,
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  imageBack: {
    width: 190,
    height: 190,
    alignItems: "center",
    justifyContent: "center",
  },
  imageIconBack: {
    width: 190,
    height: 190,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "white",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  lemon: {
    width: 120,
    height: 123,
  },
  lemonName: {
    position: "absolute",
    width: 73,
    height: 73,
    top: "64%",
    left: "47%",
  },
  formContainer: {
    padding: 20,
    alignItems: "center",
  },
  input: {
    color: "#ffffff",
    width: "100%",
    fontSize: 16,
    fontWeight: "700",
  },
  borderInput: {
    width: "100%",
    height: 1,
  },
  hideIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 20,
    height: 24,
  },
  forgotContainer: {
    width: "100%",
    justifyContent: "flex-end",
  },
  forgot: {
    fontSize: 12,
    color: "rgba(255,255,255,0.7)",
    textAlign: "right",
    fontWeight: "300",
    marginTop: 9,
    marginBottom: 33,
  },
  pressable: {
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  textButtonLogin: {
    fontSize: 16,
    fontWeight: "700",
  },
  createLinkContainer: {
    width: "100%",
    marginTop: 26,
    flexDirection: "row",
  },
  createLinkMessage: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(255,255,255,0.7)",
  },
  createLinkButton: {
    marginLeft: 5,
  },
  createLink: {
    fontSize: 16,
    fontWeight: "700",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 19,
    marginBottom: 33,
  },
  line: {
    flex: 1,
    height: 1,
  },
  option: {
    width: 20,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
  },
  googleImage: {
    width: 36,
    height: 36,
  },
});
