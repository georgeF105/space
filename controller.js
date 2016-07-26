import Ufo from './models/ufo'
import View from './view'
import $ from 'jquery'


export default class Controller {
  constructor() {
    console.log("construct things")
    this.view = new View()
    const v = this.view
    this.ufos = []
    let halfWidth = $('#draw-window').width()/2
    let halfHeight = $('#draw-window').height()/2
    console.log('halfHeight',halfHeight)
    var opt = Math.floor(Math.random()*5) + 1

    switch(opt) {
      case 1:
        this.ufos.push(new Ufo({x:0,y:0,xV:0,yV:0 }, 500, 35, '#00effe', 'the_earth', 'earth'))
        this.ufos.push(new Ufo({x:250,y:0,xV:0,yV:27 }, 5, 5, '#00effe', 'astroid1', 'astroid'))
        this.ufos.push(new Ufo({x:-250,y:0,xV:0,yV:-27 }, 5, 5, '#00effe', 'astroid3', 'astroid'))
        break
      case 2:
        this.ufos.push(new Ufo({x:0,y:0,xV:0,yV:0 }, 500, 35, '#00effe', 'the_earth', 'earth'))
        this.ufos.push(new Ufo({x:250,y:0,xV:0,yV:35 }, 20, 8, '#00effe', 'astroid1', 'moon'))
        this.ufos.push(new Ufo({x:-500,y:300,xV:40,yV:0 }, 5, 5, '#00effe', 'astroid3', 'astroid'))
        break
      case 3:
        this.ufos.push(new Ufo({x:0,y:0,xV:0,yV:0 }, 500, 40, '#00effe', 'the_earth', 'earth'))
        this.ufos.push(new Ufo({x:250,y:0,xV:0,yV:30 }, 5, 5, '#00effe', 'astroid1', 'astroid'))
        this.ufos.push(new Ufo({x:-250,y:0,xV:0,yV:-30 }, 5, 5, '#00effe', 'astroid2', 'astroid'))
        this.ufos.push(new Ufo({x:0,y:250,xV:-30,yV:0 }, 5, 5, '#00effe', 'astroid3', 'astroid'))
        this.ufos.push(new Ufo({x:0,y:-250,xV:30,yV:0 }, 5, 5, '#00effe', 'astroid4', 'astroid'))
        break
      case 4:
        this.ufos.push(new Ufo({x:0,y:0,xV:0,yV:0 }, 500, 40, '#00effe', 'the_earth', 'earth'))
        this.ufos.push(new Ufo({x:250,y:0,xV:0,yV:30 }, 5, 5, '#00effe', 'astroid1', 'astroid'))
        this.ufos.push(new Ufo({x:-250,y:0,xV:0,yV:-30 }, 5, 5, '#00effe', 'astroid2', 'astroid'))
        this.ufos.push(new Ufo({x:0,y:250,xV:30,yV:0 }, 5, 5, '#00effe', 'astroid3', 'astroid'))
        this.ufos.push(new Ufo({x:0,y:-250,xV:-30,yV:0 }, 5, 5, '#00effe', 'astroid4', 'astroid'))
        break
      default:
                this.ufos.push(new Ufo({x:0,y:0,xV:0,yV:0 }, 500, 100, '#00effe', 'the_earth', 'earth'))
        break
    }
    this.ufos.forEach(function(ufo){
      v.create(ufo)
    })
  }
  update() {
    const v = this.view
    const ufos = this.ufos
    v.update()
    for(let i = 0; i < this.ufos.length; i++){
      let ufo = this.ufos[i]
      ufo.refreshPosition(ufos)
      v.render(ufo)
    }
  }
  zoomIn(){
    this.view.zoomIn()
  }
  zoomOut(){
    this.view.zoomOut()
  }
}
