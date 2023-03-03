//Why is this code not allowing a pop up for other media and only working for images ?
var isShowingCategoryInfo = false;
function showCategory(category,mediaType,mediaSrc) {
    // stop the rotation
    const imgSrc = mediaSrc;
    const popupBox = document.createElement('div')
    
    if (imgSrc.endsWith(".png") || imgSrc.endsWith(".jpg")){
    popupBox.classList.add('popup-box');
    const popupImage = document.createElement('img');
    popupBox.setAttribute('id', 'popup-box'); // add an ID to the popupBox element
    popupImage.src = imgSrc;
    popupImage.style.height = "800px";
    popupBox.style.width = "100%"
    popupBox.appendChild(popupImage);
    document.body.appendChild(popupBox);
    }else if (mediaType === "video"){
        popupBox.classList.add('popup-box');
        const popupImage = document.createElement('video');
        popupBox.setAttribute('id', 'popup-box'); // add an ID to the popupBox element
        popupImage.src = imgSrc;
        popupImage.style.height = "800px";
        popupBox.style.width = "100%"
        popupImage.controls = true; // show the controls on the video
        popupImage.autoplay = true;
        popupImage.loop = true;
        popupBox.appendChild(popupImage);
        document.body.appendChild(popupBox);

    }else if (mediaType === "embed"){
        popupBox.classList.add('popup-box');
        const popupImage = document.createElement('embed');
        popupBox.setAttribute('id', 'popup-box'); // add an ID to the popupBox element
        popupImage.src = imgSrc;
        popupImage.style.height = "800px";
        popupBox.style.width = "100%";
        popupImage.style.width = "1200px"
        popupBox.appendChild(popupImage);
        document.body.appendChild(popupBox);
    }
          
    // show the category info
    var categoryInfo = document.getElementById("category-info");
    categoryInfo.style.display = "block";
    isShowingCategoryInfo = true;
    
    // update the category title and description
    var categoryTitle = document.getElementById("category-title");
    var categoryDescription = document.getElementById("category-description");
    var categoryTeam = document.getElementById("category-team");
    var categoryEngine = document.getElementById("category-engine");
    var categoryTenure = document.getElementById("category-tenure");
    var categoryGenre = document.getElementById("category-genre");
    var categoryPlatform = document.getElementById("category-platform");
  
    switch (category) {
      case "FirstFive":
        categoryTitle.textContent = "First Five";
        categoryTeam.textContent = "Solo Developer";
        categoryEngine.textContent = "Pixi.js";
        categoryTenure.textContent = "June 2017 - Nov 2017";
        categoryGenre.textContent = "Dating Sim";
        categoryPlatform.textContent = "Web Browser"
        categoryDescription.textContent = "Introducing First Five, a passion project that showcases the fundamentals of a dating sim game. Developed from scratch, this game allows players to dive into various levels, while interacting with the main heroine, Karen. As the developer, I designed and developed every aspect of this game to showcase the immersive experience that players engage in while playing a dating sim game.";
        break;
        case "ComingSoon":
        categoryTitle.textContent = "ComingSoon";
        categoryTeam.textContent = "ComingSoon";
        categoryEngine.textContent = "ComingSoon";
        categoryTenure.textContent = "ComingSoon";
        categoryGenre.textContent = "ComingSoon";
        categoryPlatform.textContent = "ComingSoon"
        categoryDescription.textContent = "ComingSoon.";
            break;
            case "ProjectHunter":
                categoryTitle.textContent = "Project Hunter";
                categoryTeam.textContent = "Solo Developer";
                categoryEngine.textContent = "Unreal Engine";
                categoryTenure.textContent = "Jan 2022 - Present";
                categoryGenre.textContent = "ARPG";
                categoryPlatform.textContent = "PC/Console"
                categoryDescription.textContent = "Project Hunter is an exciting in-development game that I have been working on, which combines seamless ARPG features with innovative game mechanics. To learn more.";
                // create a link element
                 var link = document.createElement("a");
                link.textContent = "Click here";
                link.href = "ProjectHunter.html";
     
                // append the link element to the categoryDescription element
                categoryDescription.appendChild(link);
 
                break;
            case "Website":
                categoryTitle.textContent = "Portfolio";
                categoryTeam.textContent = "Solo Developer";
                categoryEngine.textContent = "Visual Studio Code";
                categoryTenure.textContent = "Feb 2023- March 2023";
                categoryGenre.textContent = "Website";
                categoryPlatform.textContent = "Web Browser"
                categoryDescription.textContent = "Built a responsive website using HTML, CSS, and JavaScript that allows users to easily browse  online. Implemented a user-friendly interface that features intuitive navigation.Included a interactive 3D rotation to showcase multiply projects that I've work on.";
                break;

;
    }
     categoryInfo.style.display = "block !important";
  }

  function hideCategoryInfo() {
    const popupBox = document.getElementById('popup-box');
    var categoryInfo = document.getElementById("category-info");
    categoryInfo.style.display = "none";
    document.body.removeChild(popupBox);
    isShowingCategoryInfo = false;
}
  