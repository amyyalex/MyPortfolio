/*===skills javascript======*/
const skillsContent = document.getElementsByClassName('skills-content'),
      skillsHeader = document.querySelectorAll('.skills-header')

function toogleSkills(){
	let itemClass = this.parentNode.className

	for(var i = 0; i < skillsContent.length; i++){
		skillsContent[i].className = 'skills-content skills-close'
	}
	if (itemClass === 'skills-content skills-close') {
		this.parentNode.className = 'skills-content skills-open'
	}
}

skillsHeader.forEach((el) => {
	el.addEventListener('click', toogleSkills)
});



let menu = document.querySelector('.navbar .menu');

document.querySelector('#menubar').onclick = () =>{
    menu.classList.toggle('active');    
}

window.onscroll = () =>{
    menu.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.navbar').classList.add('active');
    }else{
        document.querySelector('.navbar').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.navbar').classList.add('active');
    }else{
        document.querySelector('.navbar').classList.remove('active');
    }
}

