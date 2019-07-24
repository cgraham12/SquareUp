
function generateString(box){
  rand = Math.floor((Math.random() * 25));
  random_words = ["humorous","star","touch","minister","river","brown","horse","parcel","murmur","choose",
                  "notice","swot","care","shop","quick","smell","possessive","faulty","disagreeable",
                  "station","bit","cup","pan","type","obnoxious","abounding", "crave", "jeans", "work",
                  "ceaseless", "correspond", "seat","superficial", "steadfast", "paint"]

  return word = random_words[rand];
}

function checkForBox(nodeBoxes, player_color, word){
  for ( let r = 1; r < nodeBoxes.length; r+=2){
    let letter = nodeBoxes[r].innerHTML;
    if (word == letter && nodeBoxes[r].style.backgroundColor!= player_color)
    {
      changeBoxColor(player_color, nodeBoxes[r]);
      return;
    }
  }
}

function changeBoxColor(color, box){
  box.style.backgroundColor = color;
  box.innerHtml = '';
}








const grid = document.querySelector('#all_boxes')
let node_boxes = grid.childNodes;

for (let r = 1; r < node_boxes.length; r+=2){
  let this_box = node_boxes[r];
  this_box.innerHTML = generateString(node_boxes);
}

let temp_string = "";

window.addEventListener("keydown", event =>{
  if (event.key === "Enter"){
    checkForBox(node_boxes, "blue", temp_string.toLowerCase());
    temp_string = "";
  }
  else{
    temp_string += event.key;
    console.log(temp_string)
  }
})
