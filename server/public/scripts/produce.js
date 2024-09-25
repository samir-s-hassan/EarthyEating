const renderProduce = async () => {
    const response = await fetch("/produce");
    const data = await response.json();
  
    const mainContent = document.getElementById("main-content");
  
    if (data) {
      data.map((produce) => {
        const card = document.createElement("div");
        card.classList.add("card");
  
        const topContainer = document.createElement("div");
        topContainer.classList.add("top-container");
  
        const bottomContainer = document.createElement("div");
        bottomContainer.classList.add("bottom-container");
  
        topContainer.style.backgroundImage = `url(${produce.image})`;
  
        const name = document.createElement("h3");
        name.textContent = produce.name;
        bottomContainer.appendChild(name);
  
        const price = document.createElement("p");
        price.textContent = "Price: " + produce.price;
        bottomContainer.appendChild(price);
  
        const category = document.createElement("p");
        category.textContent = "Category: " + produce.category;
        bottomContainer.appendChild(category);
  
        const link = document.createElement("a");
        link.textContent = "Read More >";
        link.setAttribute("role", "button");
        link.href = `/produce/${produce.id}`;
        bottomContainer.appendChild(link);
  
        card.appendChild(topContainer);
        card.appendChild(bottomContainer);
  
        mainContent.appendChild(card);
      });
    } else {
      const message = document.createElement("h2");
      message.textContent = "No Produce Available 😞";
      mainContent.appendChild(message);
    }
};
  
const renderProduceDetail = async () => {
    const requestedID = parseInt(window.location.href.split("/").pop());
    const response = await fetch("/produce");
    const data = await response.json();
    const produceContent = document.getElementById("produce-content");
    let produce = data.find((produce) => produce.id === requestedID);
  
    if (produce) {
      document.getElementById("image").src = produce.image;
      document.getElementById("name").textContent = produce.name;
      document.getElementById("category").textContent = "Category: " + produce.category;
      document.getElementById("calories").textContent = "Calories per 100g: " + produce.caloriesPer100g;
      document.getElementById("seasonality").textContent = "Seasonality: " + produce.seasonality;
      document.getElementById("tasteProfile").textContent = "Taste: " + produce.tasteProfile;
      document.getElementById("nutritionalValue").textContent = "Nutritional Value: " + produce.nutritionalValue;
      document.getElementById("price").textContent = "Price: " + produce.price;
      document.title = `Information about - ${produce.name}`;
    } else {
      const message = document.createElement("h2");
      message.textContent = "No Produce Available 😞";
      produceContent.appendChild(message);
    }
};
  
renderProduce();
renderProduceDetail();
