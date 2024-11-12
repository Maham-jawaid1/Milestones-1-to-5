let myname :any = document.getElementById('name')

let design: any = document.getElementById('design')

let phone: any = document.getElementById('phone')

let email: any = document.getElementById('email')

let add: any = document.getElementById('add')

let pass1: any = document.getElementById('pass1')

let deg1: any = document.getElementById('deg1')

let uni1: any = document.getElementById('uni1')

let pass2: any = document.getElementById('pass2')

let deg2: any = document.getElementById('deg2')

let Skill1: any = document.getElementById('Skill1')

let Skill2: any = document.getElementById('Skill2')

let Skill3: any = document.getElementById('Skill3')

let Skill4: any = document.getElementById('Skill4')

let lang : any =document.getElementById('lang')

let lang2 : any =document.getElementById('lang2')

let styear: any = document.getElementById('styear')

let endyear: any = document.getElementById('endyear')

let company: any = document.getElementById('company')

let comlocation: any = document.getElementById('comlocation')

let jobTitle: any = document.getElementById('jobTitle')

let achv1: any = document.getElementById('achv1')

let achv2: any = document.getElementById('achv2')

let achv3: any = document.getElementById('achv3')

// let pic: any = document.getElementById('pic')


let submitBtn: any = document.getElementById('submitBtn')

let form = document.getElementById('form')
form?.addEventListener('submit', (e)=>{
  e.preventDefault()
    localStorage.setItem("name", myname.value)
    localStorage.setItem("design", design.value)
    localStorage.setItem("phone", phone.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("add", add.value)
    localStorage.setItem("pass1", pass1.value)
    localStorage.setItem("deg1", deg1.value)
    localStorage.setItem("uni1", uni1.value)
    localStorage.setItem("pass2", pass2.value)
    localStorage.setItem("deg2", deg2.value)
    localStorage.setItem("Skill1", Skill1.value)
    localStorage.setItem("Skill2", Skill2.value)
    localStorage.setItem("Skill3", Skill3.value)
    localStorage.setItem("Skill4", Skill4.value)
    localStorage.setItem("lang", lang.value)
    localStorage.setItem("lang2", lang2.value)
    localStorage.setItem("styear", styear.value)
    localStorage.setItem("endyear", endyear.value)
    localStorage.setItem("company", company.value)
    localStorage.setItem("comlocation", comlocation.value)
    localStorage.setItem("jobTitle", jobTitle.value)
    localStorage.setItem("achv1", achv1.value)
    localStorage.setItem("achv2", achv2.value)
    localStorage.setItem("achv3", achv3.value)

  // if(pic.files && pic.files[0]){
  //   let reader = new FileReader()
  //    reader.addEventListener("load", ()=>{
  //     let textImg : any = reader.result
  //     localStorage.setItem("profile_pic", textImg)
  //    })
  //    reader.readAsDataURL(pic.files[0])
  // }
     window.location.href = "./public/Milestone 1 and 2/resume.html"
})