import { Routes } from '@angular/router';
import { LogInPage } from './pages/log-in-page/log-in-page';
import { WelcomePage } from './pages/welcome-page/welcome-page';

export const routes: Routes = [
    {path: "", component: LogInPage},
    {path: "welcome", component: WelcomePage}
];
