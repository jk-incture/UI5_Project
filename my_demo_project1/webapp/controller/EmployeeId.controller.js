sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.incture.mydemoproject1.controller.EmployeeId", {
            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("RouteEmployeeId").attachPatternMatched(this.onPatternMatched, this);
            },

            onBack: function(){
                this.getOwnerComponent().getRouter().navTo("RouteEmployees");
            },

            onPatternMatched: function(oEvent){
                var id = oEvent.getParameter("arguments").id;
                this.getView().bindElement("/inctureEmployees/" + id);
            }
        });
    });
