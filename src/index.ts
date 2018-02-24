import Program from "./program";

var program = new Program();

console.log("Starting...");

program.main(error => {
    if (error) {
        console.error(error);
        process.exit(500);
    } else {
        console.log("Done");
        process.exit(0);
    }
});