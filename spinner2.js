console.clear();
let char = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let timeOut = 100;
for(let i = 0; i < 10; i++){
    setTimeout(() => {
        process.stdout.write(char[i]);
    }, timeOut);
    timeout += 200;
}