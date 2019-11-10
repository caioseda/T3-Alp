let Transform = class Transform{

}
    

    function Transform(entries) {
        // resolver interações entre classes
        var result=[]
        var employees=[]

        for (i=0; i< entries.length; i++) {

            employeeString= TimeEntry.employee();
            dateString= TimeEntry.date();
            hoursString= TimeEntry.hours();

            for (j=0; j< employess.length; j++){
                if(employees[j] == employeeString){
                    employee = employees[j];
                }
            }

            if(employee == null){
                employee = new employee(employeeString);
                employees.add(employeeString, employee);
            }
            
            //resolver data
            split = dateString.split("/");
            

            var punches= [];
            punchesArray = hoursString.split(" ");

            for (x=0; x< punchesArray.length; x++) {
                punch = 
                punches.add(punch);
    
            }
            workDay = new WorkDay(employee, date, punches);
            result.add(workDay);
        }

        return result;
    }
}
