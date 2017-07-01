const vm = new Vue({
    el: 'main',
    data:  {
        conectado: false,
        edad: 8000,
        direccion:"http://vuejs.org"
    },
    methods:{
    	action: function(_evt){
    		_evt.preventDefault();
    		alert("Chao! :(");
            this.$data.conectado = false;
    	}
    }
});