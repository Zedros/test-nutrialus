import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function UserData({ dataUsuario }: any) {
    const { email,image, name, nutritionist, phone } = dataUsuario;

    return (
        <View style={[styles.userCard, styles.shadowBox]} >
            <View style={styles.userCardTop}>
                <Image
                    style={[styles.userImage]}
                    source={{
                        uri: image + '?' + new Date()
                    }}
                />
                <Text style={styles.nombreUsuario}>{name}</Text>

            </View>
            <View style={styles.userInformation}>
                <Text style={styles.textUserInformation}>{nutritionist}</Text>
                <Text style={styles.textUserInformation}>{email}</Text>
                <Text style={styles.textUserInformation}>{phone}</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    nombreUsuario:{
        fontSize: 18,
        fontWeight: '700',
        color:'#2B2350'
    },
    userCard: {
        position: 'relative',
        height: 350,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 30
    },
    userCardTop: {
        position: 'relative',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        backgroundColor:'#F4A261'
    },
    userInformation: {
        display: 'flex',
        height: '50%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
    },
    userImage: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom : 10,
        borderWidth: 3,
        borderColor: 'white',
    },
    shadowBox: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    textUserInformation:{
        fontSize:15,
        color:'#2B2350'

    }
})
