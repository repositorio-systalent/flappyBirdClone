import Matter from 'matter-js'
import React from 'react'
import { View } from 'react-native'

const Obstacle = props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody / 2
    const yBody = props.body.position.y - heightBody / 2

    const borderBottom = props.body.label.indexOf('Bottom') === -1 ? 100 : 0
    const borderTop = props.body.label.indexOf('Bottom') === -1 ? 0 : 100
    return (
        <View style={{
            borderWidth: 1,
            borderColor: '#080807',
            backgroundColor: '#7c6749',
            borderStyle: 'solid',
            position: 'absolute',
            borderTopLeftRadius: borderTop, 
            borderTopRightRadius: borderTop,
            borderBottomLeftRadius: borderBottom, 
            borderBottomRightRadius: borderBottom,
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody
        }} >
        </View>
    )
}

export default (world, label, pos, size) => {
    const initialObstacle = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {
            label,
            isStatic: true
        }
    )
    Matter.World.add(world, initialObstacle)

    return {
        body: initialObstacle,
        pos,
        renderer: <Obstacle />
    }
}