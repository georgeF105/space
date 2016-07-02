import Ufo from './models/ufo'
import View from './view'
import $ from 'jquery'


export default class Controller {
  constructor() {
    console.log("construct things")
    this.view = new View()
    const v = this.view
    this.ufos = []
    // this.ufos.push(new Ufo({x:250,y:250,xV:0,yV:0}, 100, 50, '#f78303', 'the_sun'))
    let halfWidth = $('#draw-window').width()/2
    let halfHeight = $('#draw-window').height()/2
    console.log('halfHeight',halfHeight)
    this.ufos.push(new Ufo({x:halfWidth - 200,y:halfHeight - 200,xV:35,yV:0 }, 100, 15, '#00effe', 'the_earth'))
    this.ufos.push(new Ufo({x:halfWidth + 200,y:halfHeight - 200,xV:0,yV:35 }, 100, 15, '#00effe', 'the_earth2'))
    this.ufos.push(new Ufo({x:halfWidth + 200,y:halfHeight + 200,xV:-35,yV:0 }, 100, 15, '#00effe', 'the_earth3'))
    this.ufos.push(new Ufo({x:halfWidth - 200,y:halfHeight + 200,xV:0,yV:-35 }, 100, 15, '#00effe', 'the_earth4'))

    this.ufos.forEach(function(ufo){
      v.create(ufo)
    })
  }
  // this.sun.refreshPosition()
  update() {
    // console.log('this.sun',this.sun)
    // this.sun.refreshPosition()
    const v = this.view
    const ufos = this.ufos
    for(let i = 0; i < this.ufos.length; i++){
    // this.ufos.forEach(function(ufo, index){
      let ufo = this.ufos[i]
      ufo.refreshPosition(ufos)
      v.render(ufo)
    }
    // })
    // this.planet.refreshPosition(this.sun)
    // this.planet2.refreshPosition(this.sun)
    // this.view.render(this.sun)
    // this.view.render(this.planet)
    // this.view.render(this.planet2)
  }
}
