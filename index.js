const input_Btn = document.getElementById("save-btn")
const inLead  = document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const del_btn = document.getElementById("del-btn")
const tab_btn = document.getElementById("tab-btn")
let myLead=[]
const leadFromLocalStorage = JSON.parse(localStorage.getItem("saved_links"))
if(leadFromLocalStorage){
myLead=leadFromLocalStorage
callit(myLead)
}
function callit(Leads){
    let ms =""
    for (let i = 0 ; i< Leads.length;i++){
    ms+=`<li> 
    <a target="_blank" href='${Leads[i]}'> ${Leads[i]}</a>
     </li>`
    ulEl.innerHTML = ms
}
ulEl.innerHTML = ms
}
tab_btn.addEventListener("click", function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLead.push(tabs[0].url)
        localStorage.setItem("saved_links",JSON.stringify(myLead))
        callit(myLead)
    })
})

del_btn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLead=[]
    callit(myLead)
})

input_Btn.addEventListener("click",function(){
    myLead.push(inLead.value);
    inLead.value = " "
    localStorage.setItem("saved_links",JSON.stringify(myLead))
    console.log(myLead)
    callit(myLead)

})



