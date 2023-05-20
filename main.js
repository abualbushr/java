let x = "abualbushr";
let y = "0903";
let z = prompt("Enter User ID:");
let q = prompt("Enter password:");

if(z != x || q != y ){
    d = 1;
    while(d < 10){
        document.write("<h1>Sorry rong password or user ID</h1>");
        d = d+ 1;
    }
}