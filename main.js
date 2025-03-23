const btn = document.querySelector("button");
const container = document.querySelector(".container");

const display = document.createElement("p");
container.appendChild(display);

btn.addEventListener("click", () => clearInterval(id));

const statement = "I like to think. I like to consider.";

const truth = "Consider the language you build with. For instance, this sentence is assigned to a variable named truth.";

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere eos adipisci sapiente sint quo praesentium maxime, labore deserunt magni soluta modi provident inventore repellendus consequatur, magnam quas quod. Sit!"

let index = 0;

const id = setInterval(() => {
    if (index < lorem.length) {
        display.textContent += lorem[index];
        index++;
    }
}, 200);