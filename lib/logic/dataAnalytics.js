
function calculateTrends(orders){
    let firstMostOrdered;
    for (let key in orders){
        if (!firstMostOrdered){
            firstMostOrdered = key;
        } else if(orders[key] > orders[firstMostOrdered]){
            firstMostOrdered = key;
        }
    }
    console.log(firstMostOrdered)
}


// {a:5, b:3, c:7, d:3}