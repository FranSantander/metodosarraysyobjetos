let Radiologia = [
    { Hora: '11:00', Especialista: 'IGNACIO SCHULZ', Paciente: 'FRANCISCA ROJAS', Rut: '9878782-1', Prevision: 'FONASA' },
    { Hora: '11:30', Especialista: 'FERNANDO WURTHZ', Paciente: 'PAMELA ESTRADA', Rut: '15345241-3', Prevision: 'ISAPRE' },
    { Hora: '15:00', Especialista: 'FEDERICO SUBERCASEAUX', Paciente: 'ARMANDO LUNA', Rut: '16445345-9', Prevision: 'ISAPRE' },
    { Hora: '15:30', Especialista: 'ANA MARIA GODOY', Paciente: 'MANUEL GODOY', Rut: '17666419-0', Prevision: 'FONASA' },
    { Hora: '16:00', Especialista: 'PATRICIA SUAZO', Paciente: 'RAMON ULLOA', Rut: '14989389-K', Prevision: 'FONASA' }]
console.log(Radiologia)

let Traumatologia = [{ Hora: '8:00', Especialista: 'MARIA PAZ ALTUZARRA', Paciente: 'PAULA SANCHEZ', Rut: '15554774-5', Prevision: 'FONASA' },
{ Hora: '10:00', Especialista: 'RAUL ARAYA', Paciente: 'ANGÉLICA NAVAS', Rut: '15444147-9', Prevision: 'ISAPRE' },
{ Hora: '10:30', Especialista: 'MARIA ARRIAGADA', Paciente: 'ANA KLAPP', Rut: '17879423-9', Prevision: 'ISAPRE' },
{ Hora: '11:00', Especialista: 'ALEJANDRO BADILLA', Paciente: 'FELIPE MARDONES', Rut: '1547423-6', Prevision: 'ISAPRE' },
{ Hora: '11:30', Especialista: 'CECILIA BUDNIK', Paciente: 'DIEGO MARRE', Rut: '16554741-K', Prevision: 'FONASA' },
{ Hora: '12:00', Especialista: 'ARTURO CAVAGNARO', Paciente: 'CECILIA MENDEZ', Rut: '9747535-8', Prevision: 'ISAPRE' },
{ Hora: '12:30', Especialista: 'ANDRES KANACRI', Paciente: 'MARCIAL SUAZO', Rut: '11254785-5', Prevision: 'ISAPRE' }]
console.log(Traumatologia)

let Dental = [{ Hora: '8:30', Especialista: 'ANDREA ZUÑIGA', Paciente: 'MARCELA RETAMAL', Rut: '11123425-6', Prevision: 'ISAPRE' },
{ Hora: '11:00', Especialista: 'MARIA PIA ZAÑARTU', Paciente: 'ANGEL MUÑOZ', Rut: '9878789-2', Prevision: 'ISAPRE' },
{ Hora: '11:30', Especialista: 'SCARLETT WITTING', Paciente: 'MARIO KAST', Rut: '7998789-5', Prevision: 'FONASA' },
{ Hora: '13:00', Especialista: 'FRANCISCO VON TEUBER', Paciente: 'KARIN FERNANDEZ', Rut: '18887662-K', Prevision: 'FONASA' },
{ Hora: '13:30', Especialista: 'EDUARDO VIÑUELA', Paciente: 'HUGO SANCHEZ', Rut: '17665461-4', Prevision: 'FONASA' },
{ Hora: '14:00', Especialista: 'RAQUEL VILLASECA', Paciente: 'ANA SEPULVEDA', Rut: '14441281-0', Prevision: 'ISAPRE' }]
console.log(Dental)

//Comienza desafío
//#1
Traumatologia.push({ Hora: "09:00", EspEcialista: "RENÉ POBLETE", Paciente: "ANA GELLONA", Rut: "13123329-7", Prevision: "ISAPRE", });
Traumatologia.push({ Hora: "09:30", EspEcialista: "MARIA SOLAR", Paciente: "RAMIRO ANDRADE", Rut: "12221451-K", Prevision: "FONASA", });
Traumatologia.push({ Hora: "10:00", Especialista: "RAUL LOYOLA", Paciente: "CARMEN ISLA", Rut: "10112348-3", Prevision: "ISAPRE", });
Traumatologia.push({ Hora: "10:30", Especialista: "ANTONIO LARENAS", Paciente: "PABLO LOAYZA", Rut: "13453234-1", Prevision: "ISAPRE", });
Traumatologia.push({ Hora: "12:00", Especialista: "MATIAS ARAVENA", Paciente: "SUSANA POBLETE", Rut: "14345656-6", Prevision: "FONASA", });
console.log(Traumatologia);

//#2 
//Eliminar primer elemento
Radiologia.shift();
//Eliminar último elemento
Radiologia.pop();
console.log(Radiologia);

//#3
let stringAux;
for (let i = 0; i < Dental.length; i++) {
    //stringAux = dental[i].join("-");
    //console.log(stringAux);
    stringAux = `${Dental[i].Hora} - ${Dental[i].Especialista} - ${Dental[i].Paciente} - ${Dental[i].Rut} - ${Dental[i].Prevision}`;
    document.write(stringAux);
    document.write("<br>");
}

//#4
let listado_completo = Radiologia.concat(Traumatologia, Dental);
document.write("<br>");
document.write("<h2>Pacientes atendidos en el centro médico:</h2>");
for (let i = 0; i < listado_completo.length; i++) {
    ;
    document.write(listado_completo[i].Paciente);
    document.write("<br>");
}

//#5
document.write("<br>");
document.write("<h2>Consultas Dental, pacientes de ISAPRE:</h2>");
let filtroDental = Dental.filter((obj) => {
    return obj.Prevision == 'ISAPRE';
});

for (let i = 0; i < filtroDental.length; i++) {
    document.write(`${filtroDental[i].Paciente} - ${filtroDental[i].Prevision}`);
    document.write("<br>");
}

//#6
document.write("<br>");
document.write("<h2>Consultas Traumatología, pacientes de FONASA:</h2>");

let filtro_traumatologia = Traumatologia.filter((obj) => {
    return obj.Prevision == 'FONASA';
})

for (let i = 0; i < filtro_traumatologia.length; i++) {
    document.write(`${filtro_traumatologia[i].Paciente} - ${filtro_traumatologia[i].Prevision}`);
    document.write("<br>");
}