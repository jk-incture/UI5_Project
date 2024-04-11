sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";
        return Controller.extend("com.incture.mydemoproject1.controller.FormValidation", {
            onInit: function () {

            }, 
            
            onBack: function(){
                this.getOwnerComponent().getRouter().navTo("RouteDemoView");
            }, 

            onSubmit: function(){
                var empId = this.getView().byId("idEmpId");
                var empName = this.getView().byId("idEmpName");
                var empDesig = this.getView().byId("idEmpDesig");
                var empSkill = this.getView().byId("idEmpSkill");
                var empEmail = this.getView().byId("idEmpEmail");
                var empPhone = this.getView().byId("idEmpPhone");

                var validInput = true;

                // Validating Employee ID
                if(empId.getValue() === ""){
                    // setValueState and setValueStateText are used to show the state of the input.
                    empId.setValueState("Error");
                    empId.setValueStateText("Employee ID can't be empty.");
                    validInput = false;

                    // This is mandatory field validation
                }
                else{
                    // This is data field validation

                    empId.setValueState("None");

                    // Any regular expression starts with /^ and ends with $/. The allowed characters are written inside []. So, the syntax for any regular expr. is /^[]+$/
                    var empIdRegExp = /^[0-9]+$/;

                    // If the employee ID doesn't match the regular expression or it exceeds 4 characters then error.
                    if(!empId.getValue().match(empIdRegExp) || empId.getValue().length !== 4){
                        empId.setValueState("Error");
                        empId.setValueStateText("Employee must contain 4 digits");
                        validInput = false;
                    }
                }

                // Validating Employee name
                if(empName.getValue() === ""){
                    // Mandatory Field Validation
                    empName.setValueState("Error");
                    empName.setValueStateText("Employee Name is mandatory.");
                }
                else{
                    // Data field Validation

                    empName.setValueState("None");
                    var empNameRegExp = /^[a-zA-Z ]+$/;    // This will not allow any characters other than small, capital alphabets and space.

                    if(!empName.getValue().match(empNameRegExp) || empName.getValue().length > 20){
                        empName.setValueState("Error");
                        empName.setValueStateText('Allowed characters: a-z A-Z space\nLength must not greater than 20 characters.');
                    }
                }

                // Validating Employee Designation
                if(empDesig.getValue() === ""){
                    // Mandatory Field Validation
                    empDesig.setValueState("Error");
                    empDesig.setValueStateText("Employee Designation is mandatory.");
                }
                else{
                    // Data field Validation

                    empDesig.setValueState("None");
                    var empDesigRegExp = /^[a-zA-Z ]+$/;

                    if(!empDesig.getValue().match(empDesigRegExp)){
                        empDesig.setValueState("Error");
                        empDesig.setValueStateText('Allowed characters: a-z A-Z space');
                    }
                }

                // Validating Employee Skill
                if(empSkill.getValue() === ""){
                    empSkill.setValueState("Error");
                    empSkill.setValueStateText("Employee Skill is mandatory.");
                }
                else{
                    empSkill.setValueState("None");
                    var empSkillRegExp = /^[a-zA-Z0-9 ,]+$/;

                    if(!empSkill.getValue().match(empSkillRegExp)){
                        empSkill.setValueState("Error");
                        empSkill.setValueStateText("Allowed characters: a-z A-Z 0-9 space comma");
                        validInput = false;
                    }
                }

                // Validating Employee Email
                if(empEmail.getValue() === ""){
                    empEmail.setValueState("Error");
                    empEmail.setValueStateText("Employee Email is mandatory.");
                    validInput = false;
                }
                else{
                    empEmail.setValueState("None");
                    var empEmailRegExp = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;

                    if(!empEmail.getValue().match(empEmailRegExp)){
                        empEmail.setValueState("Error");
                        empEmail.setValueStateText("Not a valid email");
                        validInput = false;
                    }
                }

                // Validating Employee Email
                if(empPhone.getValue() === ""){
                    empPhone.setValueState("Error");
                    empPhone.setValueStateText("Employee Phone no. is mandatory.");
                    validInput = false;
                }
                else{
                    empPhone.setValueState("None");
                    var empPhoneRegExp = /^[0-9]+$/;

                    if(!empPhone.getValue().match(empPhoneRegExp) || empPhone.getValue().length != 10){
                        empPhone.setValueState("Error");
                        empPhone.setValueStateText("Enter a valid phone number.");
                        validInput = false;
                    }
                }

                if(validInput){
                    alert("Form submitted successfully");

                    // Disable the form after submitting the form
                    // empId.setEnabled(false);
                    // empName.setEnabled(false);
                    // empDesig.setEnabled(false);
                    // empSkill.setEnabled(false);
                    // empEmail.setEnabled(false);
                    // empPhone.setEnabled(false);
                }
            },

            onPreview: function(){
                // Step 1 : Get the value entered by user
                // var empId = this.getView().byId("idEmpId").getValue();
                // var empName = this.getView().byId("idEmpName").getValue();
                // var empDesig = this.getView().byId("idEmpDesig").getValue();
                // var empSkill = this.getView().byId("idEmpSkill").getValue();
                // var empEmail = this.getView().byId("idEmpEmail").getValue();
                // var empPhone = this.getView().byId("idEmpPhone").getValue();

                // Step 2 : Set the user input to the model
                // this.getOwnerComponent().getModel().setProperty("/empid", empId);
                // this.getOwnerComponent().getModel().setProperty("/empname", empName);
                // this.getOwnerComponent().getModel().setProperty("/empdesig", empDesig);
                // this.getOwnerComponent().getModel().setProperty("/empskill", empSkill);
                // this.getOwnerComponent().getModel().setProperty("/empemail", empEmail);
                // this.getOwnerComponent().getModel().setProperty("/empphone", empPhone);

                // When the formpreview view will be routed, then the values should be fetched from model and displayed on the ui. To do that, we need to invoke the function in the constructor function of the FormPreview view.
                this.getOwnerComponent().getRouter().navTo("RouteFormPreview");
            }
        });
    });
