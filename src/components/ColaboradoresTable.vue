<template>
  <v-card
    elevation="0"
  >
    <v-card-title>
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="search"
            label="Criterio"
            single-line
            hint="This field uses counter prop"
            filled
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="4">
            <v-select
            :items="sucursales"
            label="Sucursales"
            multiple
            chips
            persistent-hint
            @change="filterBySucuarsal"
          ></v-select>
        </v-col>
        <v-col cols="4">
            <v-select
            :items="departamentos"
            label="Departamentos"
            multiple
            chips
            persistent-hint
            @change="filterByDepartamento"
          ></v-select>
          <pre>{{ departamentosSeleccionados }}</pre>
        </v-col>
      </v-row>
    </v-card-title>
    <v-data-table
      v-model="selected"
      :single-select="singleSelect"
      item-key="name"
      show-select

      :headers="headers"
      :items="results"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
    components: {
    },
    created: function(){
      this.getCollaborators()
    },
    mounted: function(){
    },
    methods: {
      getCollaborators: function(){
        axios.get("http://ti.pinturasacuario.mx/api/users")
        .then( response => {
          response.data.data.users.forEach( item => {
            this.desserts.push({
              name: item.name,
              departmento: item.department.name,
              sucursal: item.branch_office.name,
              puesto: item.role.name,
              numero: item.folio,
              ext: item.ext1,
            })
          })

          this.results = this.desserts

          this.departmentsUnique()
          this.branchOfficeUnique()
        }).catch( error => {
          console.log(error)
        })
      },

      departmentsUnique: function(){
        var departments = []

        this.desserts.forEach( item => {
          if (departments.indexOf(item.departmento) === -1) {
            departments.push(item.departmento)
          }
        })

        this.departamentos = departments.sort()
      },

      branchOfficeUnique: function(){
        var branchOffice = []

        this.desserts.forEach( item => {
          if (branchOffice.indexOf(item.sucursal) === -1) {
            branchOffice.push(item.sucursal)
          }
        })

        this.sucursales = branchOffice.sort()
      },
      filterBySucuarsal: function(event){

        if (event.length > 0) {
          this.results = this.desserts.filter( item => (event.indexOf(item.sucursal) > -1) )
        }else{
          this.results = this.desserts
        }
      },
      filterByDepartamento: function(event){
        if (event.length > 0) {
          this.results = this.desserts.filter( item => (event.indexOf(item.departmento) > -1) )
        }else{
          this.results = this.desserts
        }
      }      
    },    
    data () {
      return {
        singleSelect: false,
        selected: [],
        departamentosSeleccionados: null,
        departamentos: [],
        sucursales: [],
        search: '',
        headers: [
          { text: 'Número', value: 'numero' },
          {
            text: 'Nombre',
            align: 'left',
            // filterable: true,
            value: 'name',
          },
          { text: 'Puesto', value: 'puesto' },
          { text: 'Sucursal', value: 'sucursal' },
          { text: 'Departamento', value: 'departmento' },
          { text: 'Extensión', value: 'ext' },

        ],
        desserts: [],
        results: [],
      }
    },
    computed: {
    }
  }
</script>

<style>
  .v-card{
    outline: none;
  }
</style>