"use strict";
// print section
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
//edit button
let edit_btn = document.addEventListener("click", () => {
    window.history.back();
});
window.addEventListener('load', () => {
    let name = localStorage.getItem("name");
    let design = localStorage.getItem("design");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let add = localStorage.getItem("add");
    let pass1 = localStorage.getItem("pass1");
    let deg1 = localStorage.getItem("deg1");
    let uni1 = localStorage.getItem("uni1");
    let pass2 = localStorage.getItem("pass2");
    let deg2 = localStorage.getItem("deg2");
    let skill1 = localStorage.getItem("Skill1");
    let skill2 = localStorage.getItem("Skill2");
    let skill3 = localStorage.getItem("Skill3");
    let skill4 = localStorage.getItem("Skill4");
    let lang = localStorage.getItem("lang");
    let lang2 = localStorage.getItem("lang2");
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem("endyear");
    let company = localStorage.getItem("company");
    let comlocation = localStorage.getItem("comlocation");
    let jobTitle = localStorage.getItem("jobTitle");
    let achv1 = localStorage.getItem("achv1");
    let achv2 = localStorage.getItem("achv2");
    let achv3 = localStorage.getItem("achv3");
    // let picture =localStorage.getItem("profile_pic")
    let resName = document.getElementById('resName');
    resName.textContent = name;
    let resDesig = document.getElementById('resDesig');
    resDesig.textContent = design;
    let resPhone = document.getElementById('resPhone');
    resPhone.textContent = phone;
    let resEmail = document.getElementById('resEmail');
    resEmail.textContent = email;
    let resAdd = document.getElementById('resAdd');
    resAdd.textContent = add;
    let resPass = document.getElementById('resPass');
    resPass.textContent = pass1;
    let resDeg = document.getElementById('resDeg');
    resDeg.textContent = deg1;
    let resIns = document.getElementById('resIns');
    resIns.textContent = uni1;
    let resPass2 = document.getElementById('resPass2');
    resPass2.textContent = pass2;
    let resDeg2 = document.getElementById('resDeg2');
    resDeg2.textContent = deg2;
    let resSkill1 = document.getElementById('resSkill1');
    resSkill1.textContent = skill1;
    let resSkill2 = document.getElementById('resSkill2');
    resSkill2.textContent = skill2;
    let resSkill3 = document.getElementById('resSkill3');
    resSkill3.textContent = skill3;
    let resSkill4 = document.getElementById('resSkill4');
    resSkill4.textContent = skill4;
    let resLan1 = document.getElementById('resLan1');
    resLan1.textContent = lang;
    let resLan2 = document.getElementById('resLan2');
    resLan2.textContent = lang2;
    let resStartYear = document.getElementById('resStartYear');
    resStartYear.textContent = styear;
    let resEndYear = document.getElementById('resEndYear');
    resEndYear.textContent = endyear;
    let resCompany = document.getElementById('resCompany');
    resCompany.textContent = company;
    let resComLocation = document.getElementById('resComLocation');
    resComLocation.textContent = comlocation;
    let resJobTitle = document.getElementById('resJobTitle');
    resJobTitle.textContent = jobTitle;
    let resAchv1 = document.getElementById('resAchv1');
    resAchv1.textContent = achv1;
    let resAchv2 = document.getElementById('resAchv2');
    resAchv2.textContent = achv2;
    let resAchv3 = document.getElementById('resAchv3');
    resAchv3.textContent = achv3;
    // let resImg:any = document.getElementById('resImg')
    //  resImg.textContent = picture
});