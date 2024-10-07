const toTop = () => window.scrollTo({top: 0, behaviour: 'smooth'});

const getUserSelectedText = () => {
    return window.getUserSelection().toString();
}

window.onscroll = () => {
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {

    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = words[index].substring(0, charIndex -1);
        charIndex--;
        setTimeout(erase, erasingDelay);
} else {
    index++;
    if (index >= words.length){
index = 0;
}
setTimeout(type, typingDelay + 1100);

}
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

  function toggleDarkMode() {
    let isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
    }
  });