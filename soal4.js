
const transformSentence = (word) =>{
    if (typeof word !== "string") return word;
    let sorted = word.split(" ").sort().reverse().map(word => word.toUpperCase());
    // let pushSorted = sorted.push("FAZZTRACK")
    // console.log(pushSorted);
    sorted.push("FAZZTRACK");
    // console.log(sorted);
    sorted.reverse().join("");
    console.log(...sorted);
}

transformSentence("Saya Belajar Javascript");