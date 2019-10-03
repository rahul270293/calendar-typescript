$(function(){
    fetchEve();
})
function fetchEve(){

    var len='', date='',time="", event="", html='';

    axios.get('/fetchEvent')
    .then((resp) =>{
        // console.log(resp.data.edt[],'dil hai ki manta nhi');
    
        len = resp.data.edt.length;
        // console.log(len.da, 'array ka ye length hai')
        for(i=0;i<len;i++){
            date = resp.data.edt[i].date;
            time = resp.data.edt[i].time; 
            event = resp.data.edt[i].event;
        //    console.log('aane se usss====',date,time,event)
            eventCalId=resp.data.edt[i]._id
            // console.log(eventCalId);

        html+=`<tr>
        <td  contenteditable='false' class="row${i}" id="date${i}">${date}</td>
        <td  contenteditable='false' class="row${i}" id="time${i}">${time}</td>
        <td  contenteditable='false' class="row${i}" id="event${i}">${event}</td>
        <td> <button class=${eventCalId} id="${eventCalId}" onclick="deleteRow(this.id, ${i})">DELETE</button></td>
         </tr>`

        }
        document.getElementById('eventTableBody').innerHTML=html;
    }, (e)=>{
        console.log(e);
    })
}

function deleteRow(tt,id){
    // console.log('kya vichar hai', id)
    var eventCalId =tt;
    // console.log(eventCalId);
    axios.post('/delEve',{eveId:eventCalId}).then((del)=>{
        if(del.data.status){
            window.location='/'
        }
    })

}
