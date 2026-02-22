import { Routes } from "@angular/router";
import { QueueLayoutComponent } from "./layout/queue-layout/queue-layout";
import { QueueConcertComponent } from "./pages/queue-concert/queue-concert";

export const queueRoutes: Routes = [
    {
        path: '',
        component: QueueLayoutComponent,
        children: [
            {
                path:'queue-concert/:concertId',
                component: QueueConcertComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

export default queueRoutes;