class Minesweeper{
    constructor(opts ={}){
        let loadedData ={};

        if (hasLocalStorage && localStorage["minesweeper.data"]){
            loadedData = JSON.parse(localStorage["minesweeper.data"]);
            this.loadGame = true;
        }
    }}

        Object.assign(
            this,
            {
                grid: [],
                minesFound: 0,
                falseMines: 0,
                game_status: "Playing...",
                playing: true,
                movesMade: 0,
                options:{
                    rows:10,
                    cols:10,
                    mines:8
                }
            },
            {options: opts},
            loadedData
        );

        let rows = this.options["rows"];
            if (isNaN(rows)) {
                this.options["rows"] = 10;
            } else if (rows < 3){
                this.options["rows"] = 3;
            } else if (rows > 20){
                this.options["rows"] = 20;
            }
        
            let cols = this.options["cols"];
                if (isNaN(cols)) {
                    this.options["cols"] = 10;
                } else if (cols < 3){
                    this.options["cols"] = 3;
                } else if (cols > 20){
                    this.options["cols"] = 20;
                }  
        
            if (isNaN(this.options["mines"])) {
                this.options["mines"] = 8;
            } if (this.options["mines"] < 0) {
                this.options["mines"] = 1;
            } else if (this.options["mines"] >
                this.options["rows"] * this.options["cols"]

            ){
                this.options["mines"] = this.options["rows"] * this.options["cols"];

}
if(this.loadGame){
    this.load();

} else { 
    this,

this.save();
}