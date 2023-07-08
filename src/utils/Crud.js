const Api = `http://localhost:4001/`;


async function getData(urlpath) {
  let data = await fetch(Api+`${urlpath}`);
  let response = await data.json();
  return await response;
}

async function addData(urlpath,data){
  fetch(Api+`${urlpath}`, {
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
  fetch(Api+`${urlpath}/ `+ id, {
    method: "put",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.status
    }})
    .catch((e) => {
      return console.log(e.msg);
    });

}
 
async function deleteData(urlpath,id){
  fetch(Api+`${urlpath}/` + id, {
    method: "delete",
  })
    .then((res) => {
      return console.log(res)
    })
    .catch((e) => {
     return console.log(e.msg);
    });
}

export { getData ,addData, updateData , deleteData};

