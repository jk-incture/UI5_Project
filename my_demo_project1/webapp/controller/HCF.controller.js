sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast"
], function (Controller, Fragment, MessageToast) {
    "use strict";

    return Controller.extend("com.incture.mydemoproject1.controller.HCF", {
        onInit: function () {
            Fragment.load({
                name: "com.incture.mydemoproject1.fragment.Header",
                controller: this
            }).then(function (oHeader) {
                this.getView().byId("page").addDependent(oHeader);
            }.bind(this));

            Fragment.load({
                name: "com.incture.mydemoproject1.fragment.Content",
                controller: this
            }).then(function (oContent) {
                this.getView().byId("page").addDependent(oContent);
            }.bind(this));

            Fragment.load({
                name: "com.incture.mydemoproject1.fragment.Footer",
                controller: this
            }).then(function (oFooter) {
                this.getView().byId("page").addDependent(oFooter);
            }.bind(this));

            var oModel = new sap.ui.model.json.JSONModel({
                value: 'High'
            });

            this.getView().setModel(oModel, "model");
        },

        show(){
            MessageToast.show("Hey!! How are you");
        },

        onBack(){
            this.getOwnerComponent().getRouter().navTo("RouteDemoView");
        }
    });
});