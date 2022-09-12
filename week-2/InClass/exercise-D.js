let currentMood = 10;

function moodChecker(mood) {
  if (currentMood === "happy") {
    return "Good job! You're dong great";
  } else if (currentMood === "sad") {
    return "Every cloud has a silver lining";
  } else if (typeof currentMood === "number") {
    return "Beep beep boop";
  } else {
    return "im soryy im still learning about feelings";
  }
}

console.log(moodChecker());
