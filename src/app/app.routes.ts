import { Routes } from '@angular/router';
import {VistaDetallelsComponent} from './pages/vista-detallels/vista-detallels.component'
import {HomeComponent} from './pages/home/home.component'
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component'
import {CarritoComponent} from './pages/carrito/carrito.component'
export const routes: Routes = [
    {path: "vista-detalle", component:VistaDetallelsComponent},
    {path: "",component:HomeComponent },
    {path: "login",component:LoginComponent},
    {path: "register",component:RegisterComponent},
    {path: "carrito", component:CarritoComponent},
    {path: "**", component:HomeComponent}
];

