import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../profile/layout.component';
import { WishListAddItemComponent } from './add-item/add-item.component';
import { WishListComponent } from './wish-list.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: ':id', component: WishListComponent },
            { path: ':id/add', component: WishListAddItemComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    // declarations: [WishListComponent]
})
export class WishListRoutingModule { }