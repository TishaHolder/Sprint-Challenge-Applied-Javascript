// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles") 
    .then(response => {   
        
       
        response.data.articles.javascript.forEach ( (article) => {
            const newCard = cardCreator(article);
            cardContainer.appendChild(newCard);
        
        });
        
        response.data.articles.bootstrap.forEach ( (article) => {
            const newCard = cardCreator(article);
            cardContainer.appendChild(newCard);
        
        });
        
        response.data.articles.technology.forEach ( (article) => {
            const newCard = cardCreator(article);
            cardContainer.appendChild(newCard);
        
        });
        
        response.data.articles.jquery.forEach ( (article) => {
            const newCard = cardCreator(article);
            cardContainer.appendChild(newCard);
        
        });
        
        response.data.articles.node.forEach ( (article) => {
            const newCard = cardCreator(article);
            cardContainer.appendChild(newCard);
        
        });
    })
    .catch (err => {
        console.log(err);
    })  


    function cardCreator(articlesObject) {

        const divCard = document.createElement("div"); 
        divCard.classList.add("card");
    
            const divHeadline = document.createElement("div");
            divHeadline.classList.add("headline");
            divHeadline.textContent = articlesObject.headline;
    
            const divAuthor = document.createElement("div");
            divAuthor.classList.add("author");
    
                const divImage = document.createElement("div");
                divImage.classList.add("img-container");
                    const authorImage = document.createElement("img");
                    authorImage.src = articlesObject.authorPhoto;
    
                const spanAuthorName = document.createElement("span");
                spanAuthorName.textContent = `By ${articlesObject.authorName}`;
    
        //add elements to the parent containers
        divCard.appendChild(divHeadline);
        divCard.appendChild(divAuthor); 
    
        divAuthor.appendChild(divImage);
        divImage.appendChild(authorImage);
        
        divAuthor.appendChild(spanAuthorName);
    
        return divCard;
    
    }//end cardCreator


