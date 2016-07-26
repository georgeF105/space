import $ from 'jquery'

export default class Ufo {
  constructor(initalVector, mass, size, colour, name, type){
    this.vector = initalVector //{x:_, y:_, xV:_, xV:_, yV:_}
    this.lastUpdated = Date.now() //milli seconds
    this.mass = mass
    this.size = size
    this.colour = colour
    this.name = name
    this.id = 'ufo-' + name
    this.GRAV_CONST = 1000
    this.type = type
  }
  getXPosition(){
    return this.vector.x
  }
  getYPosition(){
    return this.vector.y
  }
  refreshPosition(ufos){
    // update position
    const xPos = this.vector.x
    const yPos = this.vector.y
    let xAcel = 0
    let yAcel = 0
    for(let i = 0; i < ufos.length; i++){
      let ufo = ufos[i]
      if(!(ufo.vector.x == xPos && ufo.vector.y == yPos)){
        let xDist = xPos - ufo.getXPosition()
        let yDist = yPos - ufo.getYPosition()
        let radius = Math.sqrt(xDist*xDist + yDist * yDist)
        let gAcel = (ufo.mass * ufo.GRAV_CONST) / (radius*radius)
        let angle = Math.atan(xDist/yDist)
        if(yDist > 0){
          angle = angle + Math.PI
        }
        xAcel += Math.sin(angle) * gAcel
        yAcel += Math.cos(angle) * gAcel
      }
    }

    const interval = (Date.now() - this.lastUpdated) / 500
    this.vector.xV += xAcel*interval
    this.vector.yV += yAcel*interval
    this.vector.x += (interval * this.vector.xV)
    this.vector.y += (interval * this.vector.yV)
    this.lastUpdated = Date.now()
  }
}
