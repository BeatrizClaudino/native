import { View, Text, TouchableOpacity, StyleSheet, Image, Button} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Botao from '../../componentes/botao';
import {styled, withExpoSnack} from 'nativewind'

const StyledView = styled(View)

function Inicial({navigation}) {


  return (
    <>
      <StyledView className="bg-slate-600">
      {/* <StyledView style={{backgroundColor:"#000"}}> */}
        {/* <LinearGradient colors={['#3734B9', '#4552C5', '#6ACDE2','#6ACDE1']}> */}
          <StyledView>
            <StyledView>
              <Text>
                A administração do seu dinheiro sem complicação
              </Text>
            </StyledView>
            <Botao nome={'Criar a minha conta'} onPress={()=>navigation.navigate('Login')}/> 
            <StyledView>
              <Image
                source={require('../../assets/mulherCartao.png')}> 
              </Image>
            </StyledView>
          </StyledView>
        {/* </LinearGradient>   */}
      </StyledView>
    </>
  )
}
export default withExpoSnack(Inicial)



