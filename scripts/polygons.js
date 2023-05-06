

var chosen_Number = prompt("The Fierce Falcon would like your number of sides for a polygon. Please enter a number between 0 and 10.");

var chosen_Number_Float_Form = parseFloat(chosen_Number);
var is_NOT_valid_number = isNOTvalidNumber(chosen_Number_Float_Form);

while( (is_NOT_valid_number) || (isNaN(chosen_Number_Float_Form))) {
    if (isNaN(chosen_Number_Float_Form)) 
    {
        chosen_Number = prompt("Error!! Try to put a number."); 
    } 
    
    else if (chosen_Number_Float_Form <= -10.5) //Code will run if number does not reach the minimum
    {
        chosen_Number = prompt("Error,Try Again, We need a number value to be at least greater than -10.5"); //Will attempt to ask user once more
        
    }
    else if (chosen_Number_Float_Form >= 10.5)
    {
        chosen_Number = prompt("Error,Try Again, We need a number value to be at less than 10.5"); //Will attempt to ask user once more
        
    } 
    
    chosen_Number_Float_Form = parseFloat(chosen_Number);
    is_NOT_valid_number = isNOTvalidNumber(chosen_Number_Float_Form);
    
}

    


if (chosen_Number_Float_Form > 0 ){
    alert("Your number is " + chosen_Number_Float_Form + " and your polygon is a " + returnPolygon(Math.round(chosen_Number_Float_Form)));
    document.write("Your number is " + chosen_Number_Float_Form + " and your polygon is a " + returnPolygon(Math.round(chosen_Number_Float_Form)));
}
else {
    alert("Your number is " + chosen_Number_Float_Form + " and your polygon is a " + returnPolygon(Math.round(chosen_Number_Float_Form*-1)));
    document.write("Your number is " + chosen_Number_Float_Form + " and your polygon is a " + returnPolygon(Math.round(chosen_Number_Float_Form*-1)));
}

//Functions below

function isNOTvalidNumber( entryNumber) 
{
    if(isNaN(entryNumber))
    {
        return true;

    }
    else if (entryNumber > -10.5 && entryNumber < 10.5 ) 
    {

        return false;
    }
    else {
        return true;
    }
}


function returnPolygon ( validInt) 
{
    var typesOfPolygon = [ "non-exsistentgon", "monogon", "bigon", "trigon", "tetragon", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon"];
    return typesOfPolygon[validInt];
}
