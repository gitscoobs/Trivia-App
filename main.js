//Call will load when window is opened
window.onload = sendApiRequest

//function to fetch data from the api
async function sendApiRequest(){
    let response = await fetch(`https://opentdb.com/api.php?amount=5`);
    console.log(response)
    let questions = await response.json()
    console.log(questions)
  }
  
  
  //function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
  function useApiData(questions){
  
  }