console.log('starting space!!')
import Controller from './controller'
import $ from 'jquery'

const controller = new Controller()

setInterval(update,50)

function update(){
  controller.update()
}

$('body').bind('mousewheel', function(e) {
  // console.log('mousewheel e:', e.originalEvent.wheelDelta)
  if(e.originalEvent.wheelDelta > 0)
    controller.zoomOut()
  else
    controller.zoomIn()
})