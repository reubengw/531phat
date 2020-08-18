let bench,ohp,squat,deadlift,info,cycle1info,cycle2info,cycle3info,cycle4info;

function loadbasevalues(){
    bench = document.getElementById("bench_input").value;
    ohp = document.getElementById("ohp_input").value; 
    deadlift = document.getElementById("deadlift_input").value;
    squat = document.getElementById("squat_input").value;
}

function displaylifts(){
    d = document;
    loadbasevalues();
    lifts = calculateLifts();
    console.log(lifts);
    d.getElementById("main_display").style.display = "block";
    

    d.getElementById("week1_bench").innerHTML = "Bench: " + lifts.cycle1.bench;
    d.getElementById("week1_ohp").innerHTML = "OHP: " + lifts.cycle1.ohp;
    d.getElementById("week1_deadlift").innerHTML = "Deadlift: " + lifts.cycle1.deadlift;
    d.getElementById("week1_squat").innerHTML = "Squat: " + lifts.cycle1.squat;

    d.getElementById("week2_bench").innerHTML = "Bench: " + lifts.cycle2.bench;
    d.getElementById("week2_ohp").innerHTML = "OHP: " + lifts.cycle2.ohp;
    d.getElementById("week2_deadlift").innerHTML = "Deadlift: " + lifts.cycle2.deadlift;
    d.getElementById("week2_squat").innerHTML = "Squat: " + lifts.cycle2.squat;
    
    d.getElementById("week3_bench").innerHTML = "Bench: " + lifts.cycle3.bench;
    d.getElementById("week3_ohp").innerHTML = "OHP: " + lifts.cycle3.ohp;
    d.getElementById("week3_deadlift").innerHTML = "Deadlift: " + lifts.cycle3.deadlift;
    d.getElementById("week3_squat").innerHTML = "Squat: " + lifts.cycle3.squat;

    d.getElementById("week4_bench").innerHTML = "Bench: " + lifts.cycle4.bench;
    d.getElementById("week4_ohp").innerHTML = "OHP: " + lifts.cycle4.ohp;
    d.getElementById("week4_deadlift").innerHTML = "Deadlift: " + lifts.cycle4.deadlift;
    d.getElementById("week4_squat").innerHTML = "Squat: " + lifts.cycle4.squat;





    //document.getElementById("main_display").innerHTML = info;
}

let calculateLifts = function(){
    console.log(bench,ohp,deadlift,squat);
    return {
        cycle1:{
            bench: getweek1(bench),
            ohp: getweek1(ohp),
            deadlift: getweek1(deadlift),
            squat: getweek1(squat)
        },
        cycle2:{
            bench: getweek2(bench),
            ohp: getweek2(ohp),
            deadlift: getweek2(deadlift),
            squat: getweek2(squat)
        },
        cycle3:{
            bench: getweek3(bench),
            ohp: getweek3(ohp),
            deadlift: getweek3(deadlift),
            squat: getweek3(squat)
        },
        cycle4:{
            bench: getweek4(bench),
            ohp: getweek4(ohp),
            deadlift: getweek4(deadlift),
            squat: getweek4(squat)
        },
    }
}

let getpercentoflift = function(percent, lift){
    return Math.floor((percent/100) * lift/2.5) * 2.5;
}


//returns an array of week 1 lifts as text using a percentage of 90% of max
let getweek1 = function(basenumber){
    return [
        " " + getpercentoflift(65*0.9,basenumber) + " x 5",
        " " + getpercentoflift(75*0.9,basenumber) + " x 5",
        " " + getpercentoflift(85*0.9,basenumber) + " x 5+"
    ];
}

//returns an array of week 2 lifts as text using a percentage of 90% of max
let getweek2 = function(basenumber){
    return [
        " " + getpercentoflift(70*0.9,basenumber) + " x 3",
        " " + getpercentoflift(80*0.9,basenumber) + " x 3",
        " " + getpercentoflift(90*0.9,basenumber) + " x 3+"
    ];
}

//returns an array of week 3 lifts as text using a percentage of 90% of max
let getweek3 = function(basenumber){
    return [
        " " + getpercentoflift(75*0.9,basenumber) + " x 5",
        " " + getpercentoflift(85*0.9,basenumber) + " x 3",
        " " + getpercentoflift(95*0.9,basenumber) + " x 1+"
    ];
}

//returns an array of week 4 lifts as text using a percentage of 90% of max
let getweek4 = function(basenumber){
    return [
        " " + getpercentoflift(40*0.9,basenumber) + " x 5",
        " " + getpercentoflift(50*0.9,basenumber) + " x 5",
        " " + getpercentoflift(60*0.9,basenumber) + " x 5"
    ];
}

function getClosestBarbellLift(number){
    return Math.floor(number/2.5) * 2.5;

}