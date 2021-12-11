let a = document.querySelector("calculate")
a.addEventListener("click", function(){
    document.getElementById("#cost").value += ((document.getElementById("#cost").value*document.getElementById("#percent").value)/100)*document.getElementById("#month").value
})