Vue.createApp({
  data() {
    return {
      operacion: '',
    }
  },
  methods: {
    calcular() {
      let resp;

      try{
        resp = eval(this.operacion);
      }catch(e){
        resp = 'Syntax Error';
      }
      
      this.operacion = resp;
    },
    escribirOperacion(value) {
      if(this.operacion == 'Syntax Error'){
        this.operacion = '';
      }
      this.operacion += value;
    },
    limpiar() {
      this.operacion = '';
    }
  }
}).mount('#app');