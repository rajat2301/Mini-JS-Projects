const calTemp = () => {
    const tempvalue = document.getElementById('tempvalue').value;

    const tempval = document.getElementById('temp');
    const temptype = temp.options[tempval.selectedIndex].value;
    console.log(temptype);
    const celToFah = (num) => {
        let fah;
        fah = (num/5)*9+32;
        return fah;
    }

    const fahToCel = (num) => {
        let cel;
        cel = ((num-32)*5)/9;
        return cel;
    }

    let cal;
    const result = document.getElementById('result');
    if(temptype == 'cel'){
        cal = celToFah(tempvalue);
        result.innerHTML = ` = ${cal} degree Fahrenheit`;
    }
    else{
        cal = fahToCel(tempvalue);
        result.innerHTML = ` = ${cal} degree Celcius`;
    }
}
