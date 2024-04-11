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

        return Controller.extend("com.incture.odataproject.controller.View1", {
            onInit: function () {
                this.getOdataEmployees();
                this.getOdataCustomers();
            },

            getOdataEmployees() {
                let oDataModel = this.getOwnerComponent().getModel();  // If we don't give any model name, then it will pick up the default un-named model.
                let sPath = "/Employees";
                let employeeModel = this.getOwnerComponent().getModel("employees");

                oDataModel.read(sPath, {
                    success: function (successData) {
                        const myData = successData.results.map((item) => {
                            return {
                                ...item,
                                BirthDate: new Date(item.BirthDate).toLocaleDateString(),
                                HireDate: new Date(item.HireDate).toLocaleDateString()
                            };
                        });

                        employeeModel.setProperty("/data", myData);
                    },
                    error: function (errorMsg) {
                        console.log("Error : ", errorMsg);
                    }
                });
            },

            getOdataCustomers(){
                let oDataModel = this.getOwnerComponent().getModel();
                let sPath = "/Customers";
                let customerModel = this.getOwnerComponent().getModel("customers");

                oDataModel.read(sPath, {
                    success: function(data){
                        customerModel.setProperty("/data", data.results);
                    },

                    error: function(err){
                        console.log("Error: ", err);
                    }
                })
            },

            onSearchCustomer: function(event) {
                var searchValue = event.getParameter("newValue");
                var list = this.byId("customersList");
                var binding = list.getBinding("items");

                if (searchValue.trim()) {
                    binding.filter([new Filter("CustomerID", FilterOperator.Contains, searchValue)]);
                } else {
                    binding.filter([]);
                }
            },
        });
    });
