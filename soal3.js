const changeWord = (word) => {
    if(typeof word !== "string") return;
    const arrOfWord = (word.toUpperCase().split(""));

    const newWord = arrOfWord.join("-");
    console.log(newWord);
}

changeWord("Fazztrack");