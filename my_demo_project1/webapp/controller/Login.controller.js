sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.incture.mydemoproject1.controller.Login", {
            onInit: function () {
            
            },

            onBack: function(){
                this.getOwnerComponent().getRouter().navTo("RouteDemoView");
            },

            onLogin: function(){
                var valid = true;

                var email = this.getView().byId("idInpUsername");
                var password = this.getView().byId("idInpPassword");

                // let emailVal = email.getValue();
                // let passwordVal = password.getValue();
                // console.log(emailVal, passwordVal);

                // Validating email
                if(email.getValue() === ""){
                    email.setValueState("Error");
                    email.setValueStateText("Email can't be empty");
                    valid = false;
                }
                else{
                    email.setValueState("None");

                    let regexEmail = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;

                    if(!email.getValue().match(regexEmail)){
                        email.setValueState("Error");
                        email.setValueStateText("Email not valid.");
                        valid = false;
                    }
                }

                // Validating password
                if(password.getValue() === ""){
                    password.setValueState("Error");
                    password.setValueStateText("Password can't be empty.");
                    valid = false;
                }
                else{
                    password.setValueState("None");
                }

                if(valid){
                    this.getOwnerComponent().getRouter().navTo("RouteSplitContainer");
                    email.setValue("");
                    password.setValue("");
                }
            }
        });
    });
