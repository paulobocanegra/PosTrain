
function downloadTimer(){
    let timeleft = 3;
    setInterval(function() {
        if (timeleft === 0) {
            renderCustomerOrder();
            downloadTimer();
        }
        document.getElementById("timer").innerHTML = timeleft;
        timeleft --;
    }, 1000);
    clearInterval(downloadTimer);
} 

downloadTimer();
