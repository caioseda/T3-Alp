entry_raw = require("./entry_raw.js")
Time= require("./TimeEntry.js")
Extractor= require("./Extractor.js")
Work= require("./WorkDay.js")
Employee= require("./Employee.js")

//moment = require("moment")

class Transform{

    Transform(entries) {
        //console.log(entries)
        // resolver interações entre classes
        var result=[]
        var employees=[]

        for (let i=0; i< entries.length; i++) {
            //console.log(entries[i])
            const employeeString = entries[i].empregado;
            const dateString= entries[i].dia_trabalho;
            const hoursString= entries[i].horas_trabalho;
            // console.log("employee " +employeeString)
            // console.log("data " +dateString)
            // console.log("hours " +hoursString)

            let employee;
            for (let j=0; j< employees.length; j++){
                if(employees[j] == employeeString){
                    employee = employees[j];
                }
            }

            if(employee == null){
                employee = new Employee.employee(employeeString);
                employees.push(employeeString, employee);
            }
            
            //resolver date

            const punches = hoursString.split(" ");
            var w = new Work.WorkDay(employee, dateString, punches);
            // console.log(w)
            result.push(w);
        }
        console.info("Processo de transformação finalizado. "+ result.length+" elementos transformados")
        return result;
    }
}
module.exports.Transform = Transform;