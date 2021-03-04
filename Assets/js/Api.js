const imageView = document.getElementById("imgView")
const titleView = document.getElementById("titleView")
const descriptionView = document.getElementById("descriptionView")
const data = document.getElementById('data');

const db = new Localbase('db');

const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');


const recentView = document.getElementById('recentView');




document.addEventListener("DOMContentLoaded", () => {
    displayFromDB();

    searchBtn.addEventListener('click',loadDataNew);

    
});


async function sendRequest(){
    // let api_key = "weAlGOG143bhhKcNAnzlIo64MUoJwLy9GcD17J9K";
    let queryStr = search.value.trim();

    let request = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${queryStr}`);
    let data= await  request.json();
    let d = data.collection.items;
    addToDB(queryStr)

    return d;
}


function addToDB(query){
    db.collection('recent').add({
        query: query,
      
      })
}
function displayFromDB(){
       recentView.innerHTML =""
// db.collection('users').doc({ id: 1 }).get().then(document => {
//   console.log(document)
// })

       db.collection('recent').orderBy('query').get().then(recent => {
      recent1 = ""
       recent.forEach( query =>  {
       recent1 += `<a  href="#"><h3 class="text-white"><img src="https://img.icons8.com/officel/16/000000/planet.png"/> ${query.query}</h3></a> `
    });
    ;
    recentView.innerHTML =recent1


    
      })
}

function loadDataNew() {
    sendRequest().then(
        function(posts) {
        //iterate over each post [100 posts]
        let output = " ";
    
        posts.forEach(x => {
output += `  

<div class="col-2 col-lg-3"></div>
        <div class="col-lg-8">
          <div class="row mt-4 container " >
          
            <div class="col-lg-10 col-md-12 ">
              <div class="card " >
               <a href="description.html?href=${x.links[0].href}&title=${x.data[0].title}&description=${x.data[0].description}"> <img src="${x.links[0].href}"  id="imgView" class="card-img-top p-3" alt="Result"></a>
                <div class="card-body">
                    <h5 class="card-title">${x.data[0].title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample${x.data[0].nasa_id}" role="button" aria-expanded="false" >
                        Description
                      </a>
                      <div class="collapse" id="${x.data[0].nasa_id}">
                        ${x.data[0].description}
                            </div>
                      
                                      </div>

                </div>
            </div>
            
            
            </div>
            

        </div>



        `


            
            console.log(x);

            
//             output += `
//             <div class="col-6">
//             <div class="card" style="width: 18rem;">
//                 <div class="card-body">
//                   <img src=" ${x.links[0].href}">
//                   <h2 class="card-title">${x.data[0].title}</h2>

//                   <h5 class="card-title">${x.data[0].description}</h5>

//                   <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//               </div>
//         </div>    
// `
        });

        data.innerHTML = output;
        displayFromDB();

  })
    .catch(function(err) {
        console.log(err);
    });

}


// function load_fromPlaceHolder() {
//     var apiSource = "https://api.nasa.gov/planetary/apod?api_key=weAlGOG143bhhKcNAnzlIo64MUoJwLy9GcD17J9K"

//     //open the request 
//     fetch(apiSource)
//         .then(function(res) {
//             return res.json(); //return the JSON Promise
//         })
//         .then(function(posts) {
//             //iterate over each post [100 posts]
//             let output = '';
//             posts.forEach(function(post) {
//                 titleView.innerHTML = post.title;
//                 descriptionView.innerHTML = post.explanation;
//                 imageView.scr = post.url;

//         //         output += `
        
//         //         <div class="item">
//         //         <div class="image">
//         //             <img src="${post.img}">
//         //         </div>
//         //         <div class="content">
//         //             <a class="header" href="#" id="bTitle">
//         //             ${post.title.toUpperCase()}
//         //             </a>
//         //             <div class="description">
//         //                 <p id="bDesc">
//         //                 ${post.explanation}
//         //                 </p>
//         //             </div>
//         //             <div class="extra">
//         //                 <a class="ui floated basic violet button" href="#">Read Mores</a>
//         //             </div>
//         //         </div>
//         //     </div>
//         // `;
//             });

//         })
//         .catch(function(err) {
//             console.log(err);
//         });



// }