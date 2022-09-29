$('#boton').click(() => {
    $.get('http://localhost:5000/amigos', function (data){
        console.log(data)

        data.forEach(obj => $(`<div id = ${obj.id}>
                               <b> <li type='disc'> ${obj.name} X </li> </b>
                               </div>`).appendTo($`#lista`))
    })
})

$('#search').click(() => {
    let input = $('#input')
    console.log(input[0].value)

    $.get(`http://localhost:5000/amigos/${input[0].value}`, function(data){

        $(`<b>${data.name} </b>`).appendTo($`#amigo`)
    })

    input[0].value = ''
})

//revisar bien el metodo delete de aqui abajo
$('#delete').click(() => {
    let input = $('#inputDelete')
    $.ajax({
        url: `http://localhost:5000/amigos/${$(input).val()}`,
        type: `DELETE`,
        success: () => {
            $(`#success`).text(`Tu amigo borrado fue borrado con exito`)
        }
    })
})


// $('#delete').click(() => {
//     let input = $('#inputDelete')
//     $.delete(`http://localhost:5000/amigos/${$(input).val()}`, function(){

//             $(`#success`).text(`Tu amigo borrado fue borrado con exito`)
//         })
//     })
