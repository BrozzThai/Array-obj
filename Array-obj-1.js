const menu =[
    {
        Name :"Home"
    },
    {
        Name :"About"
    },
    {
        Name :"Category"
    },
    {
        Name :"Blog"
    },
    {
        Name :"Contact"
    }
];
var text ='';
for(let i in menu){
    text +=`
    <li><a href="#">${menu[i]['Name']}</a></li>
    `;
    console.log(text);
    document.getElementById('display').innerHTML = text;
}
const body =
{
    img:"image/w2.webp"
};
var bod = '';
bod = `
<img src="${body['img']}">
`;
console.log(bod)
document.getElementsByClassName('bo')[0].innerHTML = bod;
const content = [
    {
        thumnail : "image/w3.webp",
        title : "man's watch ",
        desc :"Zinvo Cambodia"
    },
    {
        thumnail : "image/w1.webp",
        title : "man's watch ",
        desc :"Zinvo vitnam"
    },
    {
        thumnail : "image/w2.webp",
        title : "man's watch  ",
        desc :"Zinvo Thailan"
    }
];
var text = '';
for(let i in content){
    text += `
    <div class="col-4">
                <div class="card" style="width: 100%">
                    <img src="${content[i]['thumnail']}" class= "card-img-top">
                    <div class="card-body">
                      <h5 class="card-title"  style="color: red";>${content[i]['title']}</h5>
                      <p class="card-text">${content[i]['desc']}</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                  `;
                  console.log(text)
                  document.getElementsByClassName('row')[0].innerHTML = text;
}