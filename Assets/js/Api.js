const imageView = document.getElementById("imgView")
const titleView = document.getElementById("titleView")
const descriptionView = document.getElementById("descriptionView")
const data = document.getElementById('data');

const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

// searchBtn.addEventListener('click', ()=>{
//     console.log("what is you name")
// })

searchBtn.addEventListener('click',loadDataNew);

async function sendRequest(){
    let api_key = "bxbWdtmV4adc36NiJepPjZ2pErUguI3zf7Sb3MgZ";
    let queryStr = search.value.trim();
    let request = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${queryStr}`);
    let data =  await request.json();
    let d = data.collection.items;
    return d;
}

function loadDataNew() {
    sendRequest().then(
        function(posts) {
        //iterate over each post [100 posts]
        let output = " ";
        posts.forEach(x => {
            output += ` 
            <div class="row mt-4 pb-3" >
                <div class="col-lg-3 col-md-12 ">
                    <div class="card" style="width: 18rem;">
                        <img src="${x.links[0].href}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${x.data[0].title}</h5>
                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample${x.data[0].nasa_id}" role="button" aria-expanded="false" >
                        Description
                        </a>
                        <div class="collapse" id="collapseExample${x.data[0].nasa_id}">
                        ${x.data[0].description}
                        </div>
                        </div>
                    </div>
                </div>

                <div class="col-1"></div>
                <div class="col-lg-3 col-md-6 col-sm-12 ">
                    <div class="card" style="width: 18rem;">
                        <img src="${x.links[0].href}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${x.data[0].title}</h5>
                        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample${x.data[0].nasa_id}" role="button" aria-expanded="false" >
                        Description
                        </a>
                        <div class="collapse" id="collapseExample${x.data[0].nasa_id}">
                        ${x.data[0].description}
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                
                
                
                `

            });

            data.innerHTML = output;
      })
        .catch(function(err) {
            console.log(err);
        });
    }
            
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