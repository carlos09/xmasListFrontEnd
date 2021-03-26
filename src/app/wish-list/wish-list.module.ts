import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { WishListRoutingModule } from './wish-list-routing.module';
import { WishListComponent } from './wish-list.component';
import { WishListAddItemComponent } from './add-item/add-item.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        ReactiveFormsModule,
        WishListRoutingModule,
        MatCardModule
    ],
    declarations: [
        WishListComponent,
        WishListAddItemComponent
    ]
})
export class WishListModule { }