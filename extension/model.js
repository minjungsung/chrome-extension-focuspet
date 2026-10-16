export const defaults={focus:25,short:5,long:15};
export function remaining(timer,now=Date.now()){return Math.max(0,timer.running?timer.endAt-now:timer.remaining);}
export function localDay(now){const d=new Date(now);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
export function finishTimer(timer,stats,now=Date.now()){if(!timer.running||timer.endAt>now)return null;const day=localDay(timer.endAt);return {timer:{...timer,running:false,remaining:0,finished:true},stats:timer.mode==='focus'?{...(stats||{}),[day]:((stats||{})[day]||0)+1}:stats||{}};}
