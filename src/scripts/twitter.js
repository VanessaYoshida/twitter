let textarea = document.getElementById('tweet-textarea');
let featuresBotton = () => {
  let maxLength = 140;
  let charactersLength = textarea.value.length;
  let resultChar = maxLength - charactersLength;
  document.getElementById('caracteres').innerHTML = resultChar;
  if (charactersLength > 0 && charactersLength < 120) {
    document.getElementById('send-tweet').disabled = false;
    document.getElementById('caracteres').style.color = '#001f36';
  } else if (charactersLength > 119 && charactersLength < 141) {
    document.getElementById('send-tweet').disabled = false;
    document.getElementById('caracteres').style.color = '#ffad1f';
  } else if (charactersLength > 140) {
    document.getElementById('send-tweet').disabled = true;
    document.getElementById('caracteres').style.color = '#e44778';
  } else {
    document.getElementById('send-tweet').disabled = true;
    document.getElementById('caracteres').style.color = '#001f36';
  }
};
textarea.addEventListener('input', featuresBotton, false);
let size = () => {
  while (textarea.scrollHeight > textarea.offsetHeight) {
    textarea.rows += 1;
  }
};
document.getElementById('tweet-textarea').addEventListener('keyup', size);
let btnClick = document.getElementById('send-tweet');
let date = () => {
  let dNow = new Date();
  let localdate = dNow.getDate() + '/' + (dNow.getMonth() + 1) + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
  return localdate;
};
let addTweet = (event) => {
  event.preventDefault();
  let newTweet = tweetHTML('Vanessa Yoshida', textarea.value, date());
  let sectionTweets = document.getElementById('tweets');
  sectionTweets.innerHTML = newTweet + sectionTweets.innerHTML;
};
btnClick.addEventListener('click', addTweet, false);
let tweetHTML = (header, content, footer) => {
  return `<article>
  <div class="column-1">
  <img class="img-profile" src="./src/img/fotoPerfil.jpg">
  </div>
  <div class="column-2">
  <header>${header}</header>
  <p>${content}</p>
  <footer>${footer}</footer>
  </div>
  </article>`;
};
