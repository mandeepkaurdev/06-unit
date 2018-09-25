const dataSubmitted = function (event) {

    event.preventDefault();

    const data = $('input').val().trim();

    $.ajax({ url: "/add", method: "POST", data: { TodoItem: data } }).then(data => {

        const variable = data.map((element, home) => `<input type="checkbox" class="checkbox"></input>

        <li>${element}</li>

        <i class="fas fa-times" id='${home}'></i><br>`)

        $('#todolistapp').html(variable);

        $('.fa-times').on('click', dataDeleted );
    });

}



const dataDeleted = function (event) {

    event.preventDefault();

    const home = event.target.id;

    $.ajax({ url: "/delete", method: "DELETE", data: { home: home } }).then(listItem => {

        const variable = listItem.map((e, home) => `<input type="checkbox" class="checkbox"></input>

        <li>${e}</li>

        <i class="fas fa-times" id='${home}'></i><br>`);

        $('#todolistapp').html(variable);

        $('.fa-times').on('click', dataDeleted);

    });

}



$('form').on('submit', dataSubmitted);