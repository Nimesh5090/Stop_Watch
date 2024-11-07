let hour=document.querySelector(".hour");
let min=document.querySelector(".min");
let sec=document.querySelector(".sec");
let ms=document.querySelector(".ms");
let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let reset=document.querySelector(".reset");
let body = document.querySelector(".body");

let time;

function gencolor(){
    let gentdcolor = Math.floor(Math.random()*255);
    return gentdcolor;
}

function changecolor(){
    let newcolor = `rgb(${gencolor()} ,${gencolor()} ,${gencolor()})`
    body.style.backgroundColor=newcolor;
}

// let secstart;
// let minstart;
// let hourstart;

function starttime(){
    // const colorchange=setInterval(function(){
    //     changecolor();
    // },1000)
    
    
let i=parseInt(sec.innerHTML);
let j =parseInt(min.innerHTML);
let k = parseInt(hour.innerHTML);
    
    // let l=parseInt(ms.innerHTML);
    // const msstart = setInterval(function(){
    //     l++;
    //    ms.innerHTML=l;
    //    if(l===1000){
    //     l=0;
    //    }
       
    // },1)
      time = setInterval(function(){
        changecolor();
        i++;
       if(i>9){
        sec.innerHTML=i
       }
       else{
        sec.innerHTML="0"+i;
       }
       if(i===60){
        i=0;
        j++;
       }
       if(j>9){
        min.innerHTML=i
       }
       else{
        min.innerHTML="0"+j;
       }

       if(j===60){
        j=0;
        k++;
       }
       if(j>9){
        hour.innerHTML=k;
       }
       else{
        hour.innerHTML="0"+k;
       }
    //    sec.innerHTML=i;
    //    min.innerHTML=j;
    //    hour.innerHTML=k;
    },1000)
//     console.log(sec.innerHTML);
    

//     let j =0;
//     minstart = setInterval(function(){
//         if(parseInt(sec.innerHTML)===60){
//             j++;
//         }
        
//         if(j>9){
//             min.innerHTML=j;
//            }
//            else{
//             min.innerHTML="0"+j;
//            }
//         if(j===59){
//             j=0;
//         }
//     },60000-(parseInt(sec.innerHTML)*1000))

//     let k = 0;
//     hourstart = setInterval(function(){
//         k++;
//         if(k>9){
//             hour.innerHTML=k;
//            }
//            else{
//             hour.innerHTML="0"+k;
//            }
//     },360000-(parseInt(min.innerHTML)*(60000-parseInt(sec.innerHTML)*1000)))
// }

}

    function stoptime(){

        // clearInterval(colorchange);
        // clearInterval(msstart);
        clearInterval(time);
        // clearInterval(minstart);
        // clearInterval(hourstart);
        // i=parseInt(sec.innerHTML);
        // j=parseInt(min.innerHTML);
        // k=parseInt(hour.innerHTML);
        // hour.innerHTML= k;
        // min.innerHTML=j;
        // sec.innerHTML=i;

    }

    function resettime(){
        
        hour.innerHTML =`00`;
        min.innerHTML = `00`;
        sec.innerHTML = `00`;
        
        
         
        body.style.backgroundColor="white";
        clearInterval(time);
        //     clearInterval(minstart);
        //     clearInterval(hourstart);
        // hour.innerHTML=`00`;
        // min.innerHTML=`00`;
        // sec.innerHTML=`00`;
        // // ms.innerText=`00`;
        
        // clearInterval(colorchange);
        // clearInterval(msstart);
            
    }

    reset.addEventListener("click",resettime);   
    stop.addEventListener("click",stoptime);
start.addEventListener("click",starttime);

