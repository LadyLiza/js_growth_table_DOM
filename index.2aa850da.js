var e=document.querySelector(".append-row"),l=document.querySelector(".remove-row"),o=document.querySelector(".append-column"),r=document.querySelector(".remove-column"),n=document.querySelector(".field");function c(){var c=n.rows.length,t=n.rows[0].cells.length;e.disabled=c>=10,l.disabled=c<=2,o.disabled=t>=10,r.disabled=t<=2}e.onclick=function(){if(n.rows.length<10)for(var e=n.insertRow(),l=0;l<n.rows[0].cells.length;l++)e.insertCell();c()},l.onclick=function(){n.rows.length>2&&n.deleteRow(-1),c()},o.onclick=function(){if(n.rows[0].cells.length<10)for(var e=0;e<n.rows.length;e++)n.rows[e].insertCell();c()},r.onclick=function(){if(n.rows[0].cells.length>2)for(var e=0;e<n.rows.length;e++)n.rows[e].deleteCell(-1);c()},c();
//# sourceMappingURL=index.2aa850da.js.map
