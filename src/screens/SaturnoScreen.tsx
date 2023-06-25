import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { colors, theme } from '../themes/theme';
import { AntDesign } from '@expo/vector-icons';

export const SaturnoScreen = ({ navigation }) => {
    return (
        <View style={theme.container}>

            <ScrollView>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ marginTop: 70 }}>
                        <AntDesign name="arrowleft" size={25} color={colors.white} />
                    </View>
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../assets/saturno.png')} style={theme.image} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={theme.title}>Saturno</Text>
                    <Text style={theme.subTitle}>Planeta satelite</Text>
                </View>

                <View style={[theme.line, { marginTop: 20 }]} />

                <View>
                    <Text style={theme.subTitle}>Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter.
                        Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas</Text>
                </View>

                <View style={[theme.line, { marginTop: 20 }]} />

                <View style={{ marginTop: 10 }}>
                    <Text style={theme.title}>Galeria</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image
                        source={require('../assets/images/saturno1.jpg')}
                        style={styles.image}
                    />
                    <Image source={require('../assets/images/saturno2.jpg')} style={styles.image}
                    />
                </View>
                
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 180,
        height: 180,
        marginTop: 10,
        borderRadius: 10
    },
});