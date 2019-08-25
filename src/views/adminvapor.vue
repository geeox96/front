<template>
  <v-container fluid grid-list-xl text-xs-center>
      <dialog-novo-fabricante :abrir="dialogNovoFabricante" @fechar="dialogNovoFabricante = false" />
      <dialog-editar-fabricante  v-if="dialogEditarFabricante" :abrir="dialogEditarFabricante" :fabricante="fabricanteEditar" @fechar="fecharEditarFabricante" />
      <v-layout row wrap justify-center>
    <span class="display-3"> BEM VINDO ADMINISTRADOR </span>
      </v-layout>
      
      <v-tabs fixed-tabs>
      <v-tab >Inicio</v-tab>
        <v-tab-item><span>AEEEEEEEEEEEEEEEEEEEEEEEEEEE</span></v-tab-item>


      <v-tab>Gerenciar Juices</v-tab>
        <v-tab-item>
          <v-data-table
      :headers="juiceheaders"
      :items="juice"
      :items-per-page="7"
      class="elevation-0"
    ></v-data-table>
        </v-tab-item>


      <v-tab>Gerenciar Fabricantes</v-tab>
      
      <v-tab-item>
          <v-flex>
        <v-text-field
        v-model="search2"
        label="Buscar"
        single-line
      ></v-text-field>
          </v-flex>
        <v-data-table
      :headers="fabricanteheaders"
      :items="fabricante"
      :search="search2"
      :items-per-page="7"
      class="elevation-0"
    ><template v-slot:item.ativo="item">
        
        <span v-if='item.value' class='green--text'>Ativado</span>
        <span v-if='!item.value'  class='red--text'>Desativado</span>
      </template>
      <template v-slot:item.action="item">
        
        <v-btn @click='detalhesFabricante(item.item)' fab small class="elevation-0"><v-icon>mdi-cake-variant</v-icon></v-btn>
      </template>
       </v-data-table>

       <v-btn @click="dialogNovoFabricante = true" > CRIAR NOVO FABRICANTE </v-btn>
        </v-tab-item>

      <v-tab>Gerenciar Fornecedores</v-tab>

      <v-tab-item>
          <v-flex>
        <v-text-field
        v-model="search2"
        label="Buscar"
        single-line
      ></v-text-field>
          </v-flex>
        <v-data-table
      :headers="fabricanteheaders"
      :items="fabricante"
      :search="search2"
      :items-per-page="7"
      class="elevation-0"
    ><template v-slot:item.ativo="item">
        
        <span v-if='item.value' class='green--text'>Ativado</span>
        <span v-if='!item.value'  class='red--text'>Desativado</span>
      </template>
      <template v-slot:item.action="item">
        
        <v-btn @click='detalhesFabricante(item.item)' fab small class="elevation-0"><v-icon>mdi-cake-variant</v-icon></v-btn>
      </template>
       </v-data-table>
        </v-tab-item>

      <v-tab>Gerenciar YouTubers</v-tab>

        <v-tab-item>
          <v-flex>
        <v-text-field
        v-model="search2"
        label="Buscar"
        single-line
      ></v-text-field>
          </v-flex>
        <v-data-table
      :headers="fabricanteheaders"
      :items="fabricante"
      :search="search2"
      :items-per-page="7"
      class="elevation-0"
    ><template v-slot:item.ativo="item">
        
        <span v-if='item.value' class='green--text'>Ativado</span>
        <span v-if='!item.value'  class='red--text'>Desativado</span>
      </template>
      <template v-slot:item.action="item">
        
        <v-btn @click='detalhesFabricante(item.item)' fab small class="elevation-0"><v-icon>mdi-cake-variant</v-icon></v-btn>
      </template>
       </v-data-table>
        </v-tab-item>

      <v-tab>Gerenciar Reviers</v-tab>

        <v-tab-item>
          <v-flex>
        <v-text-field
        v-model="search2"
        label="Buscar"
        single-line
      ></v-text-field>
          </v-flex>
        <v-data-table
      :headers="fabricanteheaders"
      :items="fabricante"
      :search="search2"
      :items-per-page="7"
      class="elevation-0"
    ><template v-slot:item.ativo="item">
        
        <span v-if='item.value' class='green--text'>Ativado</span>
        <span v-if='!item.value'  class='red--text'>Desativado</span>
      </template>
      <template v-slot:item.action="item">
        
        <v-btn @click='detalhesFabricante(item.item)' fab small class="elevation-0"><v-icon>mdi-cake-variant</v-icon></v-btn>
      </template>
       </v-data-table>
        </v-tab-item>

      <v-tab>Gerenciar Usuarios</v-tab>

      <v-tab-item>
          <v-flex>
        <v-text-field
        v-model="search6"
        label="Buscar"
        single-line
      ></v-text-field>
          </v-flex>
        <v-data-table
      :headers="usuarioheaders"
      :items="usuario"
      :search="search6"
      :items-per-page="7"
      class="elevation-0"
    >
    <template v-slot:item.tipo_conta="item">
        <span v-if="item.value === 110" >Usuario</span>
        <span v-if="item.value === 180" >Fabricante</span>
        <span v-if="item.value === 210" >Forncedor</span>
        <span v-if="item.value === 235" >Youtuber</span>
        <span v-if="item.value === 340" >Reviewer</span>
        <span v-if="item.value === 400" >Administrador</span>
      </template>

      <template v-slot:item.action="item">
          
        <v-btn @click='detalhesUsuario(item.item)' fab small class="elevation-0"><v-icon>mdi-cake-variant</v-icon></v-btn>
      </template>
       </v-data-table>
        </v-tab-item>

    </v-tabs>
    
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import dialogNovoFabricante from "../components/dialog-novo-fabricante";
import dialogEditarFabricante from "../components/dialog-editar-fabricante";

export default {
  components: {
    "dialog-novo-fabricante": dialogNovoFabricante,
    "dialog-editar-fabricante": dialogEditarFabricante
  },

    data() {
        return {
        dialogNovoFabricante: false, 
        dialogEditarFabricante: false, 
        fabricanteEditar: {},
        search1: '',
        search2: '',
        search3: '',
        search4: '',
        search5: '',
        search6: '',
            juiceheaders: [
        {
          text: 'Nome',
          align: 'left',
          sortable: false,
          value: 'nome',
        },
        { text: 'Marca', value: 'fabricante' }
        
      ],
        juice: [],

      fabricanteheaders: [
        { text: 'Nome',align: 'left',value: 'nome'},
        { text: 'Situacao', value: 'ativo', align: 'center' },
        { text: 'Ações', value: 'action', align: 'right' }
        
      ],
       fabricante: [],

       usuarioheaders: [
        { text: 'Nome', align: 'left', value: 'nome'},
        { text: 'Email', value: 'email', align: 'center' },
        { text: 'Tipo', value: 'tipo_conta', align: 'center' },
        { text: 'Ações', value: 'action', align: 'right' }
      ],
       usuario: []

        }
    },

    computed: {
        ...mapGetters(['getTodosFabricantes','getTodosUsuarios'])
    },

    methods: {
        async popularTables() {
            await this.$store.dispatch('consultarFabricantes') 
              this.fabricante = this.getTodosFabricantes.map(fabricante => fabricante)

            await this.$store.dispatch('consultarUsuarios')
              this.usuario = this.getTodosUsuarios.map(usuario => usuario)
              
        },

        detalhesFabricante(fabricanteselect) {
            this.fabricanteEditar = fabricanteselect
            this.dialogEditarFabricante = true
        },

        async fecharEditarFabricante() {
          await this.$store.dispatch('consultarFabricantes') 
              this.fabricante = this.getTodosFabricantes.map(fabricante => fabricante)
          this.dialogEditarFabricante = false
        },

        detalhesUsuario(alo) {
            console.log(alo)
            
        },

        
    },

    created() {
      this.popularTables()
    }

}
</script>

<style>

</style>