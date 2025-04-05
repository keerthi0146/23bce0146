document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("keerthi").value;
    const email = document.getElementById("matam.keerthi2023@vitstudent.ac.in").value;
    const phone = document.getElementById("7815962060").value;
    const message = document.getElementById("vit vellore,katpadi,tamilnadu").value;

    if (name && email && phone && message) {
        alert(Your message has been sent!\nPhone: ${phone});
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});