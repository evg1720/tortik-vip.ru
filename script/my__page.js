
const droparea = document.querySelector('.mypage__photo__left');
const mypagePhotoI = document.querySelector("#mypage__photoi")

let fileRead = new FileReader()

fileRead.onload = () => {
    document.querySelector(".mypage__photo__link img").src = fileRead.result
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    fileRead.readAsDataURL(files[0])
}

const prevents = (e) => e.preventDefault();

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evtName => {
    droparea.addEventListener(evtName, prevents);
});

droparea.addEventListener("drop", handleDrop);
mypagePhotoI.addEventListener("input", () => {
    fileRead.readAsDataURL(mypagePhotoI.files[0]);
})

