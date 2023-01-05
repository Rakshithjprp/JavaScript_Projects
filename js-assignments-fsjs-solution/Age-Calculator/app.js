// const container;
// const error;


function getAge() {
 
}

function calcAge(){ 
    
}

function displayAge() {
            var userinput = document.getElementById("DOB").value;
            var dob = new Date(userinput);

            //check user provide input or not
            if (userinput == null || userinput == '') {
                // document.getElementById("message").innerHTML = "**Choose a date please!";
                alert("**Choose a date please!");
                return false;
            }

            //execute if user entered a date 
            else {
                //extract and collect only date from date-time string
                var mdate = userinput.toString();
                var dobYear = parseInt(mdate.substring(0, 4), 10);
                var dobMonth = parseInt(mdate.substring(5, 7), 10);
                var dobDate = parseInt(mdate.substring(8, 10), 10);

                //get the current date from system
                var today = new Date();
                //date string after broking
                var birthday = new Date(dobYear, dobMonth - 1, dobDate);

                //calculate the difference of dates
                var diffInMillisecond = today.valueOf() - birthday.valueOf();

                //convert the difference in milliseconds and store in day and year variable        
                var year_age = Math.floor(diffInMillisecond / 31536000000);
                var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);

                //when birth date and month is same as today's date      
                if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
                    alert("Happy Birthday!");
                }

                var month_age = Math.floor(day_age / 30);
                day_age = day_age % 30;

                //  var tMnt= (month_age + (year_age*12));
                //  var tDays =(tMnt*30) + day_age;

                //DOB is greater than today?s date, generate an error: Invalid date  
                if (dob > today) {
                    document.getElementById("result").innerHTML = ("Invalid date input - Please try again!");
                }
                else {
                    //  document.getElementById("result").innerHTML = year_age + " years " + month_age + " months " + day_age + " days"

                    document.getElementById("years").innerHTML = year_age
                    document.getElementById("months").innerHTML = month_age
                    document.getElementById("days").innerHTML = day_age
                }

            }
        }
