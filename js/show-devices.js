const tableBody = document.querySelector('#listDevices')


axios.get('https://marteoma.pythonanywhere.com/device')
  .then(function (response) {
    const devices = response.data
    console.log(devices)
    devices.forEach(item => {
      let params = "Sin parámetros"
      console.log(item['params'], item['params'] !== null)
      if (item['params'] !== null) {
        params = `<div class="container">
                        <ul class="list-group list-group-flush">`
        for (let key in item['params']) {
          params += `
            <li>
                <strong>${key}</strong> : ${item['params'][key]}
            </li>`
          params += `
                    </ul>
                 </div>
            `
        }
      }

    console.log(params)
      tableBody.innerHTML +=
      `<tr>
        <td>${item['name']}</td>
        <td>${item['code']}</td>
        <td>${item['type']}</td>
        <td>${item['reference']}</td>
        <td>${item['location']}</td>
        <td>${params}</td>
      </tr>`
    })
  })
  .catch(function (error) {
    console.log(error);
  })