import {Component, OnInit} from '@angular/core'
import {Camera, CameraService} from 'src/app/core/services/camera.service'
import {Observable} from 'rxjs'
import {Router} from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  $cameras: Observable<Camera[]>

  constructor(private cameraService: CameraService, private router: Router) {
  }

  ngOnInit(): void {
    this.$cameras = this.cameraService.cameras
  }

  changeCamera(camera: Camera) {
    this.cameraService.changeCameraSource(camera)
    this.router.navigate(['/', 'camera', 'control'])
  }
}
