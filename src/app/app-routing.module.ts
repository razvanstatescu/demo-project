import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'


const routes: Routes = [
  {
    path: 'camera',
    loadChildren: () => import('./modules/camera/camera.module').then(m => m.CameraModule)
  },
  {
    path: '**',
    redirectTo: 'camera'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
