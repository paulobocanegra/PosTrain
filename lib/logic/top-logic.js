let counter = 0;


function downloadTimer(){
    let timeleft = 5;
    let level1 = setInterval(function() {
        if (counter === 5){
            clearInterval(level1);
        }
        document.getElementById("timer").innerHTML = "Fire!";
        if (timeleft === 0) {
            counter++;
            renderCustomerOrder();
            clearInterval(level1);
            downloadTimer();
        }
        if (counter < 5){
            document.getElementById("timer").innerHTML = timeleft;
        }
        timeleft --;
    }, 1000);
} 

// downloadTimer();


