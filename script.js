const towers = document.querySelectorAll(".tower");
const storage = document.querySelector("#storage");

// for (tower of towers) {
//     tower.addEventListener("click", selectedTower);
//     tower.addEventListener("click", selectedDisk);
//     tower.addEventListener("click", pickUP);
//     tower.addEventListener("click", putDown);
// };


// const selectTower = function (event) {
//     this.value = tower.name;
//     chosenTower = this;
//     console.log(chosenTower.value)
//     console.log(this.value)
//     this.childElementCount = chosenTower.childElementCount;
//     console.log(childElementCount);
//     console.log(chosenTower.lastElementChild);
//     console.log(this);
// };


//click Handler Functions to test

const selectTower = function () {

    console.log(this);

    return this;

};

const selectDisk = function () {
    let disk = this.lastElementChild;
    console.log(this.lastElementChild);
    console.log(disk = (disk === null || undefined) ? "no disk to select" : disk);
    return disk = (disk === null || undefined) ? "no disk to select" : disk;
};

const findCount = function () {
    let count = this.childElementCount;
    console.log("count is " + this.childElementCount);

    console.log(count = (count === null || undefined) ? 0 : count);

    return count = (count === null || undefined) ? 0 : count;
};

const findWidth = function () {
    let width = (this.lastElementChild === null || undefined) ? 0 : Number(this.lastElementChild.dataset.width);
    // console.log((width === null) ? 0 : Number(this.lastElementChild.dataset.width));
    // console.log(this.lastElementChild.dataset.width);
    // console.log("width: "+ Number(this.lastElementChild.dataset.width));
    console.log(width);
    return (this.lastElementChild === null || undefined) ? 0 : Number(this.lastElementChild.dataset.width);
};

const currentTopDisks = function () {
    this.topDisk = this.towerElement.lastElementChild;
    return this.topDisk = this.towerElement.lastElementChild;
};

const pickUP = function () {


    if (storage.hasChildNodes()) {
        return;
    }

    else {
        storage.appendChild(this.lastElementChild);
    };




};

function putDown() {



    if (!storage.hasChildNodes()) {

        console.log("please select a disk")
        // this.removeEventListener("click" , pickUP);
    }

    for (let i = 0; i < towers.length; i++) {

        towers[i].addEventListener("click", diskToTower);
    }

};

function diskToTower(event) {


    console.log(event.currentTarget);
    console.log(typeof event.currentTarget);
    console.log(event.currentTarget === this);


    for (let i = 0; i < towers.length; i++) {
        if (this === towers[i]) {


            if (this.lastElementChild === null || (this.childElementCount > 0 && Number(this.lastElementChild.dataset.width) > Number(storage.lastElementChild.dataset.width))) {

                this.appendChild(storage.lastElementChild);

                if (towers[2].childElementCount === 4) {

                    storage.textContent = "You win!";
                };


            };

        };

    };

    for (let i = 0; i < towers.length; i++) {

        towers[i].removeEventListener("click", diskToTower);
    };


};





const Tower = class Tower {
    constructor(towers, num) {
        this.towerName = towers[num].id;
        this.towerChildren = towers[num].children;
        this.towerElement = towers[num];
        this.inPickupMode = false;
        this.diskWidth;
        this.topDisk = towers[num].lastElementChild;


        ///Click Handlers
        this.eligibleDiskToSelect = towers[num].addEventListener("click", selectDisk);
        this.childrenCount = towers[num].addEventListener("click", findCount);
        this.selectedTower = towers[num].addEventListener("click", selectTower);
        this.width = towers[num].addEventListener("click", findWidth);
        this.canMoveDisk = towers[num].addEventListener("click", pickUP);
        this.putDownDisk = towers[num].addEventListener("click", putDown);
    };

    //Methods

    findWidth() {
        if (this.diskWidth === undefined || null) { this.diskWidth = 0; }

        this.diskWidth = Number(this.topDisk.dataset.width);

    };

    currentTopDisks() {

        this.topDisk = this.towerElement.lastElementChild;
        return this.topDisk = this.towerElement.lastElementChild;
    };



};








const tower1 = new Tower(towers, 0);
const tower2 = new Tower(towers, 1);
const tower3 = new Tower(towers, 2);




