
var unixDate=new Date(Date.now())
var actualTime=new Date()
var todaysDate=new Date()

console.log("hello wolrd!")
console.log("Aujourd'hui, nous sommes le : " + todaysDate.getDate() + "/" + (todaysDate.getMonth()+1) + "/" + todaysDate.getFullYear())
console.log("Heure actuelle : " + actualTime.getHours() + ":" + actualTime.getMinutes() + ":" + actualTime.getSeconds())
console.log("Notre histoire commence il y a maintenant... " + Date.now() + " millisecondes ! C'est énorme !")
console.log("C'était il y a : " + parseInt(unixDate/3.154e+10) + " ans !") // Merci Big Google pour la formule...
