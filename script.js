//get data from inputs
const dayInput = document.getElementById('input_day');
const monthInput = document.getElementById('input_month');
const yearInput = document.getElementById('input_year');

const calculate = document.querySelector('.calculate_button')

const [ageOut,monthOut,dayOut] = document.querySelectorAll('span');
const [labDay,labMonth,labYear] = document.querySelectorAll('label');
//handle invalide input
const [error_day,error_month,error_year] = document.querySelectorAll('.error');
//Calculate age by year,month,day

let currDate = new Date();

calculate.addEventListener('click',()=>{
    backtoDefault();

    let daysNumber = getDaysNumber(monthInput.value,dayInput.value,yearInput.value);        

    let isYearOk = isValidYear(yearInput.value);
    let isMonthOk = isValidMonth(monthInput.value);
    let isDayOk = isValidDay(dayInput.value, monthInput.value, yearInput.value);

    if(isYearOk && isMonthOk && isDayOk){
        let [year,month,days] = getAgeArr(daysNumber);
        ageOut.innerHTML = year;
        monthOut.innerHTML = month;
        dayOut.innerHTML = days;
    }   
})

function getDaysNumber(month,day,year){
    let birthdate = new Date(`${month}-${day}-${year}`);
    let diff = currDate - birthdate;
    diff = (Math.floor(diff/(1000 * 60 * 60 * 24)))
    return diff;
}

function getAgeArr(daysNumber){
    let year = Math.floor(daysNumber/365);
    let month = Math.floor((daysNumber%365)/30);
    let days = Math.floor((daysNumber%365)%30);

    return [year,month,days];
}

function isValidYear(value){
    let errorMsg;
    if(value !=''){
        //if not empty
        if(value > currDate.getFullYear()){
            //wrong
            errorMsg = 'Must be in the Past';
            error_year.innerHTML = errorMsg;
            error_year.style.visibility = 'visible'
            yearInput.style.outlineColor='hsl(0, 100%, 67%)';
            labYear.style.color = 'hsl(0, 100%, 67%)';
            return false
        }
        return true;

    }else{
        errorMsg = 'This field is required';
        error_year.innerHTML = errorMsg;
        error_year.style.visibility = 'visible'
        yearInput.style.outlineColor='hsl(0, 100%, 67%)';
        labYear.style.color = 'hsl(0, 100%, 67%)';
        return false;
    }
    
}

function isValidMonth(value){
    let errorMsg;
    
    if(value !=''){
        //if not empty
        if(value > 12 || value < 1){
            //wrong
            errorMsg = 'Must be a valid month';
            error_month.innerHTML = errorMsg;
            error_month.style.visibility = 'visible'
            monthInput.style.outlineColor='hsl(0, 100%, 67%)';
            labMonth.style.color = 'hsl(0, 100%, 67%)';
            return false
        }
        return true;

    }else{
        errorMsg = 'This field is required';
        error_month.innerHTML = errorMsg;
        error_month.style.visibility = 'visible'
        monthInput.style.outlineColor='hsl(0, 100%, 67%)';
        labMonth.style.color = 'hsl(0, 100%, 67%)';

        
        return false;
    }
    
}

function isValidDay(value, month, year){
    let errorMsg;
    const daysOfMonth = new Date(year,month,0);
    let lastMonthDay = daysOfMonth.getDate();

    console.log(daysOfMonth.getDate());
    console.log(value);

    if(value !=''){
        //if not empty
        if(value > lastMonthDay || value < 1){
            //wrong
            errorMsg = 'Must be a valid day';
            error_day.innerHTML = errorMsg;
            error_day.style.visibility = 'visible'
            dayInput.style.outlineColor='hsl(0, 100%, 67%)';
            labDay.style.color = 'hsl(0, 100%, 67%)';
            return false
        }
        return true;

    }else{
        errorMsg = 'This field is required';
        error_day.innerHTML = errorMsg;
        error_day.style.visibility = 'visible'
        dayInput.style.outlineColor='hsl(0, 100%, 67%)';
        labDay.style.color = 'hsl(0, 100%, 67%)';
        return false;
    }
    
}

function backtoDefault(){
    error_year.style.visibility = 'hidden';
    error_month.style.visibility = 'hidden';
    error_day.style.visibility = 'hidden';

    dayInput.style.outlineColor='hsl(0, 0%, 86%)';
    labDay.style.color = 'hsl(0, 1%, 44%)';

    monthInput.style.outlineColor='hsl(0, 0%, 86%)';
    labMonth.style.color = 'hsl(0, 1%, 44%)';

    yearInput.style.outlineColor='hsl(0, 0%, 86%)';
    labYear.style.color = 'hsl(0, 1%, 44%)';
}
