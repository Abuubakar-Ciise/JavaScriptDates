function calculateTotalTarget(startDateStr, endDateStr, annualRevenue = 5220) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const result = [];
    const resultWorkDaysTotal = [];
    const monthlyTargets = [];
  
    let totalWorkDays = 0;
  
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        let daysInMonth = 0;
  
        const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  
        for (let day = 1; day <= lastDayOfMonth; day++) {
            const currentDay = new Date(year, month, day);
            if (currentDay.getDay() !== 5) {
                daysInMonth++;
            }
        }
  
        result.push(daysInMonth);
        currentDate.setMonth(month + 1);
        currentDate.setDate(1);
    }
  
    let numFridays = 0;
    const current = new Date(startDate);
    while (current <= endDate) {
        if (current.getDay() === 5) { // Friday is weekday 5
            numFridays++;
        }
        current.setDate(current.getDate() + 1); // Increment to the next day
    }
  
    const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
  
    const daysWorkedExcludingFridays = totalDays - numFridays;
  
    let daysWorkedRemaining = daysWorkedExcludingFridays; 
    for (let i = 0; i < result.length; i++) {
        const availableDays = Math.min(daysWorkedRemaining, result[i]);
        let arr = [];
        arr.push(availableDays); 
        if (daysWorkedRemaining < result[i]) {
            resultWorkDaysTotal.push(availableDays);
            totalWorkDays += availableDays;
        } else if(daysWorkedRemaining >= result[i]) {
            resultWorkDaysTotal.push(availableDays);
            totalWorkDays += availableDays;
        }
        daysWorkedRemaining -= availableDays;
    }
    
    resultWorkDaysTotal[resultWorkDaysTotal.length - 1] = Math.round(resultWorkDaysTotal[resultWorkDaysTotal.length - 1]);
  
    let t = 0;
    console.log(resultWorkDaysTotal)
    for(let i = 0; i < resultWorkDaysTotal.length; i++){
      monthlyTargets.push((annualRevenue / 12) / result[i] * resultWorkDaysTotal[i])
    }
    for(let i = 0; i < monthlyTargets.length; i++){
      t+= monthlyTargets[i]
    }
    return {
        daysExcludingFridays: result,
        daysWorkedExcludingFridays: resultWorkDaysTotal,
        monthlyTargets: monthlyTargets,
        totalTarget: t
    };
  }
  
  console.log(calculateTotalTarget('2024-01-1', '2024-12-31'));
  