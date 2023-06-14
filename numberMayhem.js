let count = 20
let stoploop = false

// to create a loop that counts backwards from 20 to 0
while (true) {
    console.log (`${count}`)
    count--
    if (count == 0) {
        stoploop = true
    } 
if (stoploop)
break
}

// this is a loop that counts in twos to 20
let evens  = 22
for (let i = 0; i < evens; i=(i+2)) {
    console.log (`${i}`)
}

// stars https://stackoverflow.com/questions/44707306/use-for-loop-to-add-additional-characters-or-symbols-each-loop-iteration
for (let stars = 0; stars < 6; stars++) {
    console.log(new Array(stars + 1).join('*'));
}
