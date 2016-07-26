import $ from 'jquery'
import THREE from './three.min'

export default class View {
  constructor() {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera( 75, $('#draw-window').width() / $('#draw-window').height(), 0.1, 200000 )
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize( $('#draw-window').width(), $('#draw-window').height() )
    $('#draw-window').append( this.renderer.domElement )
    this.ufo = {}
    this.camera.position.z = 600

    const starMap = new THREE.SphereGeometry(5000, 32, 32)
    const material = new THREE.MeshBasicMaterial()
    material.map   = THREE.ImageUtils.loadTexture('star-map.png')
    material.side  = THREE.BackSide
    this.starMesh = new THREE.Mesh(starMap, material)
    this.scene.add(this.starMesh)

    const light = []
    light[0] = new THREE.PointLight( 0xffffff, 1 , 0)
    light[0].position.set( 0, 200, 0 )
    light[1] = new THREE.PointLight( 0xffffff, 1 , 0)
    light[1].position.set( 100, 200, 1500 )
    light[2] = new THREE.PointLight( 0xffffff, 1 , 0)
    light[2].position.set( -100, -200, -100 )
    light[3] = new THREE.AmbientLight( 0xffffff, 0.2 )
    this.scene.add( light[0] )
    this.scene.add( light[1] )
    this.scene.add( light[2] )
    this.scene.add( light[3] )
  }
  
  create (model) {
    console.log("creating ufo", model.name)
    
    const geometry = new THREE.SphereGeometry( model.size, 32, 32 );
    const material = new THREE.MeshPhongMaterial();
    if(model.type == 'earth'){
        material.map = THREE.ImageUtils.loadTexture('earth-texture.jpg')
    }else if(model.type == 'moon'){
        material.map = THREE.ImageUtils.loadTexture('moon-texture.jpg')
    }else{
        material.map = THREE.ImageUtils.loadTexture('jupiter-texture.jpg')
    }
    const ufo = new THREE.Mesh( geometry, material );
    this.scene.add( ufo );
    this.ufo[model.id] = ufo
  }

  update(){
    this.starMesh.rotation.y += 0.005
  }

  render (model) {
    this.ufo[model.id].rotation.y += 0.01
    this.ufo[model.id].position.y = model.getYPosition()
    this.ufo[model.id].position.x = model.getXPosition()
    this.renderer.render( this.scene, this.camera )
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
