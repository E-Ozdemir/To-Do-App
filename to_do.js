

// console.log(document.querySelector(".add-button"));

// document.querySelector(".add-button").addEventListener("click",()=>{
    
//     const inputContent = document.querySelector(".task-adder-input").innerHTML;
//     console.log("inputContent:",inputContent);
//     const node = document.createElement("li");
//     console.log(node.appendChild(inputContent));
//     node.appendChild(inputContent);
//     document.querySelector(".tasks").appendChild(node);
// });

function addFunction(){
    const inputContent = document.querySelector(".task-adder-input").value;
    if(inputContent===''){
        alert('You can not add an empty input! ')
    }
    else{

        console.log("inputContent:",inputContent);
        const node = document.createElement("li");
        node.innerText= inputContent;
        // console.log('node:',node);
        document.querySelector(".tasks").appendChild(node);
        document.querySelector(".task-adder-input").value ='';
    }
}

