
import{Routes, RouterModule} from '@angular/router'
import { GeneratorComponent } from './generator/generator.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';

const routes: Routes=[{
    path:'',
    component:GeneratorComponent
},{
    path:'about',
    component:AboutComponent
}];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
