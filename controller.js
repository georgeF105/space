import Ufo from './models/ufo'
import View from './view'

export default class Controller {
  constructor() {
    console.log("construct things")
    this.sun = new Ufo({x:250,y:250,xV:0,yV:0}, 100, 50, '#f78303', 'the_sun')
    this.planet = new Ufo({x:250,y:100,xV:35,yV:0 }, 100, 10, 'green', 'the_earth')
    this.planet2 = new Ufo({x:250,y:80,xV:35,yV:0 }, 100, 10, 'green', 'the_earth2')
    this.view = new View()
    this.view.create(this.sun)
    this.view.create(this.planet)
    this.view.create(this.planet2)
    console.log('name',this.sun)
    // this.sun.refreshPosition()
    console.log('here')
  }
  // this.sun.refreshPosition()
  update() {
    // console.log('this.sun',this.sun)
    // this.sun.refreshPosition()
    this.planet.refreshPosition(this.sun)
    this.planet2.refreshPosition(this.sun)
    this.view.render(this.sun)
    this.view.render(this.planet)
    this.view.render(this.planet2)
  }
}
