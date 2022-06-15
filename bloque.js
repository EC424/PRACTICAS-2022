var obj={
    nombre:'eduardo',
    mostrar:function(){
          alert(this.nombre);
    },
};
var empleado=Object.create(obj);
empleado.cambiar=function(nuevonombre){
    this.nombre=nuevonombre;
};
empleado.cambiar('gustavo');
empleado.mostrar();