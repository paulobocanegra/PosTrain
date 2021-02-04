let counter = 0;


function downloadTimer(){
    let timeleft = 5;
    let level1 = setInterval(function() {
        if (counter === 5){
            clearInterval(level1)
            //we cant clear arrays here because they reset before we compare them
                // flatOrder = []
                // currentOrderInput = []
                // orderToCompare = []
                // // orderItemArray = []
                // finalOrder = []
        }
        document.getElementById("timer").innerHTML = "Fire!";
        if (timeleft === 0) {
            counter++
            renderCustomerOrder();
            downloadTimer();
        }
        if (counter < 5){
            document.getElementById("timer").innerHTML = timeleft;
        }
        timeleft --;
        console.log(counter)
    }, 1000);
    // clearInterval(downloadTimer);
} 

downloadTimer();


