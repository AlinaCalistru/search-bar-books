const usernameInputEl = document.getElementById("searchInput");
let allBooksName = document.getElementsByClassName("name");

usernameInputEl.addEventListener("keyup", function () {
  let searchQuery = event.target.value.toLowerCase();
  for (let counter = 0; counter < allBooksName.length; counter++) {
    let currentTitle = allBooksName[counter].textContent.toLowerCase();
    console.log(currentTitle);

    if (currentTitle.includes(searchQuery)) {
      allBooksName[counter].style.display = "block";
    } else {
      allBooksName[counter].style.display = "none";
    }
  }
});
