sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("com.incture.mydemoproject1.controller.Employees", {
            onInit: function () {
            
            },

            onBack: function(){
                this.getOwnerComponent().getRouter().navTo("RouteDemoView");
            },

            onSelectEmployee: function(oEvent){
                var sPath = oEvent.getParameter("listItem").getBindingContext().getPath();
                var id = sPath.split('/')[2];

                this.getOwnerComponent().getRouter().navTo("RouteEmployeeId", {
                    id: id
                });
            },

            onSearchEmployee: function(oEvent){
                var value = oEvent.getParameter("newValue");
                var aFilters = [];

                if(value !== ""){
                    var oFilter = new Filter("Name", FilterOperator.Contains, value);
                    aFilters.push(oFilter);
                }
                this.getView().byId("idTableEmp").getBinding("items").filter(aFilters);
            },
        });
    });
