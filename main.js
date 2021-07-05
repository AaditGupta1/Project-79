array_check_1=[];

function get_1(){

    for (j=1 ; j<=5 ; j++){
        var get_text_input_1=document.getElementById("input_"+j).value;
        console.log(get_text_input_1);
        array_check_1.push(get_text_input_1);
    }

    var remove_commas_1=array_check_1.join(". ");
    console.log(remove_commas_1);
    document.getElementById("paragraph_1").innerHTML=remove_commas_1;
}

array_check_2=[];

function get_2(){

    for (k=6 ; k<=10 ; k++){
        var get_text_input_2=document.getElementById(k).value;
        console.log(get_text_input_2);
        array_check_2.push(get_text_input_2);
    }

    var remove_commas_2=array_check_2.join(". ");
    console.log(remove_commas_2);
    document.getElementById("paragraph_2").innerHTML=remove_commas_2;
}