import { Component } from '@angular/core';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    account = this.accountService.accountValue;
    wishListCount = 0;

    constructor(private accountService: AccountService) {
        console.log('[home componnent] account: ', this.account);
     }
}