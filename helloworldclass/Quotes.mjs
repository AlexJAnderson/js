export class Quotes {

    constructor() {
        this.quotes = [
            {"text": "put a proper quote here"},
            {"text": "sometimes you should"},
            {"text": "quote 3"},
        ];
        this.index = 0;
    }

    getNextQuote()
    {
        var returning = this.quotes[this.index].text;
        this.index++;
        if(this.index >= this.quotes.length)
            this.index = 0;
        return returning;
    }

    addQuote(quoteToAdd)
    {
        this.quotes.push({"text": quoteToAdd});
    }
}