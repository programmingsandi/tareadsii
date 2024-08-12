import { Routes } from '@angular/router';
import {MiembrosComponent} from "./Components/miembros-component/miembros.component";
import {UsuariosComponent} from "./Components/usuarios/usuarios.component";
import {PagosComponent} from "./Components/pagos/pagos.component";
import {DocumentosComponent} from "./Components/documentos/documentos.component";
import {CertificacionesComponent} from "./Components/certificaciones/certificaciones.component";
import {RenovacionesComponent} from "./Components/renovaciones/renovaciones.component";
import {InicioComponent} from "./Components/inicio/inicio.component";

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'miembros', component: MiembrosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'pagos', component: PagosComponent },
  { path: 'documentos', component: DocumentosComponent },
  { path: 'certificaciones', component: CertificacionesComponent },
  { path: 'renovaciones', component: RenovacionesComponent },
  { path: 'inicio', component: InicioComponent }
];
