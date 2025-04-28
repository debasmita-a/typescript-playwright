export default function csvToJson(csv: string){

    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',');
    var result = [];

    for(let i:number = 1; i<lines.length; i++){
        let obj = {};
        let currentLine = lines[i].split(',');
    }
}