"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const program_1 = __importDefault(require("./program"));
var program = new program_1.default();
console.log("Starting...");
program.main(error => {
    if (error) {
        console.error(error);
        process.exit(500);
    }
    else {
        console.log("Done");
        process.exit(0);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBZ0M7QUFFaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7QUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUUzQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQ2pCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDUixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9ncmFtIGZyb20gXCIuL3Byb2dyYW1cIjtcclxuXHJcbnZhciBwcm9ncmFtID0gbmV3IFByb2dyYW0oKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiU3RhcnRpbmcuLi5cIik7XHJcblxyXG5wcm9ncmFtLm1haW4oZXJyb3IgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcHJvY2Vzcy5leGl0KDUwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZVwiKTtcclxuICAgICAgICBwcm9jZXNzLmV4aXQoMCk7XHJcbiAgICB9XHJcbn0pOyJdfQ==