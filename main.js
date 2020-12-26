//empty array
name_of_the_student_array = [];
    
function submit()
{
    //empty variable
    var display_student_array = [];

    //for loop because there are four names
    for (var j = 1; j <= 4; j++) 
    {
        //variable declaration
        var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }

    console.log(name_of_the_student_array);
    
    //variable for getting length of array
    var lenght_of_name_of_students_array = name_of_the_student_array.length;
    console.log(lenght_of_name_of_students_array);

    //for loop to push variable values (names) in array
    for (var k = 0; k < lenght_of_name_of_students_array; k++) 
    {
        display_student_array.push("<h4>NAME - "+ name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array);
    }

    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    //variable declaration for removing commas
    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    //variable for sorting names
    var display_student_array_sorting = [];

    //variable for getting length of array
    var lenght_of_name_of_students_array = name_of_the_student_array.length;
    console.log(lenght_of_name_of_students_array);

    for (var k = 0; k < lenght_of_name_of_students_array; k++) 
    {
        display_student_array_sorting.push("<h4>NAME - " + name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }

    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}


//Additional activity
function new_update()
{
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + name_of_the_student_array +"</h1>";
}

