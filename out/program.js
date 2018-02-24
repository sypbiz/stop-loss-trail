"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const BinanceApiNode = __importStar(require("binance-api-node"));
class Program {
    constructor() {
        this._publicClient = BinanceApiNode.default();
    }
    main(callback) {
        this.mainAsync()
            .then(() => callback && callback())
            .catch(reason => callback && callback(reason));
    }
    mainAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(yield this._publicClient.time());
        });
    }
}
exports.default = Program;
// const pubClient = BinanceApiNode.default();
// Authenticated client, can make signed calls
// const client2 = Binance({
//   apiKey: 'xxx',
//   apiSecret: 'xxx',
// })
// pubClient.time().then(time => console.log(time));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3JhbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9ncmFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQW1EO0FBRW5EO0lBR0k7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRU0sSUFBSSxDQUFDLFFBQStCO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxJQUFJLFFBQVEsRUFBRSxDQUFDO2FBQ2xDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRWEsU0FBUzs7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNqRCxDQUFDO0tBQUE7Q0FDSjtBQWhCRCwwQkFnQkM7QUFFRCw4Q0FBOEM7QUFFOUMsOENBQThDO0FBQzlDLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCLEtBQUs7QUFFTCxvREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBCaW5hbmNlQXBpTm9kZSBmcm9tIFwiYmluYW5jZS1hcGktbm9kZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3JhbSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9wdWJsaWNDbGllbnQ6IEJpbmFuY2VBcGlOb2RlLkJpbmFuY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fcHVibGljQ2xpZW50ID0gQmluYW5jZUFwaU5vZGUuZGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYWluKGNhbGxiYWNrOiAoZXJyb3I/OiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLm1haW5Bc3luYygpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IGNhbGxiYWNrICYmIGNhbGxiYWNrKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChyZWFzb24gPT4gY2FsbGJhY2sgJiYgY2FsbGJhY2socmVhc29uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBtYWluQXN5bmMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXdhaXQgdGhpcy5fcHVibGljQ2xpZW50LnRpbWUoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IHB1YkNsaWVudCA9IEJpbmFuY2VBcGlOb2RlLmRlZmF1bHQoKTtcclxuXHJcbi8vIEF1dGhlbnRpY2F0ZWQgY2xpZW50LCBjYW4gbWFrZSBzaWduZWQgY2FsbHNcclxuLy8gY29uc3QgY2xpZW50MiA9IEJpbmFuY2Uoe1xyXG4vLyAgIGFwaUtleTogJ3h4eCcsXHJcbi8vICAgYXBpU2VjcmV0OiAneHh4JyxcclxuLy8gfSlcclxuXHJcbi8vIHB1YkNsaWVudC50aW1lKCkudGhlbih0aW1lID0+IGNvbnNvbGUubG9nKHRpbWUpKTtcclxuXHJcbiJdfQ==