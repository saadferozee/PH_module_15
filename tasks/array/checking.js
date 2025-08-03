let books = ["Bishadh Shindhu", "Nouka Dubi", "Pother Pachali", "Ma"]

let check = books.includes("Javascript")

if (check) {
    console.log("There is an book about Javascript")
} else {
    console.log("There's no book about Javascript, only Fiction book there.")
}