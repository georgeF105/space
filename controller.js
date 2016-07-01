import Ufo from './models/ufo'
import View from './view'

export default class Controller {
  constructor() {
    console.log("construct things")
    this.sun = new Ufo({x:250,y:250,xV:0,yV:0}, 100, 50, 'yellow', 'the_sun')
    this.planet = new Ufo({x:150,y:150,xV:30,yV:0 }, 100, 50, 'yellow', 'the_earth')
    this.view = new View()
    this.view.create(this.sun)
    this.view.create(this.planet)
    console.log('name',this.sun)
    // this.sun.refreshPosition()
    console.log('here')
  }
  // this.sun.refreshPosition()
  update() {
    // console.log('this.sun',this.sun)
    // this.sun.refreshPosition()
    this.planet.refreshPosition(this.sun)
    this.view.render(this.sun)
    this.view.render(this.planet)
  }
}
