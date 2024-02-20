



const allMonth = [
    {  monthlName: "January",days: 27, monthly:"", expected:435, revenue:"0",
    workDays:["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
    nonworkDays:["Friday"]
 },

    { monthlName: "February", days: 24, monthly:"", expected:435, revenue:0,
    workDays:["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
    nonworkDays:["Friday"]},

    { monthlName: "March", days: 26, monthly:"", expected:435, revenue:0,
    workDays:["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
    nonworkDays:["Friday"]},

    {monthlName: "April", days: 26, monthly:"", expected:435, revenue:0,
    workDays:["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
    nonworkDays:["Friday"]},

    { monthlName: "May", days: 26, monthly:"", expected:435, revenue:0,
    workDays:["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
    nonworkDays:["Friday"]},

    { monthlName: "June", days: 26, monthly:"", expected:435, revenue:0,
    workDays:["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
    nonworkDays:["Friday"]},

    { monthlName: "July",days: 26, monthly:"", expected:435, revenue:0,
    workDays:["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
    nonworkDays:["Friday"]},

    { monthlName: "August", days: 26, monthly:"", expected:435, revenue: 0,
    workDays:["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
    nonworkDays:["Friday"]},

    { monthlName: "September", days: 26, monthly:"", expected:435, revenue:0,
    workDays:["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
    nonworkDays:["Friday"]},

    { monthlName: "October", days: 27, monthly:"", expected:435, revenue:0,
    workDays:["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
    nonworkDays:["Friday"]},

    { monthlName: "November", days: 25, monthly:"", expected:435, revenue:0,
    workDays:["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
    nonworkDays:["Friday"]},

    { monthlName: "December", days: 27, monthly:"",expected:435, revenue:0,
    workDays:["Saturday","Sunday","Monday","Tuesday "," Wednesday","Thursday"],
    nonworkDays:["Friday"]},
];

const copy = {
    song: Object.freeze([...allMonth])
};


const month = [];
// const dayArry = [];
const ary = [];
const monthlyArry = [];
const revenueArry = [];
const newArry = [];

const januaryWorkDays = allMonth[0].workDays;

const month1 = ()=>{
    for(let i = 0; i < allMonth.length; i++){
        month.push(allMonth[i].monthlName)
    }
    console.log(month)
} 
const revenue = (many)=> {
    allMonth.forEach(obj => {
        if(obj.revenue == 0){
            obj.revenue += many ;
            obj.revenue *= 12;
        }
    })
       for(let i = 0; i < allMonth.length; i++){
            revenueArry.push(allMonth[i].revenue);
        }
        //console.log(revenueArry);
}
const dailyRevenue = (many)=>{
    allMonth.forEach(obj => {
        if(obj.days < 28){
           obj.days = many / obj.days;
        }
    })

    for(let i = 0; i < allMonth.length; i++){
        ary.push(allMonth[i].days);
    }
   // console.log(ary);
}

const monthly = (many)=>{
    allMonth.forEach(element =>{
        element.monthly += many;
    })
    for(let i = 0; i < allMonth.length; i++){
        monthlyArry.push(allMonth[i].monthly);
    }
   // console.log(monthlyArry);
}
    let  choose = prompt("Choose a number\n"+
    "1: Annual Revenue for each month and total\n"+
    "2: daily Revenue for each day\n"+
    "3: See Work Days");

    let monthlName;
    let monthlyRate;
    let revenueRate;
    
    let currwntMonth ;
    let currwntMonthTotalDays ;
    let currentIndexOfMonth ;
    
    let currwntMonth1 ;
    let currwntMonthTotalDays1 ;
    let currentIndexOfMonth1 ;
    
    let currentDayName;
    let currentMonthRevenue ;
    
    // let allDaysTotal = 0 ;
    let currentDay ;
    
    let dailyArry = [];
    let monthlyRevenue = [];
    let newCurrentMonth ;
    let newCurrentMontlyRevenue ;
    let newCurrentMontlyRevenueTotal = 0 ;
    
    let Totall ;
    
    let arr = [];
    
    let monthValue ;
function main(many = 435){
                    
    if(choose == 1){
        let ask = prompt("Annual Revenue for each month and total")
        if(ask != "" ){
            // console.log(ask);
            // console.log(many)
            monthly(ask);
            revenue(ask)
            // dailyRevenue(many)
            let newArry = [];
            for (let i = 0; i < 12; i++) {
                monthlName = allMonth[i].monthlName;
                monthlyRate = allMonth[i].monthly;
                revenueRate = allMonth[i].revenue;
                let monthInfo = `the month ${monthlName} Revenue is ${monthlyRate}`
                newArry.push(monthInfo)
                // newArry.push(allMonth[i].monthlName + '-' + allMonth[i].monthly + '-' + allMonth[1].revenue);
            }
            if (allMonth[0].monthly > allMonth[0].expected) {
                console.log("You Work Very Good");
            } else if (allMonth[0].monthly == allMonth[0].expected) {
                console.log("You've met the expectations");
            } else if (allMonth[0].monthly < allMonth[0].expected) {
                console.log("You need to improve");
            }            
            newArry.push(` and total Revenue is: ${revenueRate}`)
            console.log(newArry);
        }
        else{
            
            monthly(many)
            revenue(many)
            console.log("defaul "+ many)
            let newArry = [];
            for (let i = 0; i < 12; i++) {
                monthlName = allMonth[i].monthlName;
                monthlyRate = allMonth[i].monthly;
                revenueRate = allMonth[i].revenue;
                let monthInfo = `the month ${monthlName} Revenue is ${monthlyRate}`
                newArry.push(monthInfo)
                // newArry.push(allMonth[i].monthlName + '-' + allMonth[i].monthly + '-' + allMonth[1].revenue);
            }
            if (allMonth[0].monthly > allMonth[0].expected) {
                console.log("You Work Very Good");
            } else if (allMonth[0].monthly == allMonth[0].expected) {
                console.log("You've met the expectations");
            } else if (allMonth[0].monthly < allMonth[0].expected) {
                console.log("You need to improve");
            } 
         
            newArry.push(` and total Revenue is: ${revenueRate}`)
            console.log(newArry);

        }
    } 
    else if(choose == 2){
        let choose1 = prompt("choose a number\n"+
                            "1: see all days revenue in any Month\n"+
                            "2: search specific day\n"+
                            "3: See a Specific Month From.... To....") 
        
     if(choose1 == 1){
        let ask = prompt("See all days revenue? (yes/no)");

        if (ask.toLowerCase() === "yes") {
            let ask1 = prompt("Enter Month Name ");

            let me = ask1
            for(let i = 0; i <copy.song.length; i++){
                if(me === `${copy.song[i].monthlName}`){
                    currentIndexOfMonth = i;
                    currwntMonthTotalDays = `${copy.song[i].days}`;
                    currwntMonth = `${copy.song[i].monthlName}`
                }
            }
            let ask = prompt("Enter Month Revenue To get Daily Revenue");
            if(ask != "" ){
                monthly(ask);
                dailyRevenue(ask)
                revenue(ask);
                for(let i = 0; i < januaryWorkDays.length; i++){
                    currentDayName = januaryWorkDays[i];
                    currentMonthRevenue = ary[currentIndexOfMonth];
                    let dailyInfo = `${currentDayName} Revenue is: ${currentMonthRevenue}`
                    dailyArry.push(dailyInfo)
                }
                if (allMonth[0].monthly > allMonth[0].expected) {
                    console.log("You Work Very Good");
                } else if (allMonth[0].monthly == allMonth[0].expected) {
                    console.log("You've met the expectations");
                } else if (allMonth[0].monthly < allMonth[0].expected) {
                    console.log("You need to improve");
                } 
    
                dailyArry.push(` The Total revenue for Each Month Is ${currentMonthRevenue * currwntMonthTotalDays}`)
                console.log(dailyArry)
              
            } 
            else{
                monthly(many);
                dailyRevenue(many)
                revenue(many);
                let dailyArry = [];
                for(let i = 0; i < januaryWorkDays.length; i++){
                    currentDayName = januaryWorkDays[i];
                    currentMonthRevenue = ary[currentIndexOfMonth];
                    let dailyInfo = `${currentDayName} Revenue is: ${currentMonthRevenue}`
                    dailyArry.push(dailyInfo)
                }
                if (allMonth[0].monthly > allMonth[0].expected) {
                    console.log("You Work Very Good");
                } else if (allMonth[0].monthly == allMonth[0].expected) {
                    console.log("You've met the expectations");
                } else if (allMonth[0].monthly < allMonth[0].expected) {
                    console.log("You need to improve");
                } 
    
                dailyArry.push(` The Total revenue for Each Month Is ${currentMonthRevenue * currwntMonthTotalDays}`)
                console.log(dailyArry)
            }                 
      } 
        else {
            console.log("No problem, have a good day!");
        }     
     }
     if(choose1 == 2){
        let ask = prompt("Enter day Name ");

        let me1 = ask
        for(let i = 0; i <januaryWorkDays.length; i++){
            if(me1 === `${januaryWorkDays[i]}`){
                currentDay = me1;
            }
        }
        let ask1 = prompt("Enter Month Name ");

        let me = ask1
        for(let i = 0; i <copy.song.length; i++){
            if(me === `${copy.song[i].monthlName}`){
                currentIndexOfMonth = i;
                currwntMonthTotalDays = `${copy.song[i].days}`;
                currwntMonth = `${copy.song[i].monthlName}`
            }
        }

        if(ask != "" ){
            let ask = prompt("Enter Month Revenue To get Daily Revenue");
            monthly(ask);
            dailyRevenue(ask)
            revenue(ask);
            currentMonthRevenue = ary[currentIndexOfMonth];
            let dailyInfo = `${currentDay} Revenue is: ${currentMonthRevenue}`
                dailyArry.push(dailyInfo)
            // for(let i = 0; i < januaryWorkDays.length; i++){
            //     currentDayName = januaryWorkDays[i];
            //     currentMonthRevenue = ary[currentIndexOfMonth];
            //     let dailyInfo = `${currentDay} Revenue is: ${currentMonthRevenue}`
            //     dailyArry.push(dailyInfo)
            // }
            if (allMonth[0].monthly > allMonth[0].expected) {
                console.log("You Work Very Good");
            } else if (allMonth[0].monthly == allMonth[0].expected) {
                console.log("You've met the expectations");
            } else if (allMonth[0].monthly < allMonth[0].expected) {
                console.log("You need to improve");
            } 
            console.log(dailyArry)
        }
        else{
            
            monthly(many);
            dailyRevenue(many)
            revenue(many);
            currentMonthRevenue = ary[currentIndexOfMonth];
            let dailyInfo = `${currentDay} Revenue is: ${currentMonthRevenue}`
            if (allMonth[0].monthly > allMonth[0].expected) {
                console.log("You Work Very Good");
            } else if (allMonth[0].monthly == allMonth[0].expected) {
                console.log("You've met the expectations");
            } else if (allMonth[0].monthly < allMonth[0].expected) {
                console.log("You need to improve");
            } 
            dailyArry.push(dailyInfo)
           
     }
        }
       if(choose1 == 3){
        let ask1 = prompt("Enter Month..1 Name ");
        let me = ask1
        for(let i = 0; i <copy.song.length; i++){
            if(me === `${copy.song[i].monthlName}`){
                currentIndexOfMonth = i;
                // currwntMonthTotalDays = `${copy.song[i].days}`;
                currwntMonth = `${copy.song[i].monthlName}`
            }
        }

        let ask = prompt("Enter Month..2 Name ");
        let me1 = ask
        for(let i = 0; i <copy.song.length; i++){
            if(me1 === `${copy.song[i].monthlName}`){
                currentIndexOfMonth1 = i;
                currwntMonthTotalDays1 = `${copy.song[i].days}`;
                currwntMonth1 = `${copy.song[i].monthlName}`
            }
        }
            let ask3 = prompt("Enter Month Revenue To get Daily Revenue");
            if(ask3 != "" ){
            
                if (currentIndexOfMonth > currentIndexOfMonth1) {
                    let temp = currentIndexOfMonth;
                    currentIndexOfMonth = currentIndexOfMonth1;
                    currentIndexOfMonth1 = temp;
                }
                for(let i = currentIndexOfMonth; i <= currentIndexOfMonth1; i++){
                Totall = allMonth[i].days;
                arr.push(Totall);
                }
               
               
                monthly(ask3);
                dailyRevenue(ask3)
                revenue(ask3);
                if (allMonth[0].monthly > allMonth[0].expected) {
                    console.log("You Work Very Good");
                } else if (allMonth[0].monthly == allMonth[0].expected) {
                    console.log("You've met the expectations");
                } else if (allMonth[0].monthly < allMonth[0].expected) {
                    console.log("You need to improve");
                } 
                
               
                for(let i = currentIndexOfMonth; i <= currentIndexOfMonth1; i++){
                    newCurrentMonth = allMonth[i].monthlName;
                    newCurrentMontlyRevenue = allMonth[i].monthly;
                    let monthlyRevenue1 = `${newCurrentMonth} Month Revenue is ${newCurrentMontlyRevenue }`
                    monthlyRevenue.push(monthlyRevenue1);
                }
                monthValue = allMonth[0].monthly * arr.length;
                monthlyRevenue.push(`Total Month Revenue is: ${monthValue}`);
                console.log(monthlyRevenue);

            }
            else{
                if (allMonth[0].monthly > allMonth[0].expected) {
                    console.log("You Work Very Good");
                } else if (allMonth[0].monthly == allMonth[0].expected) {
                    console.log("You've met the expectations");
                } else if (allMonth[0].monthly < allMonth[0].expected) {
                    console.log("You need to improve");
                } 
                for(let i = currentIndexOfMonth; i <= currentIndexOfMonth1; i++){
                    Totall = allMonth[i].days;
                    arr.push(Totall);
                    }
                monthly(many);
                dailyRevenue(many)
                revenue(many);
                for(let i = currentIndexOfMonth; i <= currentIndexOfMonth1; i++){
                    newCurrentMonth = allMonth[i].monthlName;
                    newCurrentMontlyRevenue = allMonth[i].monthly;
                    let monthlyRevenue1 = `${newCurrentMonth} Month Revenue is ${newCurrentMontlyRevenue }`
                    monthlyRevenue.push(monthlyRevenue1);
                }
                monthValue = allMonth[0].monthly * arr.length;
                monthlyRevenue.push(`Total Month Revenue is: ${monthValue}`);
                
                console.log(monthlyRevenue);
            }
      }           
    }else if(choose == 3){
        let newArry = [];
        newArry.push(`Work Days Are 6 ${allMonth[0].workDays} While the ${allMonth[0].nonworkDays} Isn't Work Day`)
        console.log(newArry)
    }
    else{
        console.log("Choose a Number")
    }

}
main()

