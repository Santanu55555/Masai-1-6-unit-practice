const timeconvertion=(ms)=>{
let second=Math.floor(ms/1000)
let minute=Math.floor(second/60)
let hours=Math.floor(minute/60)


second=second%60
minute=minute%60

if(hours==0 && second==0) return `${minute} "minutes"`
else if(hours==0 && minute==0) return `${second} seconds`
else if(second==0 && minute==0) return `${hours} "hours" `
else if(second==0) return `${hours} hours ${minute} minutes`
else if(minute==0) return `${hours} hours ${second} seconds`
else if(hours==0) return `${minute} minutes ${second} seconds`
else return `${hours} hours ${minute} minutes ${second} seconds`
}

export default timeconvertion;