const funcs = {
    scrollToBottom: () => {
        // scroll all messages div to bottom when invoked 
        const element = document.getElementById("all-messages");
        element.scrollTop = element.scrollHeight;
    }

}


export default funcs