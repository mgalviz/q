<template>
  <div>
    
    <div class="has-text-centered">
      <a @click="save()" class="button is-vcentered is-primary is-outlined is-rounded">Agregar Proyecto</a>
    </div>
    <br>
    <section>
      <b-tabs type="is-boxed" position="is-centered" expanded>
        <b-tab-item label="Datos Principales">
          <div class="columns">
            <div class="column is-4">
              <section>
                <b-field grouped group-multiline>
                  <b-field label="Nombre del Proyecto" expanded>
                    <b-input v-model="datos.nombreProyecto" placeholder="Nombre del proyecto" type="text" rounded></b-input>
                  </b-field>

                  <b-field label="Socio Principal" expanded>
                    <b-input v-model="datos.socioPrincipal" placeholder="Socio principal" type="text" rounded></b-input>
                  </b-field>

                  <b-field label="Socios" expanded>
                    <b-taginput
                      attached
                      v-model="datos.socios"
                      ellipsis
                      icon="tag"
                      icon-pack="fas"
                      placeholder="Agrega socios"
                    ></b-taginput>
                  </b-field>
                </b-field>
              </section>
            </div>

            <div class="column is-4">
              <b-field grouped group-multiline>
                <b-field label="Nro. Contrato" expanded>
                  <b-input v-model="datos.nroContrato" placeholder="Nro. contrato" type="number" rounded></b-input>
                </b-field>
                <b-field label="Fecha Inicio" expanded>
                  <b-input v-model="datos.fechaInicio" placeholder="DD/MM/AAAA" type="text" rounded></b-input>
                </b-field>
                <b-field label="Fecha Fin" expanded>
                  <b-input v-model="datos.fechaFin" placeholder="DD/MM/AAAA" type="text" rounded></b-input>
                </b-field>
              </b-field>
            </div>

            <div class="column is-4">
              <div class="center">
                <figure class="image is-96x96">
                  <img src="img/factory.svg">
                </figure>
              </div>
              <br>
              <div class="file has-name is-small has-name is-boxed center">
                <label class="file-label">
                  <input
                    class="file-input"
                    type="file"
                    name="logotipo"
                    id="logotipo"
                    ref="logotipo"
                    v-on:change="handleFileUpload()"
                  >
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">Seleccione un logotipo</span>
                  </span>
                  <span class="file-name">{{logotipo.name}}</span>
                </label>
              </div>
            </div>
          </div>
        </b-tab-item>

        <b-tab-item label="Planes">
          <div class="columns">
            <div class="column is-4">
              <section>
                <div class="field">
                  <b-switch v-model="datos.planNegocio" size="is-medium" type="is-success">Plan de negocios</b-switch>
                </div>
                <div class="field">
                  <b-switch v-model="datos.planFinanciero" type="is-success" size="is-medium">Plan financiero</b-switch>
                </div>
                <div class="field">
                  <b-switch v-model="datos.constitutiva" type="is-success" size="is-medium">Constitutiva</b-switch>
                </div>
                <div class="field">
                  <b-switch v-model="datos.logotipo" type="is-success" size="is-medium">Logotipo</b-switch>
                </div>
              </section>
            </div>
            <div class="column is-4">
              <section>
                <div class="field">
                  <b-switch v-model="datos.registroMarca" size="is-medium" type="is-success">Registro de marca</b-switch>
                </div>
                <div class="field">
                  <b-switch v-model="datos.identificacion" size="is-medium" type="is-success">Identificación</b-switch>
                </div>
                <div class="field">
                  <b-switch v-model="datos.curriculum" size="is-medium" type="is-success">Curriculum vitae</b-switch>
                </div>
                <div class="field">
                  <b-switch v-model="datos.domi" size="is-medium" type="is-success">DOMI</b-switch>
                </div>
              </section>
            </div>
            <div class="column is-4">
              <section>
                <div class="field">
                  <b-switch
                    v-model="datos.comprobanteDomicilio"
                    size="is-medium"
                    type="is-success"
                  >Comprobante de domicilio</b-switch>
                </div>
                <div class="field">
                  <b-switch v-model="datos.cuentaBancaria" size="is-medium" type="is-success">Cuenta bancaria</b-switch>
                </div>
                <div class="field">
                  <b-switch v-model="datos.rfc" size="is-medium" type="is-success">R.F.C</b-switch>
                </div>
                <div class="field">
                  <b-switch v-model="datos.curp" size="is-medium" type="is-success">CURP</b-switch>
                </div>
              </section>
            </div>
          </div>
        </b-tab-item>
        <b-tab-item label="Dinero">
          <div class="columns">
            <div class="column is-4">
              <p class="title is-5 has-text-centered">Cetes</p>
              <b-field grouped group-multiline>
                <b-field label="% Anual" expanded>
                  <b-input @keyup.native="calcularCetes()" v-model="datos.porcentajeAnualCetes" placeholder="Nro. contrato" type="text" rounded></b-input>
                </b-field>
                <b-field label="+ 50%" expanded>
                  <b-input v-model="temporal.valorFifty" type="text" disabled rounded expanded></b-input>
                </b-field>
                <b-field label="--" expanded>
                  <b-input v-model="temporal.totalPorFifty" type="text" disabled rounded expanded></b-input>
                </b-field>
                <b-field label="Tasa Mensual" expanded>
                  <b-input v-model="temporal.valorTasaMensualCetes" type="text" disabled rounded expanded></b-input>
                </b-field>
              </b-field>
            </div>
            <div class="column is-4">
              <p class="title is-5 has-text-centered">Valores</p>
              <b-field grouped group-multiline>
                <b-field label="Valor Presente del Proyecto" expanded>
                  <b-input @keyup.native="calcularValorFuturo()" v-model="datos.valorPresenteProyecto" placeholder="Valor Presente" type="number" rounded expanded></b-input>
                </b-field>
                <b-field label="Valor Futuro del Proyecto" expanded>
                  <b-input v-model="datos.valorFuturoProyecto" type="number" disabled rounded expanded></b-input>
                </b-field>
              </b-field>
            </div>
            <div class="column is-4">
              <p class="title is-5 has-text-centered">Estado de Cuenta</p>
              <b-field grouped group-multiline>
                <b-field label="% Proyecto" expanded>
                  <b-input v-model="datos.porcentajeProyecto" placeholder="Porcentaje del Proyecto" type="number" rounded expanded></b-input>
                </b-field>
                <b-field label="Valor Futuro" expanded>
                  <b-input type="number" disabled rounded expanded></b-input>
                </b-field>
                <b-field label="Abono Mensual" expanded>
                  <b-input v-model="datos.abonoMensual" placeholder="Abono Mensual" type="number" rounded expanded></b-input>
                </b-field>
                <b-field label expanded>
                  <b-input v-model="datos.periodo" placeholder="Periodo" type="number" rounded expanded></b-input>
                  <b-input placeholder="Faltante" disabled type="number" rounded expanded></b-input>
                </b-field>
                <b-field label="Total" expanded>
                  <b-input disabled type="number" rounded expanded></b-input>
                </b-field>
              </b-field>
            </div>
          </div>
        </b-tab-item>
        <b-tab-item label="Banco">
          <div class="columns">
            <div class="column is-4">
              <b-field grouped group-multiline>
                <b-field label="Nombre del Banco" expanded>
                  <b-input v-model="datos.nombreBanco" placeholder="Banco" type="text" rounded></b-input>
                </b-field>
                <b-field label="Numero de Cuenta" expanded>
                  <b-input v-model="datos.nroCuentaBanco" placeholder="Nro. de Cuenta" type="text" rounded></b-input>
                </b-field>
                <b-field label="Clave" expanded>
                  <b-input v-model="datos.claveBanco" placeholder="Clave" type="text" rounded></b-input>
                </b-field>
                <b-field label="Saldo Actual" expanded>
                  <b-input v-model="datos.saldoActualBanco" placeholder="Saldo" type="text" rounded></b-input>
                </b-field>
                <b-field label="Total" expanded>
                  <b-input disabled type="text" rounded></b-input>
                </b-field>
                <div class="field">
                  <b-switch v-model="datos.financiamientoBanco" size="is-medium" type="is-success">Financiamiento</b-switch>
                </div>
              </b-field>
            </div>
            <div class="column is-8">
              <b-table
                :data="data"
                :columns="columns"
                :bordered="false"
                :striped="true"
                :narrowed="true"
                :hoverable="true"
                :loading="false"
                :focusable="false"
                :mobile-cards="true"
                class="is-scrollable"
              ></b-table>
            </div>
          </div>
        </b-tab-item>
        <b-tab-item label="Seguro">
          <div class="columns">
            <div class="column is-3">
              <b-field grouped group-multiline>
                <b-field label="Numero de Poliza" expanded>
                  <b-input v-model="datos.nroPolizaSeguro" placeholder="Nro. poliza" type="text" rounded></b-input>
                </b-field>
                <b-field label="Agrupación" expanded>
                  <b-input v-model="datos.agrupacionSeguro" placeholder="Agrupación" type="text" rounded></b-input>
                </b-field>
                <b-field label="CIS" expanded>
                  <b-input v-model="datos.cisSeguro" placeholder="CIS" type="text" rounded></b-input>
                </b-field>
                <b-field label="Numero de Recibo" expanded>
                  <b-input v-model="datos.nroReciboSeguro" placeholder="Nro. recibo" type="text" rounded></b-input>
                </b-field>
              </b-field>
            </div>
            <div class="column is-3">
              <b-field grouped group-multiline>
                <b-field label="Clave del Agente" expanded>
                  <b-input v-model="datos.claveAgenteSeguro" placeholder="Clave" type="text" rounded></b-input>
                </b-field>
                <b-field label="Periodo" expanded>
                  <b-input v-model="datos.periodoSeguro" placeholder="Periodo" type="text" rounded></b-input>
                </b-field>
                <b-field label="Vida" expanded>
                  <b-input v-model="datos.vidaSeguro" placeholder="$ 0,00" type="number" rounded></b-input>
                </b-field>
                <b-field label="Anticipo" expanded>
                  <b-input v-model="datos.anticipoSeguro" placeholder="$ 0,00" type="number" rounded></b-input>
                </b-field>
              </b-field>
            </div>
            <div class="column is-3">
              <b-field grouped group-multiline>
                <b-field label="Membrecía Medica" expanded>
                  <b-input v-model="datos.membreciaMedicaSeguro" placeholder="$ 0,00" type="number" rounded></b-input>
                </b-field>
                <b-field label="Desempleo" expanded>
                  <b-input v-model="datos.desempleoSeguro" placeholder="$ 0,00" type="number" rounded></b-input>
                </b-field>
                <b-field label="Accidentes" expanded>
                  <b-input v-model="datos.accidentesSeguro" placeholder="$ 0,00" type="number" rounded></b-input>
                </b-field>
                <b-field label="Defunción" expanded>
                  <b-input v-model="datos.defuncionSeguro" placeholder="$ 0,00" type="number" rounded></b-input>
                </b-field>
                <div class="field">
                  <b-switch v-model="datos.estadoSeguro" size="is-medium" type="is-success">Estado del Seguro</b-switch>
                </div>
              </b-field>
            </div>
            <div class="column is-3">
              <div class="center">
                <figure class="image is-96x96">
                  <img src="img/factory.svg">
                </figure>
              </div>
              <br>
              <div class="file has-name is-small has-name is-boxed center">
                <label class="file-label">
                  <input
                    class="file-input"
                    type="file"
                    name="logotipo"
                    id="logotipo"
                    ref="logotipo"
                    v-on:change="handleFileUpload()"
                  >
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">Seleccione un logotipo</span>
                  </span>
                  <span class="file-name">{{logotipo.name}}</span>
                </label>
              </div>
            </div>
          </div>
        </b-tab-item>
      </b-tabs>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      temporal: {
        valorFifty: 0,
        totalPorFifty: 0,
        valorTasaMensualCetes: 0
      },

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
        valorFuturoProyecto: 0,
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
      logotipo: "",
      data: [
        {
          month: "Enero",
          year1: "$ 0,00",
          year2: "$ 0,00",
          year3: "$ 0,00",
          year4: "$ 0,00",
          year5: "$ 0,00"
        },
        {
          month: "Febrero",
          year1: "$ 0,00",
          year2: "$ 0,00",
          year3: "$ 0,00",
          year4: "$ 0,00",
          year5: "$ 0,00"
        },
        {
          month: "Marzo",
          year1: "$ 0,00",
          year2: "$ 0,00",
          year3: "$ 0,00",
          year4: "$ 0,00",
          year5: "$ 0,00"
        },
        {
          month: "Abril",
          year1: "$ 0,00",
          year2: "$ 0,00",
          year3: "$ 0,00",
          year4: "$ 0,00",
          year5: "$ 0,00"
        },
        {
          month: "Mayo",
          year1: "$ 0,00",
          year2: "$ 0,00",
          year3: "$ 0,00",
          year4: "$ 0,00",
          year5: "$ 0,00"
        },
        {
          month: "Junio",
          year1: "$ 0,00",
          year2: "$ 0,00",
          year3: "$ 0,00",
          year4: "$ 0,00",
          year5: "$ 0,00"
        },
        {
          month: "Julio",
          year1: "$ 0,00",
          year2: "$ 0,00",
          year3: "$ 0,00",
          year4: "$ 0,00",
          year5: "$ 0,00"
        },
        {
          month: "Agosto",
          year1: "$ 0,00",
          year2: "$ 0,00",
          year3: "$ 0,00",
          year4: "$ 0,00",
          year5: "$ 0,00"
        },
        {
          month: "Septiembre",
          year1: "$ 0,00",
          year2: "$ 0,00",
          year3: "$ 0,00",
          year4: "$ 0,00",
          year5: "$ 0,00"
        },
        {
          month: "Octubre",
          year1: "$ 0,00",
          year2: "$ 0,00",
          year3: "$ 0,00",
          year4: "$ 0,00",
          year5: "$ 0,00"
        },
        {
          month: "Noviembre",
          year1: "$ 0,00",
          year2: "$ 0,00",
          year3: "$ 0,00",
          year4: "$ 0,00",
          year5: "$ 0,00"
        },
        {
          month: "Diciembre",
          year1: "$ 0,00",
          year2: "$ 0,00",
          year3: "$ 0,00",
          year4: "$ 0,00",
          year5: "$ 0,00"
        }
      ],
      columns: [
        {
          field: "month",
          label: "Mes"
        },
        {
          field: "year1",
          label: "Año 1"
        },
        {
          field: "year2",
          label: "Año 2"
        },
        {
          field: "year3",
          label: "Año 3"
        },
        {
          field: "year4",
          label: "Año 4"
        },
        {
          field: "year5",
          label: "Año 5"
        }
      ]
    };
  },
  methods: {
    handleFileUpload() {
      this.logotipo = this.$refs.logotipo.files[0];
    },
    async save(){
      console.log(this.datos)
      axios.post('http://localhost:8030/project/save', this.datos)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    },
    calcularCetes(){
      let valor = this.datos.porcentajeAnualCetes
      let tempFift = parseFloat(valor) * 0.5
      this.temporal.valorFifty = Math.round(tempFift * 100) / 100
      let tempTotalFifty = parseFloat(valor) + this.temporal.valorFifty
      this.temporal.totalPorFifty = Math.round(tempTotalFifty * 100) / 100
      let tasaMensual = this.temporal.totalPorFifty / 12
      this.temporal.valorTasaMensualCetes = Math.round(tasaMensual * 100) / 100
    },
    calcularValorFuturo(){
      let valor = parseFloat(this.datos.valorPresenteProyecto)
      let valorMensual = valor * (parseFloat(this.temporal.valorTasaMensualCetes) / 100)
      let valorFuturo = parseFloat(valorMensual * 12 * 5)
      let valorFuturoTotal = valor + valorFuturo
      this.datos.valorFuturoProyecto = Math.round(valorFuturoTotal * 100) / 100
    }
  }
};
</script>

<style scoped>
.newp {
  border: solid 1px #1d1919;
  margin: 50px;
}

#tags {
  max-width: 250px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.field {
  margin: 5px;
}

.is-scrollable {
  overflow-y: scroll;
  height: 18em;
}
</style>

