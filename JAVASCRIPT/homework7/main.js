async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
let url = "https://api.github.com/orgs/HackYourFuture/repos?per_page=1";
getData(url)
  .then(data => {
    let output = `
           <div id="repos">HYF Repositories</div>`;
    data.forEach(function (element) {
      data.sort(function (a, b) {
        return compareStrings(a.name, b.name);
      })
      if (element.description == null) {
        element.description = "No Description";
      }
      output += `
          <div id="reposdata" onclick="myFunction()">
          <a href="#" onclick="myFunction()">
          <h3>Repository: ${element.name}</h3>
          <h3>Description: ${element.description}</h3>
          <h3>Forks: ${element.forks_count}</h3>
          <h3>Updated: ${element.updated_at}</h3>
          </a>
        </div>
          `;
    });
    document.getElementById("output").innerHTML = output;



    

  });

function compareStrings(a, b) {
  a = a.toUpperCase();
  b = b.toUpperCase();
  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function myFunction() {
  getData(url)
    .then(data => {
      data.forEach(function (element1) {
        getData(element1.contributors_url)
        .then(data=>{
          data.forEach(function (element2){
            console.log(element2.login);
          })
        })

      })
    })
};
    
