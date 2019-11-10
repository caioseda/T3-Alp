// Trabalho de expressões regulares (Entrega 3 Castaneda)
const readline = require('readline')
const fs = require ('fs')
const readable = fs.createReadStream('RelExtraPorPeriodo.csv')

const rl = readline.createInterface({
    input: readable,
    output: process.stdout
})

//Expressões regulares (já retirando os acentos)
const empregado = new RegExp("\\;Empregado:\\;{4}([A-Za-z àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]*)\\;*");
const diatrabalho = new RegExp("([0-9]{2}/[0-9]{2}) - ([a-zàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]{3})\\;{3}([0-9: ]*).*")
const jornada = new RegExp("\\;Jornada \\+ Abono\\;{7}Jornada total\\;{4}([0-9]{2}:[0-9]{2}).*")
var itensList = [];
rl.on('line', (line)=>{
 
    var verificaEmpregado = empregado.exec(line);
    var verificadiaTrabalho = diatrabalho.exec(line);
    var verificaJornada = jornada.exec(line);

    //Condicionais para verificar se as informações desejadas estão presentes nas linhas
    if(verificaEmpregado){
        const primeiro_empregado= verificadiaTrabalho[1]
        
    }
    
    if(verificadiaTrabalho){
        
        let entry_raw =new entry_raw(primeiro_empregado, verificadiaTrabalho[1],verificadiaTrabalho[3])
       
        
    }
    if(verificaJornada){
        //var horas =  verificaJornada[1];
    }
    


})
console.info(, message)