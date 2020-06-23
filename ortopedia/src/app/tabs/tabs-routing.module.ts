import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children:[
        {
          path: '',
          loadChildren: () =>
          import('../tab1/tab1.module').then(m => m.Tab1PageModule)
        }
        ]
      },
      {
        path: 'tab2',
        children:[
          {
            path: '',
            loadChildren: () =>
            import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
          path: 'eventos',
          loadChildren: () =>
          import('../pages/eventos/eventos.module').then( m => m.EventosPageModule)
          },
          {
          path: 'membresia',
          loadChildren: () =>
          import('../pages/membresia/membresia.module').then( m => m.MembresiaPageModule)
          },
          {
          path: 'cursos',
          loadChildren: () =>
          import('../pages/cursos/cursos.module').then( m => m.CursosPageModule)
          },
          {
          path: 'webinars',
          loadChildren: () =>
          import('../pages/webinars/webinars.module').then( m => m.WebinarsPageModule)
          },
          {
          path: 'publicaciones',
          loadChildren: () =>
          import('../pages/publicaciones/publicaciones.module').then( m => m.PublicacionesPageModule)
          },
          {
          path: 'socios',
          loadChildren: () =>
          import('../pages/socios/socios.module').then( m => m.SociosPageModule)
          },
          {
          path: 'consejo',
          loadChildren: () =>
          import('../pages/consejo/consejo.module').then( m => m.ConsejoPageModule)
          },
          {
          path: 'contacto',
          loadChildren: () =>
          import('../pages/contacto/contacto.module').then( m => m.ContactoPageModule)
          },
          {
          path: 'biblio',
          loadChildren: () =>
          import('../pages/biblio/biblio.module').then( m => m.BiblioPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children:[
          {
            path:'',
            loadChildren: () =>
            import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          },
          {
          path: 'login',
          loadChildren: () =>
          import('../pages/login/login.module').then( m => m.LoginPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
