function validate()
      {
        var x = document.getElementById("mob").value;
        var y = document.getElementById("pass").value;
        var z = document.getElementById("cpass").value;
        if(x.length != 10)
         {
           alert("Enter the correct phone number")
           return false;
         }
         else if(y !=z )
         {
           alert("Passwprd and confirm password do not match")
           return false;
         }
        else{
          alert("You have complete your registration successfully")
        }
        return true;
    }