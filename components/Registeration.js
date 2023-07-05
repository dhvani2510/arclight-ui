import { StyleSheet, Text, View } from 'react-native';
export default function Registeration()
{
    return (
      <><>
        <TextInput
          style={styles.input}
          value={username}
          placeholder={"Username"}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize={"none"} />
        <TextInput
          style={styles.input}
          value={password}
          placeholder={"Password"}
          secureTextEntry
          onChangeText={(text) => setPassword(text)} />
        <Button title={"Sign Up"} onPress={() => doUserRegistration()} />
      </><><View>

        <Text>Hi</Text>
      </View></></>
      );
}