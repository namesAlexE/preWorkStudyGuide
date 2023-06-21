var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
  }

var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

  function selectTopic() {
    if (topics === 'HTML') {
      console.log("Let's study HTML!");
    } else if (topics === 'CSS') {
      console.log("Let's study CSS!");
    } else if (topics === 'Git') {
      console.log("Let's study Git!");
    } else if (topics === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }
  console.log('Here are the topics we learned through Prework:');
  listTopics();
  console.log('Which topic should we study first?');
  selectTopic();

//NOTES

//IF STATMENTS
// if (topic === 'HTML') {
//   console.log("Let's study HTML!");
// } else if (topic === 'CSS') {
//   console.log("Let's study CSS!");
// } else if (topic === 'Git') {
//   console.log("Let's study Git!");
// } else if (topic === 'JavaScript') {
//   console.log("Let's study JavaScript!");
// } else {
//   console.log('Please try again!');
// }

//FOR LOOPS
// for (var x = 0; x < topics.length; x++) {
//     console.log(topics[x]);
// }


//FUCTIONS
// function helloWorld() {
//     console.log("Hello, world, I am a function!")
//    }
// helloWorld();
// function selectTopic() {
//     if (topic === 'HTML') {
//       console.log("Let's study HTML!");
//     } else if (topic === 'CSS') {
//       console.log("Let's study CSS!");
//     } else if (topic === 'Git') {
//       console.log("Let's study Git!");
//     } else if (topic === 'JavaScript') {
//       console.log("Let's study JavaScript!");
//     } else {
//       console.log('Please try again!');
//     }
//   }

//EXTRA PRACTICE
// var shapes = ["triangle", "square", "pentagon", "circle"];
// console.log(shapes[0]);
// var shapes = ["triangle", "square", "pentagon", "circle"];
// for(var x = 0; x < shapes.length; x++) {
//  console.log(shapes[x]);
// }
//var shape = "circle";
// var topics = "HTML, CSS, Git, JavaScript";
// console.log(topics);
// var topic = "CSS";
// var topic = "not a progroming language";
// var topic = "HTML";
