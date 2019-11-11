// Trabalho de expressões regulares (Entrega 3 Castaneda)
entry_raw= require("./entry_raw.js")
TimeEntry= require("./TimeEntry.js")
//Extractor= require("./Extractor.js")
WorkDay= require("./WorkDay.js")
Employee= require("./Employee.js")
Transformer = require("./Transformer.js")

function extrator(){
        const readline = require('readline')
    const fs = require ('fs');
    const readable = fs.createReadStream('RelExtraPorPeriodo.csv');

    const rl = readline.createInterface({
        input: readable,
        output: process.stdout
    });

    //Expressões regulares (já retirando os acentos)
    const empregado = new RegExp("\\;Empregado:\\;{4}([A-Za-z àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]*)\\;*");
    const diatrabalho = new RegExp("([0-9]{2}/[0-9]{2}) - ([a-zàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]{3})\\;{3}([0-9: ]*).*");
    const jornada = new RegExp("\\;Jornada \\+ Abono\\;{7}Jornada total\\;{4}([0-9]{2}:[0-9]{2}).*");
    var entryList = [];
    let primeiro_empregado = " s";
    rl.on('line', (line)=>{
    
        var verificaEmpregado = empregado.exec(line);
        var verificadiaTrabalho = diatrabalho.exec(line);
        var verificaJornada = jornada.exec(line);
        //Condicionais para verificar se as informações desejadas estão presentes nas linhas
        if(verificaEmpregado){
            primeiro_empregado = verificaEmpregado[1];
            // console.log("Empregado criado")
        }
        
        if(verificadiaTrabalho){
            // console.log("employee " +primeiro_empregado);
            // console.log("data " +verificadiaTrabalho[1]);
            // console.log("hours " +verificadiaTrabalho[3]);
            entrie = new entry_raw.entry(primeiro_empregado, verificadiaTrabalho[1],verificadiaTrabalho[3]);
            entryList.push(entrie);
            // console.log(entryList.length);
            
        }
    })
    rl.on('close', function(){
        console.info("Processo de extração finalizado. "+entryList.length+" elementos extraidos")
        t = new Transformer.Transform()
        t.Transform(entryList)
        console.log("show!")
    });
}

extrator()



//Transformer.oi()