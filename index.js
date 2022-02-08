window.onload = ()=>{
    
    const changeEle = document.getElementById("input")
    changeEle.value = ''
    const input = (e)=>{
        onChangeEvent();
        debouncefunction(incrementDebounceCount,1000);
        throttleFunction(incrementTrottleCount,1000)
    }

    
    //////////////////////on change
    let eventFiredCountOnChange = 0;

    const onChangeEvent = ()=>{
        const count = document.getElementById("changeCount")
        eventFiredCountOnChange ++
        count.innerHTML = eventFiredCountOnChange
    }
    ///////////////////////on change end
    
    /////////////////////debounce start
    let eventFiredCountDebounce = 0
    let debouncetimerId;

    const incrementDebounceCount = ()=>{
        const count = document.getElementById("debouceCount")
        eventFiredCountDebounce ++
        count.innerHTML = eventFiredCountDebounce
    }
    
    const debouncefunction = (callback, delay)=>{
        //cancels existing  timeout
        clearTimeout(debouncetimerId)

        //sets new timeout if nothing entered before timeout it will call the function
        debouncetimerId = setTimeout(callback,delay)
    }
    ///////////////////////debouncing ends here

    //////////////////////trottling starts here
    let eventFiredCountThrottle = 0;
    let throttleTimerId;

    const incrementTrottleCount = ()=>{
        const count = document.getElementById("throttleCount")
        eventFiredCountThrottle ++
        count.innerHTML = eventFiredCountThrottle
    }

    const throttleFunction = (callback,interval)=>{
        
	    // If setTimeout is already scheduled, no need to do anything
        if(throttleTimerId){
            return
        }
        throttleTimerId = setTimeout(()=>{
            callback()
            throttleTimerId = undefined // Once setTimeout function execution is finished, timerId = undefined so that in <br>
            // the next scroll event function execution can be scheduled by the setTimeout
        },interval)
    }

    changeEle.addEventListener('input',input)

}