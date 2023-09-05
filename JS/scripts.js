/*
    Create an algorithm that transforms the notes from the numerical
    system to the system of notes in characters type A B C

    * from 90 upwards - A
    * between 80 to 89   - B
    * between 70 to 79   - C
    * between 60 to 69   - D
    * less than 60    - F
*/

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let finalScore

    if (scoreA) {
        finalScore = "A"
    } else if (scoreB) {
        finalScore = "B"
    } else if (scoreC) {
        finalScore = "C"
    } else if (scoreD) {
        finalScore = "D"
    } else if (scoreF) {
        finalScore = "F"
    } else {
    finalScore = "Invalid grade"
    }

    return finalScore
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))