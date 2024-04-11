sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, Sorter) {
        "use strict";
        return Controller.extend("com.incture.mydemoproject1.controller.F4Help", {
            onInit: function () {

            },

            onBack: function () {
                this.getOwnerComponent().getRouter().navTo("RouteDemoView");
            },

            onSearchEmpTable: function(oEvent){
                var value = oEvent.getParameter("newValue");
                var aFilters = [];

                if(value !== ""){
                    var oFilter = new Filter("empname", FilterOperator.Contains, value);
                    aFilters.push(oFilter);
                }

                this.getView().byId("idTableEmp").getBinding("items").filter(aFilters);
            },

            sortAscTable: function(){
                var oSorter = new Sorter("empname", false);
                this.getView().byId("idTableEmp").getBinding("items").sort(oSorter);
            },

            sortDescTable: function(){
                var oSorter = new Sorter("empname", true);
                this.getView().byId("idTableEmp").getBinding("items").sort(oSorter);
            },

            onF4HelpPress: function(){
                // There are two ways of defining a variable in ui5. 1st one is using var - local or block scope, 2nd method is by using this._ : It has global scope.

                // If the dialog is not created, then create it for the first time. The sap.ui.xmlfragment takes 3 arguments, first one is the id of the view, second argument is the path of the fragment, and 3rd one is the controller : the controller of a view and its corersponding controller is same.

                if(!this._dialog){
                    this._dialog = sap.ui.xmlfragment(this.getView().getId(), "com.incture.mydemoproject1.view.EmpF4Help", this);
                    this.getView().addDependent(this._dialog);
                }
                this._dialog.open();

                // Another method of creating and opening a fragment

                // this.pDialog ??= this.loadFragment({
                //     name: "com.incture.mydemoproject1.view.EmpF4Help"
                // });

                // this.pDialog.then((oDialog) => oDialog.open());
            },

            onClose: function(){
                this._dialog.close();
                // this.pDdialog.then((oDialog) => oDialog.close());
            }, 

            onSelectEmpFromF4: function(oEvent){
                var empId = oEvent.getParameter("listItem").getBindingContext().getProperty("empid");
                this.getView().byId("idIpEmpId").setValue(empId);
                this.onClose();
            }
        });
    });