sap.ui.define([], (Controller) => {
    "use strict";

    return {
        getVoter(name, age){
            var msg = "";
            if(age >= 18){
                msg = name + " is eligible for voting.";
            }
            else{
                msg = name + " is not eligible for voting.";
            }
            return msg;
        },

        changeColor(value){
            switch(value){
                case 1: 
                    return "red";
                case 2:
                    return "blue";
                case 3:
                    return "green";
            }
        },

        changeColorBasedOnValue: function(value) {
            // Define thresholds and corresponding colors
            var thresholds = {
                low: 50,
                medium: 100,
                high: 150
            };

            // Determine color based on value
            if (value < thresholds.low) {
                return "red"; // Low value, set text color to red
            } else if (value < thresholds.medium) {
                return "orange"; // Medium value, set text color to orange
            } else if (value < thresholds.high) {
                return "green"; // High value, set text color to green
            } else {
                return "blue"; // Very high value, set text color to blue
            }
        }, 

        colorFormatter: function(value){
            if(value === 'High'){
                return 'highColor';
            }
            else if(value === 'Medium'){
                return 'mediumColor';
            }
            else{
                return 'lowColor';
            }
        }
    }
});