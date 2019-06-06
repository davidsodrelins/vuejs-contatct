var app = new Vue({
    el: "#app",
    data: {
        title: "Contacts VueJS",
        message_error: "Contact not found.",
        message_success: "Found success!",
        contact: {
            id: Math.ceil(Math.random()*100),
            name: "",
            phone: "",
            email: "",
            gender: "",
            see_on: [],
            photo: "https://lh6.googleusercontent.com/-AsnFU5-SUhE/AAAAAAAAAAI/AAAAAAAAArM/4a6JDmfqvYs/photo.jpg",
            alt: "Contact Photo"          
        }
        
    }
});