// 01 | sum

function sum(num1, num2) {
    return num1 + num2;
}

console.log("Sum of 5 and 9: " + sum(5, 9));
console.log("Sum of 5 and 4: " + sum(5, 4));
console.log("");

// 02 | avg

function avg(num1, num2, num3) {
    return (num1 + num2 + num3)/3
}

console.log("Average of 1, 5 and 9: " + avg(1, 5, 9));
console.log("Average of 4, 4 and 4: " + avg(4, 4, 4));
console.log("Average of 10, 4 and 1: " + avg(10, 4, 1));
console.log("");

// 03 | greaterThan

function greaterThan(num1, num2) {
    return num1 < num2;
}

console.log("Is 6 larger than 5? " + greaterThan(5, 6));
console.log("Is 1 larger than 4? " + greaterThan(4, 1));
console.log("");

// 04 | secondLargest

function secondLargest (numArr) {
    let sortedArr = numArr.sort(function(a, b){return a - b});
    return sortedArr[numArr.length - 2];
}

console.log("Second largest value in [1, 4, 5, 8]: " + secondLargest([1, 4, 5, 8]));
console.log("Second largest value in [8, 3, 5, 1, 9, 10]: " + secondLargest([8, 3, 5, 1, 9, 10]));
console.log("");

// 05 | containsVowel

function containsVowel(str) {
    let hasVowel = false;
    for (s of str) { 
        // this does not deal with "and sometimes y"
        if (s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u') {
            hasVowel = true;
            break;
        }
    }
    return hasVowel;
}

console.log("Does the word alpha have any vowels? " + containsVowel('alpha'));
console.log("Does the word hmph have any vowels? " + containsVowel('hmph'));
console.log("");

// 06 | piglatin

function piglatin(str) {
    let arrStr = str.split(" ");
    let newArrStr = [];
    for (str of arrStr) {
        let firstLetter = str[0];
        let newWord = str.slice(1);
        newWord = newWord + firstLetter + "ay";
        newArrStr.push(newWord);
    }

    return newArrStr.join(" ");
}

console.log("Piglatin for good day:  " + piglatin('good day'));
console.log("Piglatin for come now:  " + piglatin('come now'));
console.log("");

// 07 | longestWord

function longestWord(str) {
    let arrayOfStr = str.split(" ");
    let longestWord = "";
    for (let item of arrayOfStr) {
        if (item.length > longestWord.length) {
            longestWord = item;
        }
    }
    return longestWord;
}

console.log("Longest word of 'have you ever seen a penguin go to tea?': " + longestWord('have you ever seen a penguin go to tea?'));
console.log("Longest word of 'fool me once, shame on me. fool me twice, shame on heathcliff': " + longestWord('fool me once, shame on me. fool me twice, shame on heathcliff'));
console.log("");

// 08 | weave

function weave(str, num) {
    let newStr = "";
    for (let i = 0; i < str.length; i += 1){
        if ((i+1) % parseInt(num) == 0) {
            newStr = newStr.concat("x")
        } else {
            newStr = newStr.concat(str[i]);
        }
    }
    return newStr;
}

console.log("Replacing every 3rd character in word javascript with x: " + weave("javascript", 3) )
console.log("");

// 09 | bonus

function bonus(originalBill) {
    return Math.round(originalBill += originalBill * .2);
}

console.log("Jeb's total bill for a $48.75 meal: $" + bonus(48.75));
console.log("");

// 10 | multiples

function multiples(num1, num2) {
    let divisibleArray = [];

    for (let i = 1; i <= 100; i += 1) {
        if (num1 % i == 0 && num2 % i == 0) {
            divisibleArray.push(i);
        }

    }
    return divisibleArray;
}

console.log("All the multiples from 1 - 100 for 40 and 20: " + multiples(40, 20));
console.log("All the multiples from 1 - 100 for 33 and 77: " + multiples(33, 77));
console.log("All the multiples from 1 - 100 for 2 and 57: " + multiples(2, 57));
console.log("");

// 11 | blackjack

function blackjack(cardsArray) {
    let isBust = false;
    let aceArray = [];
    let nonAceArray = [];
    let sumOfCards = 0;

    // populate aceArray and nonAceArray
    for (card of cardsArray) {
        if (card == "A") {
            aceArray.push(card)
        } else if (card == "K" || card == "Q" || card == "J") {
            nonAceArray.push(10);
        } else {
            nonAceArray.push(card);
        }
    }

    // sum of nonAceArray first
    for (card of nonAceArray) {
        sumOfCards += parseInt(card);
    }

    // determining Ace value and adding to sum
    if (aceArray.length != 0){
        for (ace in aceArray) {
            if (sumOfCards + 11 > 21) {
                sumOfCards = sumOfCards + 1;
            } else {
                sumOfCards = sumOfCards + 11;
            }
        }
    }

    if (sumOfCards > 21) {
        isBust = true;
    }

    return isBust;
}

console.log("J, 3, 4 - Bust? " + blackjack(["J", "3", "4"])); // no bust
console.log("A, 2, J - Bust? " + blackjack(["A", "2", "J"])); // no bust
console.log("Q, 5, J - Bust? " + blackjack(["Q", "5", "J"])); // bust
console.log("");

// 12 | divisors

function divisors(num) {
    let arrayOfDivisibleNumbers = [];
    for (let i = num; i > 0; i -= 1) {
        if (num % i == 0) {
            arrayOfDivisibleNumbers.push(i)
        }
    }
    return arrayOfDivisibleNumbers;
}

console.log("Numbers that divide evenly into 100: " + divisors(100));
console.log("Numbers that divide evenly into 99: " + divisors(99));
console.log("");

// 13 | hamming

function hamming(str1, str2) {
    let numberOfLettersInSamePosition = 0;

    if (str1.length != str2.length) {
        return numberOfLettersInSamePosition;
    }

    for (let i = 0; i < str1.length; i += 1) {
        if (str1[i] == str2[i]) {
            numberOfLettersInSamePosition += 1;
        }
    }

    return numberOfLettersInSamePosition;
}

console.log("Number of characters in the same position for dog and fog: " + hamming("dog", "fog"));
console.log("Number of characters in the same position for cheese and please: " + hamming("cheese", "please"));
console.log("Number of characters in the same position for nothing and something: " + hamming("nothing", "something"));
console.log("");

// 14 | pokemon

function pokemon(arrOfNum) {
    let totalPokemon = 0;
    let totalPokemonArr = [];
    for (num of arrOfNum) {
        totalPokemon = totalPokemon + parseInt(num);
        totalPokemonArr.push(totalPokemon);
    }

    return totalPokemonArr;
}

console.log("Total pokemon for [1, 2, 5, 1, 3]: " + pokemon([1, 2, 5, 1, 3]));
console.log("");

// 15 | find

function find(numbersArray, singleNum) {
    for (let i = 0; i < numbersArray.length; i += 1) {
        if (numbersArray[i] == singleNum) {
            return i;
            break;
        }
    }
    return "not found"
}

console.log("Index of the first 6 in [4, 7, 6, 99, 44, 6]: " + find([4, 7, 6, 99, 44, 6], 6));
console.log("Index of the first 9 in [4, 7, 6, 99, 44, 6]: " + find([4, 7, 6, 99, 44, 6], 9));
console.log("");