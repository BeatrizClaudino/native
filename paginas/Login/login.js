import React from "react";
import { View, Text } from "react-native";
import Botao from "../../componentes/botao";
import styles from './styles'

export default function Login(props){
    const logar = () => {
        alert("LOGANDO")
    }

    return(
        <View>
            {/* PASSANDO OS ATRIBUTOS INLINE */}
           <Botao nome={'Login'} style={styles.botao1} onPress={logar} corTexto={'#fff'} /> 
            {/* PEGANDO OS ATRIBUTOS DA MINHA PÁGINA STYLE E PASSANDO PARA O COMPONENTE PELA PROPS */}
           <Botao nome={'Cadastrar'} style={styles.botao2} estiloTexto={styles.texto}/>         
        </View>
         
    )
}