import $ from 'jquery'
import THREE from './three.min'

export default class View {
  constructor() {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera( 75, $('#draw-window').width() / $('#draw-window').height(), 0.1, 3000 )
    // this.camera = new THREE.CubeCamera(1, 3000, 128)
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize( $('#draw-window').width(), $('#draw-window').height() )
    $('#draw-window').append( this.renderer.domElement )
    this.ufo = {}
    this.camera.position.z = 1000
    const light = []
    light[0] = new THREE.PointLight( 0xffffff, 1 , 0)
    light[0].position.set( 0, 200, 0 )

    light[1] = new THREE.PointLight( 0xffffff, 1 , 0)
    light[1].position.set( 100, 200, 600 )

    light[2] = new THREE.PointLight( 0xffffff, 1 , 0)
    light[2].position.set( -100, -200, -100 )
    // const light = new THREE.AmbientLight( 0xffffff )
    this.scene.add( light[0] )
    this.scene.add( light[1] )
    this.scene.add( light[2] )
    // this.camera.rotation.x = .5;
  }
  create (model) {
    console.log("creating ufo", model.name)
    
    const geometry = new THREE.SphereGeometry( model.size, 32, 32 );
    const material = new THREE.MeshPhongMaterial( { color:  0x156289 } );
    const ufo = new THREE.Mesh( geometry, material );
    this.scene.add( ufo );

    this.ufo[model.id] = ufo

    
    // this.render()

    /*$('#draw-window').append('<div class="ufo" id="' + model.id + '"></div>')
    console.log("made thing: #" + model.id)
    let xPos = model.getXPosition() - (model.size / 2)
    let yPos = model.getYPosition() - (model.size / 2)
    $('#' + model.id).css({width: model.size, height: model.size, top:yPos, left:xPos, background: model.colour, position:'absolute'})
    */
  }
  render (model) {
    //const renderF = this.render
    //requestAnimationFrame( renderF);

    // this.ufo[model.id].rotation.x += 0.01
    // this.ufo[model.id].rotation.y += 0.01
    this.ufo[model.id].position.y = model.getYPosition()
    this.ufo[model.id].position.x = model.getXPosition()

    this.renderer.render( this.scene, this.camera )

    /*let xPos = model.getXPosition() - (model.size / 2)
    let yPos = model.getYPosition() - (model.size / 2)
    // console.log("rendering ufo:", model.name)
    // console.log("        X pos:", model.getXPosition())
    // console.log("        Y pos:", model.getYPosition())
    if(xPos > $('#draw-window').width() || xPos < 0 || yPos > $('#draw-window').height() || yPos < 0){
      $('#' + model.id).css({display: 'none'})
    }
    else{
      $('#' + model.id).css({display: 'inital',top: yPos, left: xPos})
    }*/
  }
  zoomIn(){
    this.camera.position.z += 5
    console.log('camera z:',this.camera.position.z)
  }
  zoomOut(){
    this.camera.position.z -= 5
    console.log('camera z:',this.camera.position.z)
  }
}
