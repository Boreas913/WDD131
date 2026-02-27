           
const characterCard = {
    sections: [
    { category: "Level", value: 5},
    { category: "Health", value: 100}
    ],
    levelUp: function(){
        this.sections.find(s => s.category ==="Level").value++;
    },
    attacked: function(){
        this.sections.find(s => s.category ==="Health").value-=20;
        if (this.sections.find(s => s.category ==="Health").value== 0){
            alert("Character Died")
        }
    },
  };

function sectionTemplate(section) {
    return `<tr>
      <td>${section.category}</td>
      <td>${section.value}</td>
            </tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(characterCard.sections);

document.querySelector("#attacked").addEventListener("click", function () {
    characterCard.attacked();
    renderSections(characterCard.sections);
});
document.querySelector("#levelUp").addEventListener("click", function () {
    characterCard.levelUp();
    renderSections(characterCard.sections);
});