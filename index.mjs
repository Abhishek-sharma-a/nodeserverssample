
import { createServer } from "http";
const PORT=4100;
const hostname= "localhost";
const server = createServer((req,res)=>{
   

if (req.url==="/about") {
    res.end("<h1>About page</h1>");
}
else if (req.url==="/contact") {
    res.end("<h1>Contact page</h1>");
}
else{res.end("<h1>Hello World</h1>");}

})


server.listen(4100,"localhost",()=>{
  
    console.log(`Server is running on http://${hostname}:${PORT}`)
})



