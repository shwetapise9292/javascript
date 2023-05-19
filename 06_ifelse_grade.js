




function voteEligibility(age) {
  if (age == null || age == undefined) {
    console.log(`Your have entered invalid data ${age} ...`);
  } else {
    if (age <= 0 || age > 120) {
      console.log(`Your have entered invalid data ${age} ...`);
    } else {
      if (age > 0 && age <= 17) {
        console.log(`Your age is ${age}, you are not eligible for voting...`);
      } else {
        console.log(`Your age is ${age}, you are eligible for voting...`);
      }
    }
  }
  console.log(" ");
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);