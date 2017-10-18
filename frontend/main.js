require("./style.less");
require.context("./../blocks",true,/\.js$/);
import './favicons/favicons';

function grabAllFiles(startPath,filter){
    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }
    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            grabAllFiles(filename,filter);
        }
        else if (filename.indexOf(filter)>=0) {
            console.log(filename);
            require("./../blocks/" + filename);
        };
    };
};

grabAllFiles("./../blocks", '.less');