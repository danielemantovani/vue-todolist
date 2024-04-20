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

    created (){
        jsonTodoList =localStorage.getItem ("item")
        if (localStorage !== null){
            this.todoList = JSON.parse(jsonTodoList);
        } else {
            this.todoList = [];
        }
    },

    methods: {
        addItem: function (){
            console.log(this.newItem);
            if (this.newItem.text !== ""){
                const copyTodo = {...this.newItem}
                this.todoList.push(copyTodo);
                this.newItem.text = "";
                //stringify trasforma un array (di oggetti) in una stringa
                const jsonTodoList = JSON.stringify(this.todoList);
                console.log(jsonTodoList);
                // con localStorage salviamo la stringa creata con stringify nella memoria locale. Con setItem prendo l'etichetta item (nome random) che al nuovo avvio andrò a richiamare non più con con la costante jsonTodoList ma con item 
                localStorage.setItem("item", jsonTodoList);
            }
        },
        
        doneItem: function(index){
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
            this.todoList.splice(index,1);
            localStorage.setItem("item", jsonTodoList);
        }
    }
}).mount ("#app")

//GetItem prende i valori dentro item e lo salva nella memoria locale