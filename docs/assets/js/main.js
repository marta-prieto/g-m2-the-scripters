"use strict";console.log(">> Ready :)");const clickDesign=document.querySelector(".design-collapsable"),clickFill=document.querySelector(".fill-collapsable"),clickSubmit=document.querySelector(".submit-collapsable"),parent1=document.querySelector(".js__parent1"),parent2=document.querySelector(".js__parent2"),parent3=document.querySelector(".js__parent3"),clickShare=document.querySelector(".collapsebtn"),collapseShare=document.querySelector(".share-container"),openCollapsable=e=>{const c=e.currentTarget.parentElement;c===parent1?(parent1.classList.toggle("js__collapsable1"),parent2.classList.add("js__collapsable2"),parent3.classList.add("js__collapsable3")):c===parent2?(parent1.classList.add("js__collapsable1"),parent2.classList.toggle("js__collapsable2"),parent3.classList.add("js__collapsable3")):(parent1.classList.add("js__collapsable1"),parent2.classList.add("js__collapsable2"),parent3.classList.toggle("js__collapsable3"))},openCollapsable2=()=>{event.preventDefault(),collapseShare.classList.toggle("hidden"),clickShare.classList.add("button-Create-after")};clickDesign.addEventListener("click",openCollapsable),clickFill.addEventListener("click",openCollapsable),clickSubmit.addEventListener("click",openCollapsable),clickShare.addEventListener("click",openCollapsable2);const clickTheme1=document.querySelector(".theme__radio1"),clickTheme2=document.querySelector(".theme__radio2"),clickTheme3=document.querySelector(".theme__radio3"),card=document.querySelector(".section1__card");function changeColorTheme(e){console.log(e.currentTarget.value),card.classList.remove("theme-colors1"),card.classList.remove("theme-colors2"),card.classList.remove("theme-colors3"),card.classList.add(e.currentTarget.value)}clickTheme1.addEventListener("click",changeColorTheme),clickTheme2.addEventListener("click",changeColorTheme),clickTheme3.addEventListener("click",changeColorTheme);const changeName=document.querySelector(".js__form-name"),writeName=document.querySelector(".js__title");function changingName(){const e=changeName.value;""===changeName.value?writeName.innerHTML="Nombre Apellido":writeName.innerHTML=e}changeName.addEventListener("keyup",changingName);const changeJob=document.querySelector(".js__form-job"),writeJob=document.querySelector(".js__job");function changingJob(){const e=changeJob.value;""===changeJob.value?writeJob.innerHTML="Front-end developer":writeJob.innerHTML=e}changeJob.addEventListener("keyup",changingJob);