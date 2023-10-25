let darkMode=true
const buttonToggle=document.getElementById('toggle-mode')

buttonToggle.addEventListener('click',handleToggle)

function handleToggle(event){
    const mode =darkMode? 'Light': 'dark'
    event.currentTarget
    .querySelector('span').textContent =`${mode} modo ativado!`
    document.querySelector('html').classList.toggle('light')
    darkMode=!darkMode
}