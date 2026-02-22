import { Routes } from "@angular/router";
import { ConcertLayoutComponent } from "./layout/conert-layout/concert-layout";
import { ConcertPage } from "./pages/concerts-list/concert-page";
import { HomePageComponent } from "./pages/home-page/home-page";

export const concertFrontRoutes: Routes = [
    {
        path: '',
        component: ConcertLayoutComponent,
        children: [
            {
                path: '',
                component: HomePageComponent
            },
            {
                path: 'concerts',
                component: ConcertPage
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export default concertFrontRoutes;