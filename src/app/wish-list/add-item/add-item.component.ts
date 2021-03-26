import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService, WishListService } from '@app/_services';
import { MustMatch } from '@app/_helpers';

@Component({ 
    templateUrl: 'add-item.component.html',
    // styleUrls: ['add-item.component.scss']
 })
export class WishListAddItemComponent implements OnInit {
    wishListData: any[];
    form: FormGroup;
    loading = false;
    submitted = false;
    account = this.accountService.accountValue;
    wishListId: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService,
        private wishListService: WishListService
    ) { }

    ngOnInit() {
        console.log('wish list add item: ', this.account.wishListId);
        this.form = this.formBuilder.group({
            // image: new FormControl(null, [Validators.required, requiredFileType('png')]),
            name: ['', Validators.required],
            price: ['', Validators.required],
            link: ['', Validators.required],
            message: ['']
        });

        this.wishListId = this.account.wishListId;
    }

    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        console.log('do api add item!', this.form.value);
        this.wishListService.addWishListItem(this.wishListId, this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Your item has been saved', { keepAfterRouteChange: true });
                    // this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}
