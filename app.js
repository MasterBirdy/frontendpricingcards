
const changeValues = () => {
    if (document.querySelector("input").checked) {
        document.querySelectorAll(".annual").forEach((item) => {
            item.classList.add("hidden");
        });
        document.querySelectorAll(".monthly").forEach((item) => {
            item.classList.remove("hidden");
        });
    } else {
        document.querySelectorAll(".annual").forEach((item) => {
            item.classList.remove("hidden");
        });
        document.querySelectorAll(".monthly").forEach((item) => {
            item.classList.add("hidden");
        });
    }
}

document.querySelector("input").addEventListener("change", changeValues);