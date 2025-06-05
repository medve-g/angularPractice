import { Routes } from '@angular/router';
import { LogInPage } from './pages/log-in-page/log-in-page';
import { WelcomePage } from './pages/welcome-page/welcome-page';
import { ModifyPostPage } from './pages/modify-post-page/modify-post-page';
import { PostsPage } from './pages/posts-page/posts-page';

export const routes: Routes = [
    {path: "", component: LogInPage},
    {path: "welcome", component: WelcomePage},
    {path: "modify/:id", component: ModifyPostPage},
    {path: "posts", component: PostsPage}
];
