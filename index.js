var nbrButtons = document.querySelectorAll(".buttons").length;
for (let i = 0; i < nbrButtons; i++) {
    document.querySelectorAll(".buttons")[i].addEventListener("click", function() {
        var btn = this.innerHTML;
        whichBtn(btn);        
    });

    function whichBtn (btn) {
        switch (btn) {
            case "dicee":
                window.open("https://ggirolo.github.io/dicee", "_blank");
                break;
            case "drumkit":
                window.open("https://ggirolo.github.io/drumkit", "_blank");
                break;
            case "deacon":
                window.open("https://ggirolo.github.io/cg-deacon", "_blank");
                break; 
            case "capstone":
                window.open("https://ggirolo.github.io/capstone", "_blank");
                break;
            case "resume":
                window.open("https://ggirolo.github.io/resume", "_blank");
                break;
            case "credit":      
                window.open("https://ggirolo.github.io/creditcard", "_blank");
                break;
            case "motivation":
                window.open("https://ggirolo.github.io/owlmouse", "_blank");
                break;
            case "web":
                window.open("https://ggirolo.github.io/webdesign", "_blank");
                break;
            case "simon":
                window.open("https://ggirolo.github.io/simon", "_blank");
                break;
            case "moving":
                window.open("https://ggirolo.github.io/moving", "_blank");
                break;
            case "dog":
                window.open("https://ggirolo.github.io/tindog", "_blank");
                break;
            case "calculator":
                window.open("https://ggirolo.github.io/calculator", "_blank");
                break;    
            default:
                console.log(btn);        
        }
    
    }
}