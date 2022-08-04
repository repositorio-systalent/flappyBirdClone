
import React from 'react'
import { Dimensions, Image, View } from 'react-native'

const Background = props => {
    const windowHeight = Dimensions.get('window').height
    const windowWidth = Dimensions.get('window').width


    const xBody = props.pos.x - windowWidth / 2

    return (
        <View style={{
            position: 'absolute',
            left: xBody,
            width: windowWidth,
            height: windowHeight
        }} >
            <Image source={require('../assets/caverna_fundo.jpg')} style={{
            flex: 1,
            justifyContent: "center",
            width: windowWidth,
            height: windowHeight,
            
        }}></Image>
        </View>
    )
}

export default (pos) => {

    return {
        pos,
        renderer: <Background />
    }
    
}