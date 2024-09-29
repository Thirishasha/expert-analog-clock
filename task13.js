//Hour


//minutees

setInterval(()=>{
    let minute=document.getElementById("Minutes");         
    let data1=new Date();
    let hour=data1.getMinutes();
  
    
    minute.textContent=hour;
   
   
  


},1000)
//seconds

setInterval(()=>{
    let second=document.getElementById("seconds");         
    let data1=new Date();
    let hour=data1.getSeconds();
    
    
    second.textContent=hour;
   
   
  


},1000)

//year
setInterval(()=>{
    let ampm=document.getElementById("year");         
    let data1=new Date();
    let hour=data1.getFullYear();
    
    
    ampm.textContent=hour;
   
   
  


},1000)
//month
setInterval(()=>{
    let ampm=document.getElementById("month");         
    let data1=new Date();
    let hour=data1.getMonth();
    
    
    ampm.textContent=hour;
   
   
  


},1000)
// Hour
let select_format=document.getElementById("select_formats")

select_format.addEventListener("click",fun(),false);
   
 function fun(){
    
    setInterval(()=>{
        let am=document.getElementById("Hour");         
        let data1=new Date();
        let hour=data1.getHours();
        let select_format=document.getElementById("select_formats").value;
        console.log(select_format)
        if(select_format==12){
       
        am.textContent=hour-12;
        }
        else{
            am.textContent=hour;
        }
     },1000)
        

}
//AM/PM

setInterval(()=>{
    let ampm=document.getElementById("AM/PM");         
    let data1=new Date();
    let hour=document.getElementById("Hour").value
    let select_format=document.getElementById("select_formats").value;
    if(select_format==12){
    if(hour>=0 && hour<=11)
    {
        ampm.textContent="AM"
    }
    else{
        ampm.textContent="PM"
    }
}
   
   
   
  


},1000)
    
  

