const randomImage = document.getElementById("picture");

const btn = document.getElementById("random-button");

// const run1=()=>{
//   .fetch("https://random.imagecdn.app/500/150").then((response)=> response.blob()).then((blob)=>{
//     const imageURL= URL.createObjectURL(blob);
//     randomImage.innerHTML=`<img src="${imageURL}"`
//   })
//   .catch((error)=>
//   console.error(""))
// };


const run = () => {
  fetch("https://picsum.photos/500/300")
    .then((response) => response.blob())
    .then((blob) => {
      const imageURL = URL.createObjectURL(blob);
      randomImage.innerHTML = `<img src="${imageURL}" alt="Random Pic" title="RANDOM" height="300px" width="300px">`;
    })
    .catch((error) => {
      console.error("Error fetching image:", error);
    });
};

btn.onclick = () => {
  run();
};

// const run = () => {
//   fetch("https://random.imagecdn.app/500/150")
//     .then((response) => response.json())
//     .then((json) => {
//       randomImage.innerHTML= `<img src='${json.message}'/>`;
//     });
// };

