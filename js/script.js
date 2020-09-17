var quotes = [
  'Never stop fighting until you arrive at your destined place - that is, the unique you. Have an aim in life, continuously acquire knowledge, work hard, and have perseverance to realise the great life.',
  'I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.',
  'When we have respect for ourselves and others, we gravitate towards connections that encourage that',
  'Anger is the ultimate destroyer of your own peace of mind.',
  'A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful',
  'Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don\'t take the shot.',
  'Don\'t be afraid. Be focused. Be determined. Be hopeful. Be empowered.',
  'The fact is that grief today is a family matter as much a s it is an individual one.',
  'No one would have crossed the ocean if he could have gotten off the ship in the storm.',
  'Congratulations! today is your day. You\'re off to Great Places! You\'re off and away.',
  'Appreciate those early influences and what they\'ve done for you.',
  'The true wealth of a nation lies not in it\'s gold or silver but in it\'s learning, wisdom and in the uprightness of its sons.',
  'I think beauty comes from actually knowing who you are. That\'s real beauty to me.',
  'Memories, pressed between the pages of my mind. Memories, sweetened through the ages just like wine.',
  'I had it in my heart. I believed in myself, and I had confidence. I knew how to do it, had natural talent and I pursued it',
  'If I can help people I\'ll do it by giving them a chance to help themselves; and if I can uplift or inspire, let it be by example, inference and suggestion, rather than by injunction and dictation.',
  'Reading without reflecting is like eating without digesting.',
  'Remember to focus on goals that are within your control.',
  'I learned really to practice mustard seed faith, and positive thinking, and remarkable things happened.',
  'Constantly learn new things, develop your skills and learn new ones, more knowledge equals more motivation.'

]

var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById("displayQuote").innerHTML = '"' + quotes[randomNumber] + '"';



function colorChange1() {
  document.getElementById("quoteBox1").style.backgroundColor = "#fdcece";

  document.getElementById("displayQuote").style.color = "#b15a5d";
  document.getElementById("quoteBox1").style.border = "2px solid #6eacb7";
  document.getElementById("quoteBox1").style.fontWeight = "700";
  document.getElementById("quoteBox1").style.fontStyle = "normal";

}
function colorChange2() {
  document.getElementById("quoteBox1").style.backgroundColor = "#a1bab9";

  document.getElementById("quoteBox1").style.border = "2px solid #f7e0cf";

  document.getElementById("displayQuote").style.color = "#292f3c";
  document.getElementById("quoteBox1").style.fontWeight = "700";
  document.getElementById("quoteBox1").style.fontStyle = "italic";

}
function colorChange3() {
  document.getElementById("quoteBox1").style.backgroundColor = "#292f3c";

  document.getElementById("quoteBox1").style.border = "2px solid #68988b";

  document.getElementById("displayQuote").style.color = "#00ffb8";
  document.getElementById("quoteBox1").style.fontFamily = "Impact,Charcoal,sans-serif";

}
function colorChange4() {
  document.getElementById("quoteBox1").style.backgroundColor = "#f9ee82";

  document.getElementById("quoteBox1").style.border = "2px solid #803002";

  document.getElementById("displayQuote").style.color = "#803002";

}

// HERO CONVERTER

function display_result(){
  let poundtokg = document.getElementById('weight_value').value * 0.4536;
  let kgtopound = document.getElementById('weight_value').value / 0.4536;

  let value = document.getElementById('weight_unit').value;
  let inhtml = document.getElementById('show_result');

  if(value == "lbs"){
    inhtml.innerHTML = poundtokg + ' Kilograms';
  }else{
    inhtml.innerHTML = kgtopound + ' Pounds';
  }
}



// SUM AVERAGE
const seriesForm = document.querySelector('#series form');
const seriesFormInput = document.querySelector('#series form input[type=text]');
let maxP = document.createElement('span');
let minP = document.createElement('span');
let sumP = document.createElement('span');
let avgP = document.createElement('span');
let reverseP = document.createElement('span');

seriesFormInput.addEventListener('keyup', function(e){
  if(e.target.value!=''){
      const seriesArr = stringToArr();
      findMax(seriesArr);
      findMin(seriesArr);
      sumAvg(seriesArr);
      reverseArr(seriesArr);
  }else{
      maxP.textContent = `Max = 0`;
      minP.textContent = `Min = 0`;
      sumP.textContent = `Sum = 0`;
      avgP.textContent = `Average  = 0`;
      reverseP.textContent = `Reverse Order = `;
  }
  
});
function stringToArr(){
  const series = document.querySelector('#series input[type=text]');
  const seriesArr = series.value.split(',');
  for(let i=0;i<seriesArr.length; i++){
      seriesArr[i] = parseFloat(seriesArr[i]);
      if(isNaN(seriesArr[i])){
          seriesArr.splice(i,1);
          i--;
      }
  }
  console.log(seriesArr);
  return seriesArr;
}

// finding max value from an array and showing in the page
function findMax(arr){
  let max = Math.max.apply(null, arr);
  maxP.textContent = `Max = ${max}`;
  seriesForm.appendChild(maxP);
}
// finding min value from an array and showing in the page
function findMin(arr){
  let min = Math.min.apply(null, arr);
  minP.textContent = `Min = ${min}`;
  seriesForm.appendChild(minP);
}
//calculating the sum, average and showing in the page
function sumAvg(arr){
  let sum=0;
  arr.forEach(element => {
      sum+=element;
  });
  let avg = sum/arr.length;

  sumP.textContent = `Sum = ${sum}`;
  seriesForm.appendChild(sumP);

  avgP.textContent = `Average = ${avg.toFixed(3)}`;
  seriesForm.appendChild(avgP);
}

//reversing the array and showing in the page
function reverseArr(arr){
  arr.reverse();

  reverseP.textContent = `Reverse Order = ${arr.join()}`;
  seriesForm.appendChild(reverseP);
}
