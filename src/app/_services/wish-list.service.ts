import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Account } from '@app/_models';

const baseUrl = `${environment.apiUrl}`;

@Injectable({ providedIn: 'root' })
export class WishListService {
    private wishListSubject: BehaviorSubject<any>;
    public wishList: Observable<any>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.wishListSubject = new BehaviorSubject<any>(null);
        this.wishList = this.wishListSubject.asObservable();
    }

    public get wishListValue(): any {
        return this.wishListSubject.value;
    }

    addWishListItem(wishListId: string, params: any) {
        return this.http.post(`${baseUrl}/wishlist/${wishListId}`, params);
    }
}