document.getElementById('calc').addEventListener('click',calculator);
function clalculator(e){
    e.preventDefault()
    let amount = document.getElementById('amount').value;
    let discount = document.getElementById('discount').value;
    let people = document.getElementById('people').valuw;

    if (amount === "" ||discount === 0 || people === ""){
        
        alert("You need to fill in all the fields!");
    }
    
}
