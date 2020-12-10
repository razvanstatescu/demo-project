import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {CameraRoutingModule} from './camera-routing.module'
import {ControlComponent} from './pages/control/control.component'
import {ListComponent} from './pages/list/list.component'
import {CameraComponent} from './pages/camera/camera.component'


@NgModule({
  declarations: [ControlComponent, ListComponent, CameraComponent],
  imports: [
    CommonModule,
    CameraRoutingModule,
  ]
})
export class CameraModule {
}
