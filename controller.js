import Ufo from './models/ufo'
import View from './view'

export default class Controller {
  constructor() {
    console.log("construct things")
    this.view = new View()
    const v = this.view
    this.ufos = []
    // this.ufos.push(new Ufo({x:250,y:250,xV:0,yV:0}, 100, 50, '#f78303', 'the_sun'))
    this.ufos.push(new Ufo({x:100,y:100,xV:35,yV:0 }, 100, 10, 'green', 'the_earth'))
    this.ufos.push(new Ufo({x:400,y:100,xV:0,yV:35 }, 100, 10, 'green', 'the_earth2'))
    this.ufos.push(new Ufo({x:400,y:400,xV:-35,yV:0 }, 100, 10, 'green', 'the_earth3'))
    this.ufos.push(new Ufo({x:100,y:400,xV:0,yV:-35 }, 100, 10, 'green', 'the_earth4'))

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
