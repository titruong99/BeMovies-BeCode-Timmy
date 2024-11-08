let page=document.querySelector(".page");
let overlay=document.querySelector(".overlay");

let hoverImages=document.querySelectorAll(".hoverImage");
let popUpDetailsMovie=document.querySelector(".dialogMovie");

let registers=document.querySelectorAll(".register");
let signIns=document.querySelectorAll(".signin");
let popUpSignIn=document.querySelector(".popUpSignIn");
let confirmLogin=document.querySelector(".confirmLogin");
let labelSignUp=document.querySelector(".labelSignUp");
let labelLogin=document.querySelector(".labelLogin");

let selectedGenre=document.querySelector(".genre-selected");
let genres=document.querySelectorAll(".genre");

const swiper = new Swiper('.swiper', {
    slidesPerView: 4, 
    direction: 'horizontal',
    loop: true,
    spaceBetween:-2,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const changeElementsForLabelLogin=()=>{
  labelSignUp.style.backgroundColor="black";
  labelSignUp.style.borderTop = '1px solid white';
  labelSignUp.style.borderLeft = '1px solid white';
  labelSignUp.style.borderBottom = '1px solid white';

  labelLogin.style.backgroundColor="red";
  labelLogin.style.border ="none";
  confirmLogin.innerText="LOGIN";
}


const changeElementsForLabelSignUp=()=>{
  labelLogin.style.backgroundColor="black";
  labelLogin.style.borderTop = '1px solid white';
  labelLogin.style.borderRight = '1px solid white';
  labelLogin.style.borderBottom = '1px solid white';

  labelSignUp.style.backgroundColor="red";
  labelSignUp.style.border ="none";
  confirmLogin.innerText="SIGNUP";
}


const createModalLogin=(newUser)=>{
  if(newUser){
    changeElementsForLabelSignUp();
  }else{
    changeElementsForLabelLogin();
  }
  popUpSignIn.showModal();
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.querySelector(".closePopUpSignIn").addEventListener("click",e=>{
    popUpSignIn.close();
    overlay.style.display = "none";
    document.body.style.overflow = 'auto';
  })
}

hoverImages.forEach(elem=>elem.addEventListener("click",e=>{
  popUpDetailsMovie.showModal();
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.querySelector(".closeDialogMovie").addEventListener("click",e=>{
    popUpDetailsMovie.close();
    overlay.style.display = "none";
    document.body.style.overflow = 'auto';
  })
}));

signIns.forEach(elem=>elem.addEventListener("click",e=>{
  createModalLogin(false);
}))

registers.forEach(elem=>elem.addEventListener("click",e=>{
  createModalLogin(true);
}))

labelSignUp.addEventListener("click",e=>{
  changeElementsForLabelSignUp();
})

labelLogin.addEventListener("click",e=>{
  changeElementsForLabelLogin();
})

genres.forEach(elem=>elem.addEventListener("click",e=>{
  selectedGenre.innerText=elem.innerText;
}));
