sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.incture.mydemoproject1.controller.DemoView", {
            // Lifecycle methods
            onInit: function () {
                // alert("View is created");

                var oLocalModel = new JSONModel({
                    "modelData": "testData",
                    "data": [
                        {
                            "name": "Jyotiranjan",
                            "age": 22
                        },
                        {
                            "name": "XYZ",
                            "age": 19
                        }
                    ]
                });

                this.getView().setModel(oLocalModel, "oLocalModel");
                // debugger;

                var users = new JSONModel();
                this.getView().setModel(users, "users");

                //set bball model
                fetch("https://jsonplaceholder.typicode.com/users")
                    .then(response => response.json())
                    .then(result => {
                        users.setData(result);
                        // console.log(result)
                    })
                    .catch(error => console.log('error : ', error));
            },

            onBeforeRendering: function () {
                // alert("View before rendering");
            },

            onAfterRendering: function () {
                // alert("View has been rendered");
            },

            onExit: function () {
                // alert("View is destroyed");
            },

            onBtnClick: function (event) {
                // window.alert("Hello welcome to Incture")
                // debugger;
                sap.m.MessageToast.show("Hello, Welcome to Incture");
            },

            onDestroyView: function () {
                this.getView().destroy();
            },

            onShow: function () {
                sap.m.MessageToast.show("This is show button")
            },

            onPasswordSubmit: function (event) {
                // console.log(event);
                // debugger;
            },

            onRouteSecondView: function () {
                this.getOwnerComponent().getRouter().navTo("RouteSecondView");
            },

            onRouteSecondViewWithParams: function () {
                this.getOwnerComponent().getRouter().navTo("RouteSecondViewParameter", {
                    id: "Samsung S3"
                });
            },

            onRouteSecondViewWithQuery: function () {
                this.getOwnerComponent().getRouter().navTo("RouteSecondViewQuery", {
                    "?query": {
                        "modelName": "Samsung",
                        "version": "S3"
                    }
                });
            },

            onRouteLayouts: function () {
                this.getOwnerComponent().getRouter().navTo("RouteLayouts");
            },

            onRouteFormValidation: function () {
                this.getOwnerComponent().getRouter().navTo("RouteFormValidation")
            },

            onRouteMultivaluedUI: function () {
                this.getOwnerComponent().getRouter().navTo("RouteMultivaluedUI");
            },

            onRouteF4Help: function () {
                this.getOwnerComponent().getRouter().navTo("RouteF4Help");
            },

            onRouteCarBooking: function () {
                this.getOwnerComponent().getRouter().navTo("RouteCarBooking");
            },

            onRouteDialogFragments: function () {
                this.getOwnerComponent().getRouter().navTo("RouteDialogFragments");
            },

            onRouteHCF: function(){
                this.getOwnerComponent().getRouter().navTo("RouteHCF");
            }, 

            onRouteI18nForm: function(){
                this.getOwnerComponent().getRouter().navTo("RouteI18nForm");
            },

            onRouteEmployees: function(){
                this.getOwnerComponent().getRouter().navTo("RouteEmployees");
            }, 

            onRouteLogin: function(){
                this.getOwnerComponent().getRouter().navTo("RouteLogin");
            }
        });
    });
