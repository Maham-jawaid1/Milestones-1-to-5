// print section

 let print_btn = document.getElementById('print_btn')
 print_btn?.addEventListener('click', ()=>{
    window.print()
 })





window.addEventListener('load' , ()=>{
let name = localStorage.getItem("name");
let design =  localStorage.getItem("design")
let phone = localStorage.getItem("phone")
let email = localStorage.getItem("email")
let add = localStorage.getItem("add")
let pass1 = localStorage.getItem("pass1")
let deg1 = localStorage.getItem("deg1")
let uni1 = localStorage.getItem("uni1")
let pass2 = localStorage.getItem("pass2")
let deg2 = localStorage.getItem("deg2")
let skill1 = localStorage.getItem("Skill1")
let skill2 = localStorage.getItem("Skill2")
let skill3 = localStorage.getItem("Skill3")
let skill4 = localStorage.getItem("Skill4")
let lang = localStorage.getItem("lang")
let lang2 = localStorage.getItem("lang2")
let styear = localStorage.getItem("styear")
let endyear = localStorage.getItem("endyear")
let company = localStorage.getItem("company")
let comlocation = localStorage.getItem("comlocation")
let jobTitle = localStorage.getItem("jobTitle")
let achv1 = localStorage.getItem("achv1")
let achv2 = localStorage.getItem("achv2")
let achv3 = localStorage.getItem("achv3")
// let picture =localStorage.getItem("profile_pic")


let resName:any = document.getElementById('resName')
 resName.textContent = name

 let resDesig:any = document.getElementById('resDesig')
 resDesig.textContent = design

 let resPhone:any = document.getElementById('resPhone')
 resPhone.textContent = phone

 let resEmail:any = document.getElementById('resEmail')
 resEmail.textContent = email

 let resAdd:any = document.getElementById('resAdd')
 resAdd.textContent = add

 let resPass:any = document.getElementById('resPass')
 resPass.textContent = pass1

 let resDeg:any = document.getElementById('resDeg')
 resDeg.textContent = deg1

 let resIns:any = document.getElementById('resIns')
 resIns.textContent = uni1

 let resPass2:any = document.getElementById('resPass2')
 resPass2.textContent = pass2

 let resDeg2:any = document.getElementById('resDeg2')
 resDeg2.textContent = deg2

 
 let resSkill1:any = document.getElementById('resSkill1')
 resSkill1.textContent = skill1

 let resSkill2:any = document.getElementById('resSkill2')
 resSkill2.textContent = skill2

 let resSkill3:any = document.getElementById('resSkill3')
 resSkill3.textContent = skill3

 
 let resSkill4:any = document.getElementById('resSkill4')
 resSkill4.textContent = skill4
 
let resLan1:any = document.getElementById('resLan1')
  resLan1.textContent = lang
 
 let resLan2:any = document.getElementById('resLan2')
 resLan2.textContent = lang2

let resStartYear:any = document.getElementById('resStartYear')
resStartYear.textContent = styear


let resEndYear:any = document.getElementById('resEndYear')
resEndYear.textContent = endyear

let resCompany:any = document.getElementById('resCompany')
resCompany.textContent = company

let resComLocation:any = document.getElementById('resComLocation')
resComLocation.textContent = comlocation

let resJobTitle:any = document.getElementById('resJobTitle')
resJobTitle.textContent = jobTitle

let resAchv1:any = document.getElementById('resAchv1')
resAchv1.textContent = achv1

let resAchv2:any = document.getElementById('resAchv2')
resAchv2.textContent = achv2

let resAchv3:any = document.getElementById('resAchv3')
resAchv3.textContent = achv3


// let resImg:any = document.getElementById('resImg')
//  resImg.textContent = picture

})

