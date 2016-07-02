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
    this.GRAV_CONST = 5000 //???
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
    //let ufo = ufos[0]
    // ufos.forEach(function(ufo){
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
    // })

    // $('#data-1').text('xV:' + this.vector.xV)
    // $('#data-2').text('yV:' + this.vector.yV)
    // $('#data-3').text('xDist:' + xDist)
    // $('#data-4').text('xAcel:' + yAcel)
    // // $('#data-5').text('angle:' + angle)

    const interval = (Date.now() - this.lastUpdated)/1000
    this.vector.xV += xAcel*interval
    this.vector.yV += yAcel*interval
    this.vector.x += (interval * this.vector.xV)
    this.vector.y += (interval * this.vector.yV)
    this.lastUpdated = Date.now()
  }
}
