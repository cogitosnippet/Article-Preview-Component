let element = document.getElementById('share-icon-id');

document.getElementById('share-id').style.display = "none"

element.addEventListener('click',()=>{
  if(document.getElementById('share-id').style.display === "none"){
    document.getElementById('share-id').style.display = "block"
  }else{
    document.getElementById('share-id').style.display = "none"
  }
})
