let ref_section = document.getElementById('ref')
let ref_btn = document.getElementById('ref_btn')

ref_btn?.addEventListener('click', ()=>{
    ref_section!.classList.toggle('hide')
})


let exp_section = document.getElementById('experience')
let exp_btn = document.getElementById('exp_btn')


exp_btn?.addEventListener('click', ()=>{
    exp_section!.classList.toggle('hide')
})


let lang_section = document.getElementById('language')
let lang_btn = document.getElementById('lang_btn')

lang_btn?.addEventListener('click', ()=>{
    lang_section!.classList.toggle('hide')
})


let exper_section = document.getElementById('expertise')
let exper_btn = document.getElementById('exper_btn')

exper_btn?.addEventListener('click', ()=>{
    exper_section!.classList.toggle('hide')
})

let edu_section = document.getElementById('education')
let edu_btn = document.getElementById('edu_btn')

edu_btn?.addEventListener('click', ()=>{
    edu_section!.classList.toggle('hide')
})

let contact_section = document.getElementById('contact')
let con_btn = document.getElementById('con_btn')

con_btn?.addEventListener('click', ()=>{
    contact_section!.classList.toggle('hide')
})

 let print_btn = document.getElementById('print_btn')
 print_btn?.addEventListener('click', ()=>{
    window.print()
 })