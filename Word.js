var programming_languages = ["First","graduate", "online","school","development","program","very", "company", "activities", "concern", "education", "learning", "contents","field","experienced"]

function randomWord(){
    return programming_languages[Math.floor(Math.random() * programming_languages.length)].toUpperCase();
}
export { randomWord } 