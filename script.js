let bench,ohp,squat,deadlift;

function loadbasevalues(){
    bench = document.getElementById("bench_input").value;
    ohp = document.getElementById("bench_input").value; 
    squat = document.getElementById("bench_input").value; 
    deadlift = document.getElementById("bench_input").value;
    console.log("bench: ", bench,"ohp: ", ohp, "squat: ", squat, "deadlift: ", deadlift);
}

let calculateLifts = function(){
    return {
        bench:{
            week1: getweek1(bench),
            week2: getweek2(bench),
            week3: getweek3(bench),
            week4: getweek4(bench)
        },
        ohp:{
            week1: getweek1(ohp),
            week2: getweek2(ohp),
            week3: getweek3(ohp),
            week4: getweek4(ohp)
        },
        deadlift:{
            week1: getweek1(deadlift),
            week2: getweek2(deadlift),
            week3: getweek3(deadlift),
            week4: getweek4(deadlift)
        },
        squat:{
            week1: getweek1(squat),
            week2: getweek2(squat),
            week3: getweek3(squat),
            week4: getweek4(squat)
        }
    }
}

let getpercentoflift = function(percent, lift){
    return Math.round((percent/100) * lift);
}


//returns an array of week 1 lifts as text using a percentage of 90% of max
let getweek1 = function(basenumber){
    return [
        getpercentoflift(65*0.9,basenumber) + " x 5",
        getpercentoflift(75*0.9,basenumber) + " x 5",
        getpercentoflift(85*0.9,basenumber) + " x 5+"
    ];
}

//returns an array of week 2 lifts as text using a percentage of 90% of max
let getweek2 = function(basenumber){
    return [
        getpercentoflift(70*0.9,basenumber) + " x 3",
        getpercentoflift(80*0.9,basenumber) + " x 3",
        getpercentoflift(90*0.9,basenumber) + " x 3+"
    ];
}

//returns an array of week 3 lifts as text using a percentage of 90% of max
let getweek3 = function(basenumber){
    return [
        getpercentoflift(75*0.9,basenumber) + " x 5",
        getpercentoflift(85*0.9,basenumber) + " x 3",
        getpercentoflift(95*0.9,basenumber) + " x 1+"
    ];
}

//returns an array of week 4 lifts as text using a percentage of 90% of max
let getweek4 = function(basenumber){
    return [
        getpercentoflift(40*0.9,basenumber),
        getpercentoflift(50*0.9,basenumber),
        getpercentoflift(60*0.9,basenumber)
    ];
}