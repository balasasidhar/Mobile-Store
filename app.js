(function () {
    var app = angular.module("MobileStore",[]);
    var iphone = {
        name:"iphone7 Plus",
        color:"apple Red",
        memory:"3GB RAM, 128 Internal Memory",
        price:75000,
        image:"img/apple_iphone_7.png",
        isSoldOut:false,
        activeTab : "Description"
    };
    var samsung = {
        name:"Samsung S8",
        color:"Black",
        memory:"6GB RAM, 64 Internal Memory",
        price:56000,
        image:"img/galaxs8.png",
        isSoldOut:false,
        activeTab : "Description"
    };

    app.controller("StoreController",function () {

        this.mobiles=[iphone,samsung,iphone,samsung];

        this.setActiveTab = function (mobile,tab) {
            mobile.activeTab = tab;
        }

    });
})();