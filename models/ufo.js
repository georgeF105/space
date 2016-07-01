import $ from 'jquery'

export default class Ufo {
  constructor(initalVector, mass, size, colour, name){
    this.vector = initalVector //{x:_, y:_, xV:_, xV:_, yV:_}
    this.lastUpdated = Date.now() //milli seconds
    this.mass = mass
    this.size = size
    this.colour = colour
    this.name = name
    this.id = 'ufo-' + name
    this.GRAV_CONST = 2500 //???
  }
  getXPosition(){
    return this.vector.x
  }
  getYPosition(){
    return this.vector.y
  }
  refreshPosition(sun){
    // update position
    let xDist = this.vector.x - sun.getXPosition()
    let yDist = this.vector.y - sun.getYPosition()
    let radius = Math.sqrt(xDist*xDist + yDist * yDist)
    let gAcel = (sun.mass * sun.GRAV_CONST) / (radius*radius)

    let angle = Math.atan(xDist/yDist)

    let xAcel = Math.sin(angle) * gAcel
    let yAcel = Math.cos(angle) * gAcel

    $('#data-1').text('xV:' + this.vector.xV)
    $('#data-2').text('yV:' + this.vector.yV)
    $('#data-3').text('xDist:' + xDist)
    $('#data-4').text('yDist:' + yDist)
    $('#data-5').text('angle:' + angle)

    const interval = (Date.now() - this.lastUpdated)/1000

    if(yDist < 0){
      this.vector.xV += xAcel*interval
    }
    else{
      this.vector.xV -= xAcel*interval
    }
    if(yDist < 0){
      this.vector.yV += yAcel*interval
    }
    else{
      this.vector.yV -= yAcel*interval
    }

    this.vector.x += (interval * this.vector.xV)
    this.vector.y += (interval * this.vector.yV)
    this.lastUpdated = Date.now()
  }
}
