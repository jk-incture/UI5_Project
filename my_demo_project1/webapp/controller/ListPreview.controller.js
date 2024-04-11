sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.incture.mydemoproject1.controller.ListPreview", {
            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("RouteListPreview").attachPatternMatched(this.onPatternMatched, this);
            }, 
            
            onBack: function(){
                this.getOwnerComponent().getRouter().navTo("RouteMultivaluedUI");
            }, 

            onPatternMatched: function(oEvent){
                // We can retrieve the passed argument by MultiValuedUI controller as follow:
                var index = oEvent.getParameter("arguments").Index;
                this.getView().bindElement("/aEmployees/" + index);

                // Here, we are doing element binding, i.e, in the ListPreview view, the /aEmployees/index is binded, and we can get the values by just writing the property names of this array, No need to put slash in front of property name while retrieving it.
            }
        });
    });
