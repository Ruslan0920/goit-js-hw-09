!function(){var o=document.querySelector("#datetime-picker");console.log(o);var t=document.querySelector("button[data-start]");console.log(t);var e=document.querySelector("span[data-days]");console.log(e);var n=document.querySelector("span[data-hours]");console.log(n);var a=document.querySelector("span[data-minutes]");console.log(a);var r=document.querySelector("span[data-seconds]");console.log(r),t.addEventListener("click",(function(){c.start()}));var c={start:function(){var o=Date.now();console.log(o),setInterval((function(){var t=function(o){var t=1e3,e=60*t,n=60*e,a=24*n,r=s(Math.floor(o/a)),c=s(Math.floor(o%a/n)),l=s(Math.floor(o%a%n/e)),u=s(Math.floor(o%a%n%e/t));return{days:r,hours:c,minutes:l,seconds:u}}(Date.now()-o),e=t.days,n=t.hours,a=t.minutes,r=t.seconds;console.log("".concat(e,":").concat(n,":").concat(a,":").concat(r))}),2e3)}};function s(o){return String(o).padStart(2,"0")}}();
//# sourceMappingURL=02-timer.f741102d.js.map
