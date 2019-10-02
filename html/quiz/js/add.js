
i=0;
a=[];
b=[];
wrongq =[];
//total ques;

tno=9;
no=10;
sco=0;
x= Math.floor(Math.random() * 10) +1;
x1=Math.floor(Math.random() * 7) +3;
x2=Math.floor(Math.random() * 7) +3;
a.push(x+"+"+x1+"+"+x2);
b.push(x+x1+x2);




var timeleft = 0; var downloadTimer = setInterval(function(){ timeleft++; document.getElementById("countdowntimer").textContent = timeleft; },1000);






   var audio = new Audio('https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/jg-032316-sfx-feedback-correct-17.mp3');
   var audiof = new Audio('https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/jg-032316-sfx-feedback-incorrect-25.mp3');









function finished(){

 clearInterval(downloadTimer);


      wrongq.forEach(function(q){

var para = document.createElement("h4");
var node = document.createTextNode(q);
para.appendChild(node);
var element = document.getElementById("wronq");
element.appendChild(para);

   });




       document.getElementById('quizsection').style.display ="none"
sc=document.getElementById("sco").innerHTML
ti=document.getElementById("countdowntimer").innerHTML
document.getElementById('result').style.display ="block"

document.getElementById('finalscore').innerHTML="score:" +sc;
document.getElementById('avgtime').innerHTML="average time /question :" +ti/no +"s";

at=ti/no

if(sc==no){
document.getElementById("cd").innerHTML=""
}

if( sc==9 || sc==10 ){
    document.getElementById("comment").innerHTML="comment : good "
    document.getElementById('threestar').style.display= 'block'

}
if(sc==8){
   document.getElementById("comment").innerHTML="comment: average"
   document.getElementById('twostar').style.display= 'block'

   document.getElementById('threestar').style.display= 'none'
  document.getElementById('fourstar').style.display= 'none'
  document.getElementById('fivestar').style.display= 'none'

}
if(sc<=7){
    document.getElementById("comment").innerHTML="comment: kid"

    document.getElementById('onestar').style.display= 'block'

    document.getElementById('threestar').style.display= 'none'
  document.getElementById('fourstar').style.display= 'none'
  document.getElementById('twostar').style.display= 'none'



}

if(at<=2 && sc==10){
document.getElementById("comment").innerHTML="comment : proffesional"
document.getElementById('fivestar').style.display= 'block'


document.getElementById('threestar').style.display= 'none'
  document.getElementById('twostar').style.display= 'none'
  document.getElementById('onestar').style.display= 'none'



}
if(at<=3 && at>2 && sc==10){
    document.getElementById("comment").innerHTML="comment : very good"
    document.getElementById('fourstar').style.display= 'block'

    document.getElementById('threestar').style.display= 'none'
  document.getElementById('onestar').style.display= 'none'
  document.getElementById('fivestar').style.display= 'none'


}







}









window.onload=function(){
document.getElementById('quo').innerHTML=a[i];

//document.getElementById("quesno").innerHTML=i+1;

}

function check(){

x1=Math.floor(Math.random() * 7) +3;
x2=Math.floor(Math.random() * 7) +3;
ans=document.getElementById("ans").value;
  if(ans==b[i]){
  audio.playbackRate =2;
    audio.play();
  sco=sco+1
    document.getElementById("sco").innerHTML=sco;
  }else {
     audiof.playbackRate =2;
    audiof.play();
      wrongq.push(a[i]+"="+b[i]);
  }
  a.push(ans+"+"+x1+"+"+x2);
  b.push(parseInt(ans)+x1+x2);

  if(tno==i){
      finished();
  }else{
      nextq();
  }


}



function ansfunction(){

sa=document.getElementById("ans").value.length;
answer=b[i].toString();
sb=answer.length;
if(sa==sb){

  check ();
}
}

function nextq(){

i=i+1
document.getElementById('quo').innerHTML=a[i];
document.getElementById("ans").value="";

 document.getElementById("quesno").innerHTML=i+1;

}
