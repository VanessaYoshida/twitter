
let textarea = document.getElementById('tweet-textarea');
textarea.addEventListener('input',featuresBotton, false);

function featuresBotton(){
    let maxLength = 140;
    let charactersLength = textarea.value.length;
    console.log(charactersLength);
    let resultChar = maxLength - charactersLength;
    document.getElementById("caracteres").innerHTML = resultChar;
    if (charactersLength > 0 && charactersLength < 120) {
        document.getElementById("send-tweet").disabled=false;
        document.getElementById("caracteres").style.color = "#001f36";
    }
    else if (charactersLength > 119 && charactersLength < 141) {
        document.getElementById("send-tweet").disabled=false;
        document.getElementById("caracteres").style.color = "#ffad1f";
    }
    else if (charactersLength > 140) {
        document.getElementById("send-tweet").disabled=true;
        document.getElementById("caracteres").style.color = "#e44778";
    }    
    else {
        document.getElementById("caracteres").style.color = "#001f36";
    }
}

let btnClick = document.getElementById('send-tweet');
btnClick.addEventListener('click', addTweet, false);

function date(){
    let dNow = new Date();
    let localdate = dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
    return localdate;
  }

function addTweet(event){
    event.preventDefault();
    let newTweet = tweetHTML("Vanessa Yoshida", textarea.value, date());
    let sectionTweets = document.getElementById("tweets");
    sectionTweets.innerHTML = newTweet + sectionTweets.innerHTML;
}

function tweetHTML(header, content, footer) {
    return `<article>
                <div class="column-1">
                    <img class="img-profile" src="img/fotoPerfil.jpg">
                </div>
                <div class="column-2">
                    <header>${header}</header>
                    <p>${content}</p>
                    <footer>${footer}</footer>
                </div>
            </article>`;
}
