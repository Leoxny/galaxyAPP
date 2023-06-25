import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { colors, theme } from '../themes/theme';
import { InputBox } from '../components/InputBox';
import { AntDesign } from '@expo/vector-icons';


export const MainScreen = ({ navigation, route }) => {

    const planetas = [
        {
            id: "1",
            title: "Mercúrio",
            subTile: "O menor planeta",
            image: require('../assets/mercurio.png'),
            tela: 'MercurioScreen',
            backgroundColor: '#8b8b8b',
        },
        {
            id: "2",
            title: "Vênus",
            subTile: "Planeta mais quente",
            image: require('../assets/venus.png'),
            tela: 'VenusScreen',
            backgroundColor: '#FF2525'
        },
        {
            id: "3",
            title: "Terra",
            subTile: "Planeta com vida humana",
            image: require('../assets/terra.png'),
            tela: 'TerraScreen',
            backgroundColor: '#08AEEA'
        },
        {
            id: "4",
            title: "Marte",
            subTile: "Planeta vermelho",
            image: require('../assets/marte.png'),
            tela: 'MarteScreen',
            backgroundColor: '#FF2525'
        },
        {
            id: "5",
            title: "Júpiter",
            subTile: "O maior planeta",
            image: require('../assets/jupiter.png'),
            tela: 'JupiterScreen',
            backgroundColor: '#F76B1C'
        },
        {
            id: "6",
            title: "Saturno",
            subTile: "Planeta satelite",
            image: require('../assets/saturno.png'),
            tela: 'SaturnoScreen',
            backgroundColor: '#FFE32C'
        },
        {
            id: "7",
            title: "Urano",
            subTile: "Planeta gasoso",
            image: require('../assets/urano.png'),
            tela: 'UranoScreen',
            backgroundColor: '#52ACFF'
        },
        {
            id: "8",
            title: "Netuno",
            subTile: "Planeta mais distante",
            image: require('../assets/netuno.png'),
            tela: 'NetunoScreen',
            backgroundColor: '#0093E9'
        }
    ]
    const [planetasPopular, setPlanetasPopular] = useState(planetas.slice(0, 2));

    useEffect(() => {
        const navegacao = navigation.addListener('focus', () => {
            const random = getRandomPlanetas();
            setPlanetasPopular(random);
        });

        return navegacao;
    }, [navigation]);

    const getRandomPlanetas = () => {
        const filterPlanetas = planetas.filter((p) => p.tela !== route.name);
        const index = [];
        while (index.length < 2) {
            const randomIndex = Math.floor(Math.random() * filterPlanetas.length);
            if (!index.includes(randomIndex)) {
                index.push(randomIndex);
            }
        }
        return index.map((index) => filterPlanetas[index]);
    };


    const renderItemPopular = ({ item }) => {

        const handlePlanetPress = () => {
            navigation.navigate(item.tela);
        };

        return (
            <TouchableOpacity onPress={handlePlanetPress}>
                <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
                    <Image source={item.image} style={styles.cardImage} />
                    <View style={styles.cardTitleContainer}>
                        <Text style={theme.titleCard}>{item.title}</Text>
                        <Text style={theme.subtitleCard}>{item.subTile}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const renderItemGostar = ({ item }) => {

        const handlePlanetPress = () => {
            navigation.navigate(item.tela);
        };


        return (
            <TouchableOpacity onPress={handlePlanetPress}>
                <View style={[styles.card2, { backgroundColor: item.backgroundColor }]}>
                    <Image source={item.image} style={styles.cardImage2} />
                    <View style={styles.cardTitleContainer2}>
                        <Text style={[theme.titleCard, { fontSize: 12 }]}>{item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };


    return (
        <View style={theme.container}>
            <Text style={theme.title2}>Planetas</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={theme.title}>Vamos Explorar</Text>
                    <Text style={theme.subTitle}>Galaxia via láctea</Text>
                </View>
                <Text style={theme.circule}></Text>
            </View>
            <InputBox
                placeholder='Pesquise seu planeta favorito'
                icon='search'
            />
            <View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text style={[theme.subTitle, { fontSize: 18 }]}>Mais popular</Text>
                    <AntDesign name="arrowright" size={24} color={colors.white} style={{ marginLeft: 20 }} />
                </View>
                <FlatList
                    data={planetasPopular}
                    renderItem={renderItemPopular}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[theme.subTitle, { fontSize: 18 }]}>Você pode gostar</Text>
                    <AntDesign name="arrowright" size={24} color={colors.white} style={{ marginLeft: 20 }} />
                </View>
                <FlatList
                    data={planetas}
                    renderItem={renderItemGostar}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 300,
        width: 220,
        borderRadius: 18,
        marginBottom: 10,
        padding: 10,
        marginLeft: 10,
        marginTop: 10,
        shadowColor: 'rgba(0, 0, 0, 0.3)', 
        shadowOffset: {
          width: 0, 
          height: 2, 
        },
        shadowRadius: 4, 
        shadowOpacity: 1, 
    },
    card2: {
        height: 160,
        width: 130,
        borderRadius: 18,
        marginBottom: 10,
        padding: 10,
        marginLeft: 20,
        marginRight: -10,
        marginTop: 10,
        shadowColor: 'rgba(0, 0, 0, 0.3)', 
        shadowOffset: {
          width: 0, 
          height: 2, 
        },
        shadowRadius: 4, 
        shadowOpacity: 1, 
      },
    cardImage: {
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 18,
        width: 200,
    },
    cardImage2: {
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 18,
        width: 110,
    },
    cardTitleContainer: {
        position: 'absolute',
        bottom: 20,
        left: 10,
    },
    cardTitleContainer2: {
        position: 'absolute',
        bottom: 16,
        left: 5,
    },
});