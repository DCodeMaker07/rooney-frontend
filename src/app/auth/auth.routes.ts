import { Routes } from "@angular/router";
import { AuthLayout } from "./layout/auth-layout/auth-layout";
import { RegisterPage } from "./pages/register-page/register-page";
import { LoginPage } from "./pages/login-page/login-page";

export const authRoutes: Routes = [
    {
        path: '',
        component: AuthLayout,
        children: [
            {
                path: 'register',
                component: RegisterPage
            },
            {
                path: 'login',
                component: LoginPage
            },
            {
                path: '**',
                redirectTo: 'login'
            }
        ]
    },

];

export default authRoutes;