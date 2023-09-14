//initalize variables
let NUM_IMAGES;
let curImg;

//adds recent history to the history dropdown
chrome.history.search({text: '', maxResults: 9}, function(data) {
    let i = 1;
    data.forEach(function(page) {
        document.getElementById(String(i)).innerHTML = page.title;
        document.getElementById(String(i)).setAttribute("href", page.url);
        i++;
    });
});


//inform the user on the usage of the extension
document.getElementById("usage").addEventListener("click", function() {
    alert("Use high quality photos that are wider than they are tall for best experience\nClicking on the extention icon will give the user access to a few small javascript browser game to play alone or with friends\nTo get started simply choose your first background photo and open a new tab\nClick the remove button to remove the current background from your roster");
});


//remove images at the curImg index
document.getElementById("remove").addEventListener("click", function() {
    chrome.storage.local.set( { [curImg] : "removed" }, function() {
        alert("This Background has been removed")
    })
});
    

//initalize, get number of images, and call function to get dataURL with random index
chrome.storage.local.get(["numFiles"], (result) => {
    NUM_IMAGES = result["numFiles"];
    if(NUM_IMAGES == undefined){
        chrome.storage.local.set( { "numFiles" : 1 }, function() {
            console.log("initalized");
            NUM_IMAGES = 1;
        })
    }

    //render image as soon as NUM_IMAGES becomes defined
    if(NUM_IMAGES == 1){
        render_background("img/preset.jpg")
    } else {
        getDataURL(String(Math.floor(Math.random() * (NUM_IMAGES-1)) + 1));
    }
    
});

//set up and render data and time
refreshTime();
document.getElementById("date").textContent = new Date().toDateString();
function refreshTime() {
    document.getElementById("time").textContent = new Date().toLocaleTimeString();
}
setInterval(refreshTime, 1000);


//render background
function render_background(dataURL){
    document.body.style.backgroundImage= "url(" + dataURL + ")";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
}

//get dataURL from storage at specfied index
function getDataURL(index){
    chrome.storage.local.get([index], (result) => {
        if(result[index] == "removed"){
            getDataURL(String(Math.floor(Math.random() * (NUM_IMAGES-1)) + 1));
        }
        else {
            render_background(result[index]);
            curImg = index;
        }
        
    });
}


//submit new photos
document.querySelector("#file").addEventListener("change", function() {
    const reader = new FileReader();
    
    //store new dataURL after it has been read
    reader.addEventListener("load", () => {
        key = String(NUM_IMAGES);
        chrome.storage.local.set( { [key] : reader.result }, function() {
            alert("This background has been added to background roster");
            NUM_IMAGES++;
            chrome.storage.local.set( { "numFiles" : (NUM_IMAGES) } );
        });
    })

    reader.readAsDataURL(this.files[0]);

})

// check storage: chrome.storage.local.get(function(result){console.log(result)})



    







