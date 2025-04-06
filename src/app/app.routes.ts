import { Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: "", redirectTo: 'portfolio', pathMatch:'full' },
    { path: "portfolio", component: PortfolioComponent },
    {path: "blog", component: BlogComponent},
    {path: "tienda", component: TiendaComponent},
    {path: "dashboard", component: DashboardComponent}
];
