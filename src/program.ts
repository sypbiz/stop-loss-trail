import * as BinanceApiNode from "binance-api-node";

export default class Program {
    private readonly _publicClient: BinanceApiNode.Binance;

    constructor() {
        this._publicClient = BinanceApiNode.default();
    }

    public main(callback: (error?: any) => void) {
        this.mainAsync()
            .then(() => callback && callback())
            .catch(reason => callback && callback(reason));
    }

    private async mainAsync() {
        console.log(await this._publicClient.time());
    }
}

// const pubClient = BinanceApiNode.default();

// Authenticated client, can make signed calls
// const client2 = Binance({
//   apiKey: 'xxx',
//   apiSecret: 'xxx',
// })

// pubClient.time().then(time => console.log(time));

