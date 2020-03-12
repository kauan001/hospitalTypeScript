namespace pessoa{
    export class Paciente extends Pessoa{
        private codPaciente: number;

        getcodPaciente(){
            
            return this.codPaciente;

        }

        setcodPaciente(cod:number){

            this.codPaciente = cod;
            
        }
    }
}