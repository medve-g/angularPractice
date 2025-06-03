const user = localStorage.getItem("user");
let link = "";

if (user) {
    let userData = JSON.parse(user);
    link = `https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`
}

export let linkForPosts = link; 