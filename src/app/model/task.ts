export interface Task {
    id?:string;
    task?:string;
    priority?:string;
    cpf?:string;
    tipoRegistro?:string;
    nome?:string,
    cargo?:string,
    horaEntrada?:string,
    horaSaida?:string,
    dia_registro?:string[],
    hora_saida?:string[],
    hora_entrada?:string[]
}