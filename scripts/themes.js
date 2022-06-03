const toggleSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        document.getElementById('html').className = "dark-theme";
        document.getElementById('github').src = "/icons/github_icon_dark.png";
        document.getElementById('email').src = "/icons/email_icon_dark.svg";
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.getElementById('html').className = "dark-theme";
        document.getElementById('github').src = "/icons/github_icon_dark.png";
        document.getElementById('email').src = "/icons/email_icon_dark.svg";
        localStorage.setItem('theme', 'dark');
    }
    else {        
        document.getElementById('html').className = "light-theme";
        document.getElementById('github').src = "/icons/github_icon.png";
        document.getElementById('email').src = "/icons/email_icon.svg";
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
