var app = new Vue({
    el: "#app",
    data: {
        title: "Contacts VueJS",
        message_error: "Contact not found.",
        message_success: "Found!",
        contact: {
            id: 1,
            name: "David Sodre Lins",
            phone: "+5571992035786",
            email: "davidsodre@outlook.com.br"
        }
        
    }
});