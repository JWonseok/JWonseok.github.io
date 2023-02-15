const menuUl = document.querySelector("#menuList");
console.log(menuUl);

const menuList = [
    {href:"#",  item:"item", name:"레데온 정보"},
];

function menuListAdd(v){
    const li = document.createElement("li");
    const a = document.createElement("a");
    const div = document.createElement("div");
    menuUl.appendChild(li);
    
    a.href = v.href;
    a.className = v.item;

    div.innerText = v.name;

    li.appendChild(a);
    a.appendChild(div);
}

menuList.map(menuListAdd);