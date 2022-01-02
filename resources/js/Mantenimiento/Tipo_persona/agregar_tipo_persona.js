$(document).ready(function () {
    var formAgregar = $('#frm_tipo_persona')
    formAgregar.validetta({
        realTime: true,
        display : 'inline',
        errorTemplateClass : 'validetta-inline',
        onValid : function( event ) {
          event.preventDefault();
          $.ajax({
            type: formAgregar.attr('method'),
            url: formAgregar.attr('action'),
            data: formAgregar.serialize(),
            success: function (data) {
                //console.log(data);
                  Swal.fire({
                    icon: 'success',
                    title: 'Agregado con exito',
                  })                
                  formAgregar[0].reset();
            },
            default: function () {
                alert('Error en el ajax !!!');
            }
        });
      },
      onError: function(event){
        toastr.info('Tiene campos vacios.');
      }
    },
    {
      notEqual  : 'Las contraseñas no coincide.'
    });

  
  

});
