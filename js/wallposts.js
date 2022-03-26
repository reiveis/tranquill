let authors = [
    "anonymous5548",
    "anonymous3333",
]

let date = [
    "2022/03/23",
    "2022/03/25",
]

let posts = [
    "Find out about our HealthBuddies program today!",
    "What's on your mind today? Share us your thoughts"
]

window.onload = () => { 
    for(let i=0; i<authors.length; i++){

        let pdiv = document.createElement("div");
        pdiv.className = "postdiv";
        pdiv.id = "postdiv" + i; 

        document.getElementById("posts").appendChild(pdiv)

        let ptitle = document.createElement("h2");
        ptitle.className = "postauth";
        ptitle.innerText = authors[i] + " wrote a Quill!";

        let pdate = document.createElement("h3");
        pdate.className = "postdate";
        pdate.innerText = date[i]

        let pcontent = document.createElement("p");
        pcontent.className = "postcontent";
        pcontent.innerText = posts[i]
        
        document.getElementById("postdiv" + i).appendChild(ptitle);
        document.getElementById("postdiv" + i).appendChild(pdate);
        document.getElementById("postdiv" + i).appendChild(pcontent);

    }
}

let createPost = () => {
        let newid = Math.floor(Math.random()*90000) + 10000;
        let newdiv = document.createElement("div");
        newdiv.className = "postdiv";
        newdiv.id = "postdiv" + newid; 

        document.getElementById("posts").appendChild(newdiv)

        let newtitle = document.createElement("h2");
        newtitle.className = "postauth";
        if(document.getElementById("newPostAuthor").value == ''){
            newtitle.innerText = "anonymous"+newid
        } else {
            newtitle.innerText = document.getElementById("newPostAuthor").value + " wrote a Quill!";
        }
        let newdate = document.createElement("h3");
        newdate.className = "postdate";
        newdate.innerText = new Date().toJSON().slice(0,10).replace(/-/g,'/')

        let newcontent = document.createElement("p");
        newcontent.className = "postcontent";
        newcontent.innerText = document.getElementById("newPostContent").value
        
        document.getElementById("postdiv" + newid).appendChild(newtitle);
        document.getElementById("postdiv" + newid).appendChild(newdate);
        document.getElementById("postdiv" + newid).appendChild(newcontent);

}