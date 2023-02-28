// clicked=document.querySelector('div a')
// clicked.addEventListener('click',()=>{
//     i=clicked.innerText;
//     console.log(i);
// })

fetch('data.json').then(function(response){
    return response.json();
}).then(function(obj){
    console.log(obj);
}).catch(function(error){
    console.log("error")
});

function clicking(event){
    cnt=document.querySelector('body div');
    // cnt.removeChild();

    fetch('data.json').then(function(response){
        return response.json();
    }).then(function(obj){
        console.log(obj[event.innerText-1].name);
        // id=createElement('div').innerText=obj[event.innerText-1].id;
        // name=createElement('div').innerText=obj[event.innerText-1].name;
        // email=createElement('div').innerText=obj[event.innerText-1].email;
        
        // console.log(id, name, email);
        
        cnt.append(obj[event.innerText-1].id);
        cnt.append(obj[event.innerText-1].name);
        cnt.append(obj[event.innerText-1].email);
        // cnt.append(id,name,email);
    }).catch(function(error){
        console.log("error")
    });
    console.log(event.innerText);
}

next=document.querySelector('[for="next"]');
next.addEventListener('click',()=>{
    arr=[1,2,3,4,5]
    for(let i of arr){
    element=document.querySelector(`[for="${i}"]`)
    element.innerText=Number(element.innerText)+5;
    console.log(element);
}
})

previous=document.querySelector('[for="previous"]');
previous.addEventListener('click',()=>{
    arr=[1,2,3,4,5]
    for(let i of arr){
    element=document.querySelector(`[for="${i}"]`)
    element.innerText=Number(element.innerText)-5;
    console.log(element);
}
})




// console.log(data.json);