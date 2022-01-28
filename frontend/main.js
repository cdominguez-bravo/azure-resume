
window.addEventListener('DOMContentLoaded', (event) => {
    console.log("Called JS method");
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounter100.azurewebsites.net/api/GetResumeCounter?code=QdxIJ2NKMbPlav3ekOZxGiX96dWJlF17dBZN9z8zia35DhGgiGdGcQ==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
let count = 30;
fetch(functionApiUrl).then(response => {
    return response.json();
}).then(response => {
    console.log("Website called function API.");
    count = response.count;
    document.getElementById("counter").innerText = count;
}).catch(function(error){
    console.log(error);
});
return count;
}