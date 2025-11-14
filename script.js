let button = document.querySelector("#btn");
let p = document.querySelector("#jokeBox");

const jokes = [
  "Teacher: Tum itne din school kyun nahi aaye? Pappu: Sir, Google Maps wrong turn dikha raha tha! 😂",
  "Wife: Mere birthday pe kya gift doge? Husband: Time batao… Wife: 12 June. Husband: 2027 ka chalega? 😆",
  "Doctor: Aapko kis cheez se allergy hai? Patient: Hard work! 🤣",
  "Girlfriend: Tum mujhe kab tak pyaar karoge? Boyfriend: Jab tak password me tumhara naam rahega! 😂",
  "Santa: Meri memory bohot weak ho gayi hai. Banta: Kab se? Santa: Kab se kya? 😆",
  "Teacher: Define ‘marriage’. Student: A mutually harmful agreement! 🤣",
  "Friend: Bro petrol mehnga ho gaya! Main: Gaadi dhakka maar, free workout milega! 😂",
  "Judge: Tumne dukaan kyun luti? Accused: Sir, Google Map ne bola ‘Take Right’! 😆",
  "Mummy: Kya kar rahe ho? Beta: Homework! (Phone screen: PUBG 🤣)",
  "Wife: Ghar me kamal ka kaam hua! Husband: Kya? Wife: Maine tumhara phone nahi check kiya! 😂",
  "Boy: Aunty aapki beti milegi? Aunty: Kaha? Boy: Matlab number! 😆",
  "Teacher: Tumhare ghar me kaun kaun hai? Student: Main, mummy, papa… aur Wi-Fi! 😂",
  "Friend: Bhai paisa udhaar de de. Main: Screen dekh — ‘Low Balance’ 😆",
  "Santa: Mujhe English me problem hai. Teacher: Kya? Santa: Dekho ‘CAT’ me ‘K’ kaha gaya? 🤣",
  "Girl: Tum itne cute kaise ho? Boy: Low budget me bas itna hi milta hai! 😂",
  "Boyfriend: Tum naa badal gayi ho. Girlfriend: Recharge time pe nahi karaya, network unstable ho gaya! 🤣",
  "Pappu: Sir exam tough tha! Teacher: Kyu? Pappu: Questions hi nahi mile. Teacher: Paper me kya tha? Pappu: Instructions! 😂",
  "Doctor: Aap mobile kam use kiya karo. Patient: Thik hai doctor… WhatsApp pe likh ke bhej dunga! 😆",
  "Banta: Yaar zimmedari ka matlab kya hota hai? Santa: Jab galti kisi aur ki ho, daant hume pade! 😂",
  "Interviewer: Future goal? Candidate: Phone ka storage full na ho! 🤣"
];





button.addEventListener("click", function () {

let random = Math.floor(Math.random()*19+1);
console.log(random);

p.textContent = jokes[random];

})



voiceBtn.addEventListener("click", () => {

    speechSynthesis.cancel();  // 

    const speakJoke = new SpeechSynthesisUtterance(jokeBox.innerText);
    speakJoke.lang = "hi-IN";
    speakJoke.rate = 1;
    speakJoke.pitch = 1;

    speechSynthesis.speak(speakJoke);
});
