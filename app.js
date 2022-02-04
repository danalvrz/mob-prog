function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
   const appleTree = a;
   const orangeTree = b;
   let applesInside = 0;
   let orangesInside = 0;
   for (let i = 0; i < apples.length; i++){
       let currentLocation = apples[i] + a;
       if (currentLocation >= s && currentLocation <= t){
           applesInside++;
       }
   }
   for (let i = 0; i < oranges.length; i++){
       let currentLocation = oranges[i] + b;
       if (currentLocation >= s && currentLocation <= t){
           orangesInside++;
       }
       
   }
   console.log(applesInside);
   console.log(orangesInside);
}