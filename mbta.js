function routePlan(startLine,startStation,endLine,endStation){
    let subway = {
        Red: ["South Station","Park Street","Kendall","Central","Harvard","Porter","Davis","Alewife"],
        Green: ["Government Center","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"],
        Orange: ["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"],
    };

    // Locate and store the index of Park Street station within the array corresponding to startLine as a numerical value
    parkStStart = subway[startLine].indexOf("Park Street");

    // Locate and store the index of Park Street station within the array corresponding to endLine as a numerical value
    parkStEnd = subway[endLine].indexOf("Park Street");

    // Locate and store the index of startStation within the array corresponding to startLine as a numerical value
    stationStart = subway[startLine].indexOf(startStation);

    // Locate and store the index of endStation within the array corresponding to endLine as a numerical value
    stationEnd = subway[endLine].indexOf(endStation);


    /* Return the absolute value of how many stops away from Park Street you are on your starting line, plus how many stops 
    away from Park Street you are on your end line, to give you the total number of stops between your starting and end stations */
    return (Math.abs(parkStStart - stationStart) + Math.abs(stationEnd - parkStEnd));

}

console.log(routePlan("Red","Alewife","Green","Arlington"))