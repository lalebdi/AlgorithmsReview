let user = {
    name: "Crystal",
    age: 30,
    email: "CrystalHotSauce@gmail.com",
    location: "Alabama",
    blogsOG : ["Why hot sauce is epic", "10 things to make with hot sauce"],
    blogs : [
        {title: "Why hot sauce is epic", likes: 80},
        {title: "10 things to make with hot sauce", likes: 70},
    ],
    login: function(){
        console.log("The user logged in")
        this.status = true
        console.log("Status ", this.status)
    },
    logout: function(){
        console.log("the user logged out")
        this.status = false
        console.log("Status ", this.status)
    },
    logBlogs: function(){
        console.log("the user has these blogs =>")
        this.blogsOG.forEach(blog =>{
            console.log(blog)
        })
    },
    logBlogs2(){
        console.log("the user has these blogs =>")
        this.blogsOG.forEach(blog =>{
            console.log(blog)
        })
    },
    logBlogs3: function(){
        console.log("The Objects insdie the array =>");
        this.blogs.forEach(blog =>{
            console.log(blog)
            console.log(blog.likes, blog.title)
        })
    }
};

console.log(user.name)
console.log(user["age"])

user.age = 35

console.log(user.age)

user["status"] = false;

console.log(user.status)

user.login()
console.log(user)

user.logout()

user.logBlogs()

console.log("the other way method")
user.logBlogs2()

console.log("the objetcs inside the array")
user.logBlogs3()