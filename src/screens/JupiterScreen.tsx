import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { colors, theme } from '../themes/theme';
import { AntDesign } from '@expo/vector-icons';

export const JupiterScreen = ({ navigation }) => {
    return (
        <View style={theme.container}>

            <ScrollView>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ marginTop: 70 }}>
                        <AntDesign name="arrowleft" size={25} color={colors.white} />
                    </View>
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../assets/jupiter.png')} style={theme.image} />
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={theme.title}>Júpiter</Text>
                    <Text style={theme.subTitle}>O maior planeta</Text>
                </View>

                <View style={[theme.line, { marginTop: 20 }]} />

                <View>
                    <Text style={theme.subTitle}>Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol.
                        Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno</Text>
                </View>

                <View style={[theme.line, { marginTop: 20 }]} />

                <View style={{ marginTop: 10 }}>
                    <Text style={theme.title}>Galeria</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image
                        source={require('../assets/images/jupiter1.jpg')}
                        style={styles.image}
                    />
                    <Image source={require('../assets/images/jupiterw.jpg')} style={styles.image}
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