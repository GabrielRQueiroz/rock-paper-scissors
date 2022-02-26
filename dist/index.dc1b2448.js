const openRulesButton = document.getElementById('rules__button-open');
const closeRulesButton = document.getElementById('rules__button-close');
const rulesAlert = document.getElementById('rules__alert');
const rulesBackground = document.getElementById('background__rules-darken');
const callRules = ()=>{
    rulesAlert.style.pointerEvents = 'all';
    rulesAlert.style.display = 'inline';
    rulesAlert.style.animationName = 'show';
    rulesAlert.style.animationPlayState = 'running';
    rulesBackground.style.pointerEvents = 'all';
    rulesBackground.style.display = 'inline';
    rulesBackground.style.animationName = 'show';
    rulesBackground.style.animationPlayState = 'running';
    rulesBackground.addEventListener('click', closeRules);
};
const closeRules = ()=>{
    rulesAlert.style.animationName = 'hide';
    rulesAlert.style.animationPlayState = 'running';
    rulesAlert.style.pointerEvents = 'none';
    setTimeout(()=>{
        rulesAlert.style.display = 'none';
        clearTimeout();
    }, 250);
    rulesBackground.style.animationName = 'hide';
    rulesBackground.style.animationPlayState = 'running';
    rulesBackground.style.pointerEvents = 'none';
    setTimeout(()=>{
        rulesBackground.style.display = 'none';
        clearTimeout();
    }, 250);
    rulesBackground.removeEventListener('click', closeRules);
};

//# sourceMappingURL=index.dc1b2448.js.map
