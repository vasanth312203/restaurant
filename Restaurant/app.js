
  // script.js
$(document).ready(function() {
    // JavaScript for dynamically adding breakfast cards
    var breakfastItems = [
        {
            title: "Hamburger",
            image: "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_640.jpg",
            description: "A delicious hamburger for breakfast."
        },
        {
            title: "Omelette",
            image: "https://cdn.pixabay.com/photo/2016/11/22/18/52/breakfast-1851850_640.jpg",
            description: "A classic omelette with assorted vegetables."
        },
        // Add more items as needed
    ];

    var cardsHtml = "";
    breakfastItems.forEach(function(item) {
        cardsHtml += `
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    <img src="${item.image}" class="card-img-top" alt="${item.title}" />
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <a href="#" class="btn btn-primary">Order Now</a>
                    </div>
                </div>
            </div>
        `;
    });

    $('#breakfast-cards').html(cardsHtml);
});

  
  
  