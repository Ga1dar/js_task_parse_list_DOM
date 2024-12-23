var r=Array.from(document.querySelectorAll("li")).sort(function(r,e){var a=parseInt(r.dataset.salary.replace(/[$,]/g,""),10);return parseInt(e.dataset.salary.replace(/[$,]/g,""),10)-a}),e=document.querySelector("ul");e.innerHTML="",r.forEach(function(r){e.appendChild(r)});
//# sourceMappingURL=index.3550cdbf.js.map
