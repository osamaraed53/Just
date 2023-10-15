// important value

function createCard(idOfElement ,data=undefined){
  const location = document.getElementById(idOfElement);
  let cardElement = document.createElement("div");
  cardElement.classList.add( 
    "cardsIncate"         

  );

  cardElement.innerHTML = `
  <a href="">    
  <div>
      <img src="${data["image"]}"
      <div>
      <h6> ${data["book-name"]} <h6>
    <a>
    `;


            
  location.appendChild(cardElement);

}





const fromBooks = "books/";
let arrOfObjectForBooks = {};

// get data from json file 
async function getDataFromJsonById(id=''){
    const response = await fetch(`http://localhost:3000/books/${id}`);
    const data = await response.json();
    return data;

}


async function limitloopForData(opreation,limit){
  for(let i = 1 ;i<=limit;i++){
    const data = await opreation(i);
     await createCard("cate",data);
  }
}




// convert data to arr of obj

function Book (id=undefined,image=undefined,bookName=undefined,rating=undefined,autherName="undefined",descriptions=undefined){
  this.id = id;
  this.image = image;
  this.bookName = bookName;
  this.rating = rating ;
  this.autherName = autherName;
  this.descriptions = descriptions;
  this.displayData = function(){
      console.log(` image: ${this.image} bookName: ${this.bookName} rating: ${this.rating} autherName: ${this.autherName} descriptions: ${this.descriptions} `);
  }
}



//  async function convertDataForObject(){
//   let data,book
//   for(let i = 1 ;i< 25;i++){
//      data = await getDataFromJsonById(i);
    
//      book = new Book(  
//       i,
//       data["image"],
//       data['book-name'],
//       data['Rating'],
//       data['auther-name'],
//       data['Descriptions']
//     );
//     arrOfObjectForBooks[i] = book;
//     // book.displayData()
//     }
//     return arrOfObjectForBooks;
//   }




async function main(){
  await limitloopForData(getDataFromJsonById,22);
  console.log(await convertDataForObject()[1]);
}






// function getCategoriesFormMenu(){

// }




document.addEventListener('click', function(event) {
  // Do something when the user clicks on the screen

const checkedCheckboxes = document.querySelectorAll('#default-checkbox');
for(let i =0 ; i<checkedCheckboxes.length;i++){
  if(checkedCheckboxes[i].checked == true){
    console.log(checkedCheckboxes[i].value)
  }
}

});







// main()


