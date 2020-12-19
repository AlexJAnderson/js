export class Quotes {

    constructor() {
        this.quotes = [
            {"text": "put a proper quote here"},
            {"text": "sometimes you should"},
            {"text": "quote 3"},
            {"text": "hello there"},
        ];
        this.index = 0;
        this.initialLength = this.quotes.length;
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

    removeQuotes()
    {
        this.quotes = this.quotes.splice(0, this.initialLength);
        if(this.index > this.initialLength - 1)
            this.index = 0;

    }
}