sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.incture.mydemoproject1.controller.FormPreview", {
            onInit: function () {
                // When the FormPreview view loads, then get the property values from the model and show it in the ui. To do that, we define the function onPaternMatched in the constructor. 
                
                // this.getOwnerComponent().getRouter().getRoute("RouteFormPreview").attachPatternMatched(this.onPatternMatched, this);
            }, 
            
            onBack: function(){
                this.getOwnerComponent().getRouter().navTo("RouteFormValidation");
            }, 

            onPatternMatched: function(){
                // Get the values from the model.
                // var empId = this.getOwnerComponent().getModel().getProperty("/empid");
                // var empName = this.getOwnerComponent().getModel().getProperty("/empname");
                // var empDesig = this.getOwnerComponent().getModel().getProperty("/empdesig");
                // var empSkill = this.getOwnerComponent().getModel().getProperty("/empskill");
                // var empEmail = this.getOwnerComponent().getModel().getProperty("/empemail");
                // var empPhone = this.getOwnerComponent().getModel().getProperty("/empphone");

                // show the values in the ui (text element)
                // this.getView().byId("idTxtId").setText(empId);
                // this.getView().byId("idTxtName").setText(empName);
                // this.getView().byId("idTxtDesig").setText(empDesig);
                // this.getView().byId("idTxtSkill").setText(empSkill);
                // this.getView().byId("idTxtEmail").setText(empEmail);
                // this.getView().byId("idTxtPhone").setText(empPhone);
            }
        });
    });
