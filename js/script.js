const { createApp } = Vue;

createApp ({
    data (){
        return {
            newItem: {
                text: "",
                done: true,
            },
            todoList: [
                {
                    text: "Recruiting blog post",
                    done: true,
                },
                {
                    text: "Mobile app luaunch",
                    done: true,
                },
                {
                    text: "Interview Jhon H.",
                    done: false,
                },
                {
                    text: "Summit update to mobile storefronts",
                    done: true,
                }
            ]
        }
    },
    methods: {
        addItem: function (){
            console.log(this.newItem);
            if (this.newItem.text !== ""){
                const copyTodo = {...this.newItem}
                this.todoList.push(copyTodo);
                this.newItem.text = "";
            }
        },
        
        doneItem: function(index){
            console.log("ciao");
            //se il todo di index è true 
            //diventa false
            //altrimenti è true
            if (this.todoList[index].done === true){
                this.todoList[index].done = false;
            } else {
                this.todoList[index].done = true;
            }
        },

        cancel: function(index){
            //splice elimina dall'elemento passato 
            this.todoList.splice(index,1)
        }
    }
}).mount ("#app")