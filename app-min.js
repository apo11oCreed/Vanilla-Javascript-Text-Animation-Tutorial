const text=document.querySelector(".fancy"),strText=text.textContent,splitText=strText.split("");text.textContent="";for(let t=0;t<splitText.length;t++)text.innerHTML+="<span>"+splitText[t]+"</span>";let char=0,timer=setInterval(onTick,50);function onTick(){text.querySelectorAll("span")[char].classList.add("fade"),char++,char!==splitText.length||complete()}function complete(){clearInterval(timer),timer=null}