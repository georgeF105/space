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
    //this.ufos.push(new Ufo({x:0,y:0,xV:0,yV:0 }, 800, 132700000, '#00effe', 'the_sun'))
    this.ufos.push(new Ufo({x:0,y:0,xV:0,yV:0 }, 500, 40, '#00effe', 'the_earth', 'earth'))
    //this.ufos.push(new Ufo({x:150,y:0,xV:0,yV:60 }, 20, 5, '#00effe', 'the_moon', 'moon'))
    this.ufos.push(new Ufo({x:250,y:0,xV:0,yV:27 }, 5, 5, '#00effe', 'astroid1', 'astroid'))
    //this.ufos.push(new Ufo({x:0,y:250,xV:-40,yV:0 }, 0, 5, '#00effe', 'astroid2', 'astroid'))
    this.ufos.push(new Ufo({x:-250,y:0,xV:0,yV:-27 }, 5, 5, '#00effe', 'astroid3', 'astroid'))
    // this.ufos.push(new Ufo({x:0,y:-250,xV:40,yV:0 }, 0, 5, '#00effe', 'astroid4', 'astroid'))
    // this.ufos.push(new Ufo({x:400,y:300,xV:-35,yV:-5 }, 0, 5, '#00effe', 'astroid5', 'astroid'))

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
    v.update()
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
  zoomIn(){
    this.view.zoomIn()
  }
  zoomOut(){
    this.view.zoomOut()
  }
}
