
const processCSV = async(file) => {
    const files = new Promise((resolve) =>{
        
        let object = new Object();
        let data = file.split(/\n/g).slice(0, -1).map(item => item.split(',')).filter(space => space.length === 4)
        data.shift();

        data.map((p) => {
            if (Object.keys(object).length > 0) {
                object.lines.push({
                    text: p[1],
                    number: p[2],
                    hex: p[3]
                })
            }else {
                object = {
                    file: p[0],
                    lines : [{
                        text: p[1],
                        number: p[2],
                        hex: p[3]
                    }]
                }
            }
        });
        
        resolve(object);
    }); 
    
    return files;
}


module.exports = {
    processCSV
};