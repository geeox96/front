<template>
  <v-container fluid grid-list-xl text-xs-center>
    <dialog-novo-fabricante
      v-if="dialogNovoFabricante"
      :abrir="dialogNovoFabricante"
      @fechar="fecharDialog"
    />
    <dialog-editar-fabricante
      v-if="dialogEditarFabricante"
      :abrir="dialogEditarFabricante"
      :fabricante="fabricanteEditar"
      @fechar="fecharDialog"
    />
    <dialog-novo-liquido
      v-if="dialogNovoLiquido"
      :abrir="dialogNovoLiquido"
      @fechar="fecharDialog"
    />
    <dialog-editar-liquido
      v-if="dialogEditarLiquido"
      :abrir="dialogEditarLiquido"
      :liquido="liquidoEditar"
      @fechar="fecharDialog"
    />
    <!-- <v-layout row wrap justify-center>
      <span class="display-3">BEM VINDO ADMINISTRADOR</span>
    </v-layout>
    <router-view></router-view> -->

    <v-tabs class='elevation-5' fixed-tabs>
      <v-tab>Inicio</v-tab>
      <v-tab-item>
        <span>AEEEEEEEEEEEEEEEEEEEEEEEEEEE</span>
      </v-tab-item>

      <v-tab>Gerenciar Juices</v-tab>
      <v-tab-item>
        <v-flex>
          <v-text-field v-model="search1" label="Buscar" single-line></v-text-field>
        </v-flex>
        <v-data-table
          :headers="juiceheaders"
          :items="juice"
          :items-per-page="7"
          class="elevation-0"
        >
          <template v-slot:item.action="item">
            <v-btn @click="detalhesLiquido(item.item)" fab small class="elevation-0">
              <v-icon>mdi-cake-variant</v-icon>
            </v-btn>
          </template>
        </v-data-table>
        <v-btn @click="dialogNovoLiquido = true">CRIAR NOVO LIQUIDO</v-btn>
      </v-tab-item>

      <v-tab>Gerenciar Fabricantes</v-tab>

      <v-tab-item>
        <v-flex>
          <v-text-field class='pa-5' prepend-inner-icon="mdi-briefcase-search" v-model="search2" label="Buscar" single-line></v-text-field>
        </v-flex>
        <v-data-table
          :headers="fabricanteheaders"
          :items="fabricante"
          :search="search2"
          :items-per-page="7"
          class="elevation-0"
        >
          <template v-slot:item.ativo="item">
            <span v-if="item.value" class="green--text">Ativado</span>
            <span v-if="!item.value" class="red--text">Desativado</span>
          </template>
          <template v-slot:item.marca="item">
            <span>{{item.value.nome}}</span>
          </template>
          <template v-slot:item.action="item">
            <v-btn @click="detalhesFabricante(item.item)" fab small class="elevation-0">
              <v-icon>mdi-cake-variant</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      <v-btn class='ma-5' @click="dialogNovoFabricante = true">CRIAR NOVO FABRICANTE</v-btn>
      </v-tab-item>

      <v-tab>Gerenciar Fornecedores</v-tab>

      <v-tab-item>
        <v-flex>
          <v-text-field v-model="search2" label="Buscar" single-line></v-text-field>
        </v-flex>
        <v-data-table
          :headers="fabricanteheaders"
          :items="fabricante"
          :search="search2"
          :items-per-page="7"
          class="elevation-0"
        >
          <template v-slot:item.ativo="item">
            <span v-if="item.value" class="green--text">Ativado</span>
            <span v-if="!item.value" class="red--text">Desativado</span>
          </template>
          <template v-slot:item.action="item">
            <v-btn @click="detalhesFabricante(item.item)" fab small class="elevation-0">
              <v-icon>mdi-cake-variant</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-tab-item>

      <v-tab>Gerenciar YouTubers</v-tab>

      <v-tab-item>
        <v-flex>
          <v-text-field v-model="search2" label="Buscar" single-line></v-text-field>
        </v-flex>
        <v-data-table
          :headers="fabricanteheaders"
          :items="fabricante"
          :search="search2"
          :items-per-page="7"
          class="elevation-0"
        >
          <template v-slot:item.ativo="item">
            <span v-if="item.value" class="green--text">Ativado</span>
            <span v-if="!item.value" class="red--text">Desativado</span>
          </template>
          <template v-slot:item.action="item">
            <v-btn @click="detalhesFabricante(item.item)" fab small class="elevation-0">
              <v-icon>mdi-cake-variant</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-tab-item>

      <v-tab>Gerenciar Reviers</v-tab>

      <v-tab-item>
        <v-flex>
          <v-text-field v-model="search2" label="Buscar" single-line></v-text-field>
        </v-flex>
        <v-data-table
          :headers="fabricanteheaders"
          :items="fabricante"
          :search="search2"
          :items-per-page="7"
          class="elevation-0"
        >
          <template v-slot:item.ativo="item">
            <span v-if="item.value" class="green--text">Ativado</span>
            <span v-if="!item.value" class="red--text">Desativado</span>
          </template>
          <template v-slot:item.action="item">
            <v-btn @click="detalhesFabricante(item.item)" fab small class="elevation-0">
              <v-icon>mdi-cake-variant</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-tab-item>

      <v-tab>Gerenciar Usuarios</v-tab>

      <v-tab-item>
        <v-flex>
          <v-text-field v-model="search6" label="Buscar" single-line></v-text-field>
        </v-flex>
        <v-data-table
          :headers="usuarioheaders"
          :items="usuario"
          :search="search6"
          :items-per-page="7"
          class="elevation-0"
        >
          <template v-slot:item.tipo_conta="item">
            <span v-if="item.value === 110">Usuario</span>
            <span v-if="item.value === 180">Fabricante</span>
            <span v-if="item.value === 210">Forncedor</span>
            <span v-if="item.value === 235">Youtuber</span>
            <span v-if="item.value === 340">Reviewer</span>
            <span v-if="item.value === 400">Administrador</span>
          </template>

          <template v-slot:item.action="item">
            <v-btn @click="detalhesUsuario(item.item)" fab small class="elevation-0">
              <v-icon>mdi-cake-variant</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import dialogNovoFabricante from "../components/administracao/dialog-novo-fabricante";
import dialogNovoLiquido from "../components/administracao/dialog-novo-liquido";
import dialogEditarFabricante from "../components/administracao/dialog-editar-fabricante";
import dialogEditarLiquido from "../components/administracao/dialog-editar-liquido";

export default {
  components: {
    "dialog-novo-fabricante": dialogNovoFabricante,
    "dialog-novo-liquido": dialogNovoLiquido,
    "dialog-editar-fabricante": dialogEditarFabricante,
    "dialog-editar-liquido": dialogEditarLiquido
  },

  data() {
    return {
      dialogNovoFabricante: false,
      dialogNovoLiquido: false,
      dialogEditarFabricante: false,
      dialogEditarLiquido: false,
      fabricanteEditar: {},
      liquidoEditar: {},
      search1: "",
      search2: "",
      search3: "",
      search4: "",
      search5: "",
      search6: "",
      juiceheaders: [
        {
          text: "Nome",
          align: "left",
          sortable: false,
          value: "nome"
        },
        { text: "Marca", value: "fabricante_id.nome", align: "center" },
        { text: "Preço", value: "valor", align: "center" },
        { text: "Visitas", value: "visitas", align: "center" },
        { text: "Nota", value: "nota", align: "center" },
        { text: "Ações", value: "action", align: "right" }
      ],
      juice: [],

      fabricanteheaders: [
        { text: "Nome", align: "left", value: "nome" },
        { text: "Situacao", value: "ativo", align: "center" },
        { text: "Ações", value: "action", align: "right" }
      ],
      fabricante: [],

      usuarioheaders: [
        { text: "Nome", align: "left", value: "nome" },
        { text: "Email", value: "email", align: "center" },
        { text: "Tipo", value: "tipo_conta", align: "center" },
        { text: "Ações", value: "action", align: "right" }
      ],
      usuario: []
    };
  },

  computed: {
    ...mapGetters([
      "getTodosFabricantes",
      "getTodosUsuarios",
      "getTodosLiquidos"
    ])
  },

  methods: {
    usuarios() {
      this.$router.push({ name: "Juices" });
    },

    async popularTables() {
      await this.$store.dispatch("consultarFabricantes");
      this.fabricante = this.getTodosFabricantes.map(fabricante => fabricante);

      await this.$store.dispatch("consultarUsuarios");
      this.usuario = this.getTodosUsuarios.map(usuario => usuario);

      await this.$store.dispatch("consultarLiquidos");
      this.juice = this.getTodosLiquidos.map(Liquido => Liquido);
    },

    detalhesFabricante(fabricante) {
      this.fabricanteEditar = fabricante;
      this.dialogEditarFabricante = true;
    },

    detalhesUsuario(usuario) {
      console.log(usuario);
    },

    detalhesLiquido(liquido) {
      console.log(liquido);
      this.liquidoEditar = liquido;
      this.dialogEditarLiquido = true;
    },

    async fecharDialog(janela) {
      switch (janela) {
        case 1:
          await this.$store.dispatch("consultarFabricantes");
          this.fabricante = this.getTodosFabricantes.map(
            fabricante => fabricante
          );
          this.dialogNovoFabricante = false;
          break;
        case 2:
          await this.$store.dispatch("consultarFabricantes");
          this.fabricante = this.getTodosFabricantes.map(
            fabricante => fabricante
          );
          this.dialogEditarFabricante = false;
          break;
        case 3:
          await this.$store.dispatch("consultarLiquidos");
          this.juice = this.getTodosLiquidos.map(liquido => liquido);
          this.dialogNovoLiquido = false;
          break;
        case 4:
          await this.$store.dispatch("consultarLiquidos");
          this.juice = this.getTodosLiquidos.map(liquido => liquido);
          this.dialogEditarLiquido = false;
          break;
      }
    }
  },

  created() {
    this.popularTables();
    console.log("entrou");
  }
};
</script>

<style>
</style>