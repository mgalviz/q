const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema

const Project = new Schema({

    /**
    * Datos Principales
    */

   nombreProyecto: String,
   socioPrincipal: String,
   socios: [String],
   nroContrato: String,
   fechaInicio: String,
   fechaFin: String,
   logoProyecto: String,

    /**
    * Planes
    */

    planNegocio: Boolean,
    planFinanciero: Boolean,
    constitutiva: Boolean,
    logotipo: Boolean,
    registroMarca: Boolean,
    identificacion: Boolean,
    curriculum: Boolean,
    domi: Boolean,
    comprobanteDomicilio: Boolean,
    cuentaBancaria: Boolean,
    rfc: Boolean,
    curp: Boolean,

    
    /**
     * Dinero
     */
    
    porcentajeAnualCetes: Number,
    valorPresenteProyecto: Number,
    valorFuturoProyecto: Number,
    porcentajeProyecto: Number,
    abonoMensual: Number,
    periodo: Number,

    /**
     * Banco
     */

    nombreBanco: String,
    nroCuentaBanco: String,
    claveBanco: String,
    saldoActualBanco: String,
    financiamientoBanco: Boolean,

    /** 
     * Seguro
     */
    
    nroPolizaSeguro: String,
    agrupacionSeguro: String,
    cisSeguro: String,
    nroReciboSeguro: String,
    claveAgenteSeguro: String,
    periodoSeguro: String,
    vidaSeguro: Number,
    anticipoSeguro: Number,
    membreciaMedicaSeguro: Number,
    desempleoSeguro: Number,
    accidentesSeguro: Number,
    defuncionSeguro: Number,
    estadoSeguro: Boolean,
    logoSeguro: String


})

Project.plugin(timestamp);
module.exports = mongoose.model('Project', Project)

//export default mongoose.model('project', Project);


/**

datos: {
    //Datos Principales
    nombreProyecto: '',
    socioPrincipal: '',
    socios: [],
    nroContrato: '',
    fechaInicio: '',
    fechaFin: '',
    logoProyecto: '',
    
    //Planes
    planNegocio: false,
    planFinanciero: false,
    constitutiva: false,
    logotipo: false,
    registroMarca: false,
    identificacion: false,
    curriculum: false,
    domi: false,
    comprobanteDomicilio: false,
    cuentaBancaria: false,
    rfc: false,
    curp: false,

    //Dinero
    porcentajeAnualCetes: 0,
    valorPresenteProyecto: 0,
    porcentajeProyecto: 0,
    abonoMensual: 0,
    periodo: 0,

    //Banco
    nombreBanco: '',
    nroCuentaBanco: '',
    claveBanco: '',
    saldoActualBanco: '',
    financiamientoBanco: false,

    //Seguro
    nroPolizaSeguro: '',
    agrupacionSeguro: '',
    cisSeguro: '',
    nroReciboSeguro: '',
    claveAgenteSeguro: '',
    periodoSeguro: '',
    vidaSeguro: 0,
    anticipoSeguro: 0,
    membreciaMedicaSeguro: 0,
    desempleoSeguro: 0,
    accidentesSeguro: 0,
    defuncionSeguro: 0,
    estadoSeguro: false,
    logoSeguro: ''


    },

 */