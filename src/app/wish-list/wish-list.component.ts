import { Component, OnInit } from '@angular/core';


@Component({ 
    templateUrl: 'wish-list.component.html',
    styleUrls: ['wish-list.component.scss']
 })
export class WishListComponent implements OnInit {
    wishListData: any[];

    constructor() { }

    ngOnInit() {
        this.wishListData = wishListDummy;
        console.log('wishListData: ', this.wishListData);
    }
}

export const wishListDummy = [ {
    id: 1,
    title: "Security Lock",
    link: "https://www.amazon.com/dp/B07KQY3MWL/ref=s9_acsd_al_bw_c2_x_3_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-4&pf_rd_r=FJ6SZ0QXXX15SJZX45NN&pf_rd_t=101&pf_rd_p=0db94890-e8d9-4c45-ae0b-d1b924b2cad9&pf_rd_i=21216824011",
    imgSrc: "",
    topPick: false,
    price: 14.32,
    comments: "look out for sales!"
}, {
    id: 3,
    title: "Dress",
    link: "https://www.target.com/p/women-s-short-sleeve-t-shirt-dress-universal-thread/-/A-81475746?preselect=81317184#lnk=sametab",
    imgSrc: "",
    topPick: true,
    price: 29.99,
    comments: "my fav"
}]