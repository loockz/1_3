const search = document.querySelector(".search");
const repList = document.querySelector(".rep-list");
const repsSelected = document.querySelector(".reps-selected");
const f = debounce(getSearched, 500);

class SelectedRepository {
  constructor(id, name, owner, stars) {
    this.id = id;
    this.name = name;
    this.owner = owner;
    this.stars = stars;
  }
}

function debounce(cb, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, args);
    }, delay);
  };
}

async function getSearched(input) {
  if (input.value && input.value.replace(/\s/g, "").length) {
    fetch(`https://api.github.com/search/repositories?q=${input.value}`).then(
      (res) => {
        if (res.ok) {
          repList.innerHTML = "";
          res.json().then((res) => {
            for (let i in res.items) {
              if (i < 5) {
                const rep = document.createElement("li");
                rep.classList.add("list-item");
                rep.dataset.id = res.items[i].id;
                rep.dataset.name = res.items[i].name;
                rep.dataset.owner = res.items[i].owner.login;
                rep.dataset.stars = res.items[i].stargazers_count;
                rep.textContent = res.items[i].name;
                repList.append(rep);
              }
            }
          });
        } else {
          repList.innerHTML = "";
        }
      }
    );
  } else {
    repList.innerHTML = "";
  }
}

function addRep(target) {
  const clickedRep = new SelectedRepository(
    target.dataset.id,
    target.dataset.name,
    target.dataset.owner,
    target.dataset.stars
  );

  if (target.dataset.id) {
    const rep = document.createElement("div");
    rep.classList.add("reps-selected--selected-rep");
    rep.dataset.repId = clickedRep.id;
    const repParams = document.createElement("ul");
    repParams.classList.add("reps-selected--rep-params");
    const repName = document.createElement("li");
    repName.classList.add("reps-selected--rep-name");
    repName.textContent = `Name: ${clickedRep.name}`;
    const repOwner = document.createElement("li");
    repOwner.classList.add("reps-selected--rep-owner");
    repOwner.textContent = `Owner: ${clickedRep.owner}`;
    const repStars = document.createElement("li");
    repStars.classList.add("reps-selected--rep-stars");
    repStars.textContent = `Stars: ${clickedRep.stars}`;
    const repDelete = document.createElement("button");
    repDelete.classList.add("reps-selected--rep-delete");
    repDelete.dataset.buttId = clickedRep.id;
    repParams.append(repName, repOwner, repStars);
    rep.append(repParams, repDelete);
    repsSelected.append(rep);
  }
  search.value = "";
  repList.innerHTML = "";
}

function deleteRep(target) {
  if (target.tagName === "BUTTON") {
    const buttId = target.dataset.buttId;
    const rep = document.querySelector(`[data-rep-id="${buttId}"]`);
    rep.remove();
  }
}

search.addEventListener("keyup", () => {
  f(search);
});

repList.addEventListener("click", (e) => {
  addRep(e.target);
});

repsSelected.addEventListener("click", (e) => {
  deleteRep(e.target);
});
