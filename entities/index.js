import Matter from "matter-js";
import Bird from "../components/Bird";
import Floor from "../components/Floor";
import { Dimensions } from 'react-native'
import { getPipeSizePosPair } from "../utils/random";
import Obstacle from "../components/Obstacle";
import Background from "../components/Background";


const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false })
    engine.gravity.y = 0.4

    let world = engine.world

    
    const pipeSizePosA = getPipeSizePosPair()
    const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.9)

    return {
        physics: {engine, world},

        Floor: Floor(world, 'green', { x: windowWidth / 2, y: windowHeight }, { height: 50, width: windowWidth }),

        background: Background({x: windowWidth / 2}),

        Bird: Bird(world, '#e1dad1', {x: 50, y: 200}, {height: 40, width: 40}),
        
        ObstacleTop1: Obstacle(world, 'ObstacleTop1', pipeSizePosA.pipeTop.pos, pipeSizePosA.pipeTop.size),
        ObstacleBottom1: Obstacle(world, 'ObstacleBottom1', pipeSizePosA.pipeBottom.pos, pipeSizePosA.pipeBottom.size),
        
        ObstacleTop2: Obstacle(world, 'ObstacleTop2', pipeSizePosB.pipeTop.pos, pipeSizePosB.pipeTop.size),
        ObstacleBottom2: Obstacle(world, 'ObstacleBottom2', pipeSizePosB.pipeBottom.pos, pipeSizePosB.pipeBottom.size),

    }
}

//video em 1:08