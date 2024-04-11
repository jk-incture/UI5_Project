sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
], (Controller, JSONModel, formatter) => {
    "use strict";

    return Controller.extend("com.incture.mydemoproject1.controller.Second", {
        formatter: formatter,
        onInit: function () {
            var empObject = {
                "Employees": [
                    {
                        "EmpNo": 1,
                        "Name": "Alex",
                        "Gender": "Male",
                        "Country": "US",
                        "Age": 18
                    },
                    {
                        "EmpNo": 2,
                        "Name": "John",
                        "Gender": "Male",
                        "Country": "India",
                        "Age": 25
                    },
                    {
                        "EmpNo": 3,
                        "Name": "Sarah",
                        "Gender": "Female",
                        "Country": "Brazil",
                        "Age": 12
                    },
                    {
                        "EmpNo": 4,
                        "Name": "Ramesh",
                        "Gender": "Male",
                        "Country": "India",
                        "Age": 17
                    },
                    {
                        "EmpNo": 5,
                        "Name": "Neha",
                        "Gender": "Female",
                        "Country": "India",
                        "Age": 45
                    },
                    {
                        "EmpNo": 6,
                        "Name": "James",
                        "Gender": "Male",
                        "Country": "France",
                        "Age": 23
                    }
                ]
            }

            var oModel = new JSONModel();
            oModel.setData(empObject);
            this.getView().setModel(oModel, "EmployeeModel");

            var colorObj = {
                "colors":[
                    {
                        "value": 1
                    },
                    {
                        "value": 2
                    },
                    {
                        "value": 3
                    }
                ]
            }
        },

        onBack: function () {
            // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // oRouter.navTo("RouteDemoView");

            this.getOwnerComponent().getRouter().navTo("RouteDemoView");
        },

        onSubmit: function () {
            // Setting name dynamically
            var name = this.getView().byId('idIpName').getValue();
            var msg = 'Hi! Welcome ' + name;
            this.getView().byId('idTxtMsg').setText(msg);

            // Setting alignment dynamically
            var alignment = this.getView().byId('idIpAlign').getValue();
            this.getView().byId('idTxtMsg').setTextAlign(alignment);

            // Disable the input fields after submitting
            this.getView().byId('idIpName').setEnabled(false);
            this.getView().byId('idIpAlign').setEnabled(false);
        },

        onHideShow: function () {
            // debugger;
            var btnText = this.getView().byId('idBtnHideShow').getText();

            if (btnText == 'Hide') {
                this.getView().byId('idTxtMsg').setVisible(false);
                this.getView().byId('idLblName').setVisible(false);
                this.getView().byId('idIpName').setVisible(false);
                this.getView().byId('idLblAlign').setVisible(false);
                this.getView().byId('idIpAlign').setVisible(false);

                this.getView().byId('idBtnHideShow').setText('Show');
            }
            else {
                this.getView().byId('idTxtMsg').setVisible(true);
                this.getView().byId('idLblName').setVisible(true);
                this.getView().byId('idIpName').setVisible(true);
                this.getView().byId('idLblAlign').setVisible(true);
                this.getView().byId('idIpAlign').setVisible(true);

                this.getView().byId('idBtnHideShow').setText('Hide');
            }
        }
    })
});