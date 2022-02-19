const counters = document.querySelectorAll('.counter')

counters.forEach((counter)=>{
    counter.innerHTML=0;

    const updateCounter = () => {
        const startingCount = +counter.innerHTML;
        const targetCount = +counter.getAttribute('data-target');
        const incr = targetCount/200;
        if(startingCount < targetCount)
        {
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
        }else{
            counter.innerHTML = targetCount; 
        }
        setTimeout(updateCounter,30);
    }

    updateCounter();

})