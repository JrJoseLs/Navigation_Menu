// add active class in selected tab

// const list = document.querySelectorAll('list');
// function activeLink(){
//     list.forEach((item) =>
//     this.classlist.remove('active'));
//     this.classlist.add('active')
// }
// list.forEach((item) => 
// item.addEventListener('click'))



const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => {
        item.classList.remove('active');
    });
        this.classList.add('active');
    }

list.forEach((item) => {
    item.addEventListener('click', activeLink);
});
