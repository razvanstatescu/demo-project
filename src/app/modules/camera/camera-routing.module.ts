import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ListComponent} from 'src/app/modules/camera/pages/list/list.component'
import {ControlComponent} from 'src/app/modules/camera/pages/control/control.component'
import {CameraComponent} from 'src/app/modules/camera/pages/camera/camera.component'


const routes: Routes = [
  {
    path: '',
    component: CameraComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'control',
        component: ControlComponent,
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CameraRoutingModule {
}
