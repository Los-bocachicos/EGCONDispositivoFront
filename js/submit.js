const deviceForm = document.querySelector('#device-form')


deviceForm.addEventListener('submit', e => {
    e.preventDefault()
    let name = document.querySelector('#nameInput').value
    let code = document.querySelector('#codeInput').value
    let type = document.querySelector('#typeInput').value
    let reference = document.querySelector('#referenceInput').value
    let location = document.querySelector('#locationInput').value
    let paramsListValue = document.querySelectorAll('#field-value')
    let paramsListKey = document.querySelectorAll('#field-name')
    let params = {}
    paramsListKey.forEach((element, index) => {
      params[element.value] = paramsListValue[index].value
    });

    const requestBody =  {
        name,
        code,
        type,
        reference,
        location,
        params
    }

    axios.post('https://marteoma.pythonanywhere.com/device', requestBody)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    //
    // axios.get('https://marteoma.pythonanywhere.com/device')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })


})



