function addeve(){

    console.log('skskkksksksksk=====skskks');
     var event = document.getElementById('event').value;
     var date = document.getElementById('date').value;
     var time = document.getElementById('time').value;

     axios.post('/addEvent',{event:event, date:date, time:time})
 }
