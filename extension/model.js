export const defaults={focus:25,short:5,long:15};
export function remaining(timer,now=Date.now()){return Math.max(0,timer.running?timer.endAt-now:timer.remaining);}
export function localDay(now){const d=new Date(now);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
export function finishTimer(timer,stats,now=Date.now()){if(!timer.running||timer.endAt>now)return null;const day=localDay(timer.endAt);return {timer:{...timer,running:false,remaining:0,finished:true},stats:timer.mode==='focus'?{...(stats||{}),[day]:((stats||{})[day]||0)+1}:stats||{}};}

export function petStage(total=0){if(total>=30)return {name:'Moon guardian',level:4,next:null};if(total>=12)return {name:'Study buddy',level:3,next:30};if(total>=4)return {name:'Little explorer',level:2,next:12};return {name:'Sleepy seedling',level:1,next:4};}
export function streak(stats,now=Date.now()){let count=0;const d=new Date(now);if(!(stats[localDay(d.getTime())]>0))d.setDate(d.getDate()-1);while(stats[localDay(d.getTime())]>0){count++;d.setDate(d.getDate()-1);}return count;}
