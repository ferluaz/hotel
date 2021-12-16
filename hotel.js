class hotel {
    constructor (name, lastName){
        this._name = name;
        this._lastName = lastName;
        this._remainingVacationDays = 0;
    }
    get name (){
        return this._name;
    }
    get lastName (){
        return this._lastName;
    }
    get remainingVacationDays (){
        return this._remainingVacationDays;
    }
    takeVacationDays(daysOff){
         this._remainingVacationDays -= daysOff;
    }
}

class funcionario extends hotel {
    constructor(name,lastName, funcao){
        super(name);
        super(lastName);
        this._funcao = funcao;
    }
}
const maria = new funcionario ('Maria', 'Da Silva', 'lavanderia');
//console.log(maria.lastName);
maria.takeVacationDays(5);
//console.log(maria._remainingVacationDays);
console.log(`Meu nome é ${maria.name} ${maria.lastName}, eu trabalho na ${maria._funcao} e ainda tenho ${maria.remainingVacationDays} dias de férias.`);