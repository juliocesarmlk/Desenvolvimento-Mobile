import { StyleSheet, Text, TextInput, View } from "react-native";

function CaixaLogin(){
    return(
        <View style={styles.screenFull}>
            <Text style={styles.textTitulo}>
                    Lista de Sonhos
            </Text>
            <View style={styles.screen}>
                <View style={styles.login}>
                    <Text style={styles.textPrincipal}>Fazer login</Text>

                    <Text style={styles.textSecundario}>Email</Text>
                    
                    <TextInput style={styles.InputEmail}/>
                    
                    <Text style={styles.textSecundario}>Senha</Text>
                    
                    <TextInput style={styles.InputSenha}/>
            </View>
        </View>
    </View>
    );
}

export default CaixaLogin;

const styles = StyleSheet.create({
    login: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 15,
        backgroundColor: "#ADD8E6"
    },
    InputEmail: {
        marginBottom: 10,
        backgroundColor: "white",
        borderRadius: 6,
        height: 25
    },
    InputSenha: {
        marginBottom: 10,
        backgroundColor: "white",
        borderRadius: 6,
        height: 25
    },
    textPrincipal: {
        alignSelf: "center",
        fontSize: 20,
        marginBottom: 20
    },
    textSecundario: {
        marginTop: 25,
        alignSelf: "left",
        fontSize: 14,
        color: '#555555'
    },
    textTitulo: {
        alignSelf: "center",
        fontSize: 25,
        paddingTop: 20,
        fontFamily: "Cambria",
        color: "#000080"
    },
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: -20
    },

    screenFull: {
        flex: 1
    }
    })