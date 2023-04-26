import React, {useState, useEffect} from "react";
import { TouchableOpacity, View, Text } from 'react-native'

const Botao = ({nome, onPress, corTexto, corFundo}) => {
    return ( 
        <View>
            {/*  PASSAR OS PARAMETROS*/}
            <TouchableOpacity  onPress={onPress}>
                <Text style={{color: corTexto, backgroundColor: corFundo}}>{nome}</Text>
            </TouchableOpacity>
        </View>
    );
}
 
export default Botao;
