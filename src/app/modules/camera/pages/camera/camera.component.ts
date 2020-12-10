import {Component, OnInit} from '@angular/core'
import {CameraService} from 'src/app/core/services/camera.service'

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  constructor(private cameraService: CameraService) {
  }

  ngOnInit(): void {
    document.getElementById('camera-container').appendChild(this.cameraService.cameraNode)
  }
}
