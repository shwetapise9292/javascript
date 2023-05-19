




function eligibleForTCS(gradScore, hscScore, sscScore, candidateName){
    if(gradScore>=70 || hscScore>=80 || sscScore>=90){
        console.log(`Congrates ${candidateName}, you are eligible for TCS interview.`)
    }
    else{
        console.log(`Unfortunately ${candidateName}, you are not eligible for TCS interview.`);
    }
    console.log(" ");
}
eligibleForTCS(80, 86, 90, "Shweta");
eligibleForTCS(70, 65, 55, "Prajakta");
eligibleForTCS(60, 79,88, "Diksha")