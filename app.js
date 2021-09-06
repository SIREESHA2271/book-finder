    var searchinput = document.querySelector('#search');
    var form = document.querySelector('#myform');
    form.addEventListener('submit', searchbook);

    function searchbook(e) {
    if(searchinput.value === ''){
        alert("Please enter the book name!");
    }
    else{
        
        getbooks();
        function getbooks() {
            document.getElementById('result').innerHTML = ""
        fetch('https://www.googleapis.com/books/v1/volumes?q='+searchinput.value)
        .then(a => a.json() )
        .then(response =>{
            console.log(response);
            for(var i = 0; i<response.items.length; i++){
                document.getElementById('result').innerHTML+='<h4 class="white-text">'+response.items[i].volumeInfo.title+'</h4>'+
                '<h5 class="white-text">By: '+response.items[i].volumeInfo.authors+'</h5><br><img class = "card z-depth-10" id="dynamic" src =' + response.items[i].volumeInfo.imageLinks.thumbnail + '><br><a href =' + response.items[i].volumeInfo.infoLink + '><button class="btn blue" id="imagebutton">Read More</button></a>';
            }
        });
        
    }
    }
     e.preventDefault();

    }




