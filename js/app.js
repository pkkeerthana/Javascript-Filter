(function(){

    const searchBox = document.querySelector('#searchbox')
    const storeItems = document.querySelectorAll('.card')
    searchBox.addEventListener('keyup', (e) => {
    
        const searchFilter = e.target.value.toLowerCase().trim()
        //display only items that contain filter input
       
        storeItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)){
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        })
    })

})();