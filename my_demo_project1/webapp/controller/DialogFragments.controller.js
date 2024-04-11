sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
    "sap/m/MessageBox",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/xml/XMLModel",
    "sap/m/MessageToast"
], (Controller, Dialog, Button, Text, MessageBox, ODataModel, XMLModel, MessageToast) => {
    "use strict";

    return Controller.extend("com.incture.mydemoproject1.controller.DialogFragments", {
        onInit: function () {

        },

        onBack: function () {
            this.getOwnerComponent().getRouter().navTo("RouteDemoView");
        },

        onDefaultDialog: function () {
            if (!this.oDefaultDialog) {
                this.oDefaultDialog = new Dialog({
                    title: "Hello Dialog",
                    content: new Text({
                        text: "Hi, I am a Dialog"
                    }),
                    beginButton: new Button({
                        // type: ButtonType.Emphasized,
                        text: "OK",
                        press: function () {
                            this.oDefaultDialog.close();
                        }.bind(this)
                    }),
                    endButton: new Button({
                        // type: ButtonType.Default,
                        text: "Close",
                        press: function () {
                            this.oDefaultDialog.close()
                        }.bind(this)
                    })
                });

                this.getView().addDependent(this.oDefaultDialog);
            }
            this.oDefaultDialog.open();
        },

        onOpenDialog() {
            // create dialog lazily
            this.pDialog ??= this.loadFragment({
                name: "com.incture.mydemoproject1.fragment.Login"
            });

            this.pDialog.then((oDialog) => oDialog.open()).catch((error) => console.log(error));
        },

        // Second method

        /*
        onOpenDialog() {
            if(!this.pDialog){
                this.pDialog = this.loadFragment({
                    name: "com.incture.mydemoproject1.fragment.Login"
                });
            }
        
            this.pDialog.then((oDialog) => oDialog.open());
        },
        */

        onCloseDialog() {
            this.pDialog.then((oDialog) => oDialog.close());
        },

        showSuccessPopup() {
            var sPONum = "293498";
            var sPlantNo = "98753";
            var oResourceModel = this.getOwnerComponent().getModel("i18n");
            var sSuccessMsg = oResourceModel.getResourceBundle().getText('msg', [sPONum, sPlantNo]);
            MessageBox.success(sSuccessMsg);
        },

        onSelectProductList(oEvent) {
            var oPath = oEvent.getParameter("listItem").getBindingContext().getPath();
            this.productDialog ??= this.loadFragment({
                name: "com.incture.mydemoproject1.fragment.Discount"
            });

            this.productDialog.then((oDialog) => {
                oDialog.open();
                oDialog.bindElement({
                    path: oPath
                })
            });
        },

        onCalculateDiscount() {
            var discount = parseFloat(this.getView().byId("idInpDiscount").getValue());
            var oModel = this.getView().getModel();
            var oPath = this.productDialog.then(oDialog => oDialog.getBindingContext().getPath());

            this.productDialog.then(oDialog => {
                oPath.then(path => {
                    var originalPrice = parseFloat(oModel.getProperty(path + "/unitPrice"));
                    var discountedPrice = originalPrice - (originalPrice * (discount / 100));
                    oModel.setProperty(path + "/discountedPrice", discountedPrice.toFixed(2));
                    oDialog.close();
                });
            });

            this.getView().byId("idInpDiscount").setValue("");
            MessageToast.show("Price has been updated");
        },

        onCloseProductDialog() {
            this.productDialog.then((oDialog => oDialog.close()))
        },

        onFormSubmit() {
            var name = this.getView().byId("idInpName").getValue();
            var age = this.getView().byId("idInpAge").getValue();
            var email = this.getView().byId("idInpEmail").getValue();
            var phone = this.getView().byId("idInpPhone").getValue();
            var address = this.getView().byId("idInpAddress").getValue();

            alert("Name : " + name + "\nAge: " + age + "\nEmail: " + email + "\nPhone: " + phone + "\nAddress: " + address);

            console.log(name, age, email, phone, address)
        },

        onOpenFormDialog() {
            this.userForm ??= this.loadFragment({
                name: "com.incture.mydemoproject1.fragment.UserForm"
            });

            this.userForm.then((oDialog) => oDialog.open());
        },

        onCloseForm() {
            this.userForm.then((oDialog) => oDialog.close());
        }, 

        getInputData(){
            var data = this.getView().byId("idInpText").getValue();
            console.log(data);
        },

        onSelectChange(oEvent){
            var item = oEvent.getParameter("selectedItem").getKey();
            console.log(item);
        }
    })
});