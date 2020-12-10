import {Component, OnInit} from '@angular/core'
import {CameraService} from 'src/app/core/services/camera.service'

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  clientX: number
  clientY: number

  constructor(private cameraService: CameraService) {
  }

  ngOnInit(): void {
    document.getElementById('controller').addEventListener('touchmove',
      e => this.onDrag(e.touches[0])
    )
    document.getElementById('controller').addEventListener('touchstart',
      e => this.onMouseDown(e.touches[0])
    )
    document.getElementById('controller').addEventListener('touchend',
      e => this.onMouseUp()
    )
  }

  onDrag(e) {
    if (e.preventDefault) e.preventDefault()
    if (this.clientX && this.clientY) {
      const difX = this.clientX - e.clientX
      const difY = this.clientY - e.clientY
      const speed = 20
      this.cameraService.moveCamera(difX / -speed, difY / speed)
    }
  }

  onMouseDown(e) {
    document.querySelector('body').classList.add('overflow-hidden')
    this.clientX = e.clientX
    this.clientY = e.clientY
  }

  onMouseUp() {
    document.querySelector('body').classList.remove('overflow-hidden')
    this.clientX = null
    this.clientY = null
  }

  test() {
    console.log('test')
  }
}
