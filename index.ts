import fs from 'fs'
import { RoomsInterface } from './roomsInterfaces'

const contextFile: string = fs.readFileSync('./rooms.json', 'utf-8')
const rooms: RoomsInterface[] = JSON.parse(contextFile)

rooms.sort((roomsA: RoomsInterface, roomsB: RoomsInterface) => roomsA.rate - roomsB.rate)
const csv = rooms.map(room => {
    return `${room.roomNumber}, ${room.id}, ${room.bedType}, ${room.facilities},${room.rate}, ${room.offerPrice},${room.status}, ${room.description}`
}).join('\n')
fs.writeFileSync('./rooms.csv', `roomNumber, id, bedType, facilities, rate, offerPrice, status, description\n${csv}`, 'utf-8')