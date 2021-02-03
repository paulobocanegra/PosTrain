function downloadTimer(){
    let timeleft = 10;
    setInterval(function () {
        if (timeleft === 0) {
            clearInterval(downloadTimer);
            renderCustomerOrder();
            downloadTimer();
        }
        document.getElementById("timer").innerHTML = timeleft;
        timeleft --;
    }, 1000);
} 





downloadTimer();
