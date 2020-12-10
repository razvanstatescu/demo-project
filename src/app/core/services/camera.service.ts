import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

interface CustomWindow extends Window {
  WebCam: {
    // tslint:disable:ban-types
    getCameraNode: Function,
    setSource: Function,
    move: Function
  }
}

declare const window: CustomWindow

export interface Camera {
  name: string
  id: string
  source: string
}

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private http: HttpClient) {
  }

  get cameras() {
    return this.http.get<Camera[]>('http://runningios.com/screamingbox/cameras.json')
  }

  get cameraNode() {
    return window.WebCam.getCameraNode()
  }

  changeCameraSource(camera: Camera) {
    try {
      document.getElementById('cameraView').setAttribute('src', '')
      window.WebCam.setSource(camera.source)
    } catch (e) {
    }
  }

  moveCamera(x: number, y: number) {
    window.WebCam.move(x, y)
  }
}
