console.log('starting space!!')
import Controller from './controller'

const controller = new Controller()

setInterval(update,50)

function update(){
  controller.update()
}
