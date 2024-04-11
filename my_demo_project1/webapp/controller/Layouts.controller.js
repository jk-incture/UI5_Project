sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.incture.mydemoproject1.controller.Layouts", {
            // Lifecycle methods
            onInit: function () {

            },

            onBack: function(){
                this.getOwnerComponent().getRouter().navTo("RouteDemoView")
            }
        });
    });
