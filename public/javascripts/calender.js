var dt = new Date();

function RendorDate (){

dt.setDate(1);
var day = dt.getDay();

// console.log(dt,'apna time aayega')

var endDate = new Date(
    dt.getFullYear(),
    dt.getMonth()+1,
    0
).getDate();

var prevDate = new Date(
    dt.getFullYear(),
    dt.getMonth(),
    0
).getDate();

var today = new Date();

// console.log(today,'=========lallalal==')

var months=["January",'February','March','April','May','June','July','August','September','October','November','December']

// console.log(dt.getDate(), 'lallalala=====alala')
document.getElementById("date_str").innerHTML = dt.toDateString();
document.getElementById('month').innerHTML = months[dt.getMonth()];

// console.log(dt.toDateString(), '==ye meri mohhabat ki tauhin hogi')


var cells= "";
for (j = day; j>0; j--){
    cells+="<div class='prev_date'>"+ (prevDate - j +1) +"</div>";
}
for(i=1; i<=endDate; i++){
    if(i== today.getDate() && dt.getMonth() == today.getMonth()){
        cells+= "<div class='today'>" + i +"</div>";
    }else{
        cells+= "<div>" + i +"</div>";
    }
    // console.log('======lalallalal===')
}
// console.log(cells.day,'=====apna time aayega')

document.getElementsByClassName('days')[0].innerHTML= cells;

}


function moveDate(para){
if(para=='prev'){
    dt.setMonth(dt.getMonth()-1)

  }else if(para == 'next'){
      dt.setMonth(dt.getMonth() +1 )
  }
  RendorDate();




}
function showEvent(){
     date='', time='',event='';
     axios.get('/fetchEvent')
     .then((resp)=>{
        //  console.log(resp.data.edt[1].date,'===========hhi====')
        len = resp.data.edt.length;
        // console.log(len.da, 'array ka ye length hai')
        for(i=0;i<len;i++){
            date = resp.data.edt[i].date;
            time = resp.data.edt[i].time; 
            event = resp.data.edt[i].event;
            // alert(console.log(date,event),'lallall')
         if(date== dt){
             alert(console.log(date,event))
         }
            // console.log(date,'===apna time aayega')
        }
     })


    alert('dikha!');
}


