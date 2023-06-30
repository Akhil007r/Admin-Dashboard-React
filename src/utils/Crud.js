const Api = `http://localhost:4001/`;


async function getData(urlpath) {
  let data = await fetch(`http://localhost:4001/${urlpath}`);
  let response = await data.json();
  return await response;
}

async function addData(urlpath,data){
  fetch(`http://localhost:4001/${urlpath}`, {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 201) {
       return console.log(res.status)
      }
    })
    .catch((e) => {
      return console.log(e.msg);
    });
}

async function updateData(urlpath,data,id){
  fetch(`http://localhost:4001/${urlpath}/ `+ id, {
    method: "put",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 200) {
        this.setState({ title: "", price: "", stock: "", brand: "", category: "", editData: false, Adddata: false,
        });
        this.getData();
      }
      this.getData();
    })
    .catch((e) => {
      console.log(e.msg);
    });

}
 
async function deleteData(urlpath,id){
  fetch(`http://localhost:4001/${urlpath}/` + id, {
    method: "delete",
  })
    .then((res) => {
      return console.log(res)
    })
    .catch((e) => {
     return console.log(e.msg);
    });
}

export { getData ,addData, Api , updateData , deleteData};

