function digitalClock(a){
    let sec = a%60;
    let min = Math.floor(((a-sec)/60)%60);
    let hour = Math.floor(((a-min)/60)/60);
    hour>=24?hour=0:hour;

    if(sec<10){sec="0"+sec}
    if(min<10){min="0"+min}
    if(hour<10){hour="0"+hour}

    return `${hour}:${min}:${sec}`;
}
console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));