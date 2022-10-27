import { exec } from 'node:child_process';
import { setMaxIdleHTTPParsers } from 'node:http';

let args = process.argv.slice(2);
console.log(`input: ${args[0]}`);
exec(`node uploadFile.js ${args[0]}`, (err, output) => {
    if (err) {
        console.error(`comamnd not found ${output}`);
        return;
    }
    else {
        exec(`node upload.js ${output}`, (err, out) => {
            console.log("upload out: ", out);
            if (err) {
                console.error(`comamnd not found ${output}`);
                return;
            }
            else {
                exec(`node download.js ${out}`, (err, result) => {
                    console.log("download out: ", output);
                    if (err) {
                        console.error(`comamnd not found ${result}`);
                        return;
                    }
                    else if (!result.localeCompare("processing\n"))
                    {
                        console.log("processing..");
                        //setTimeout(fexec, 4000);
                    }
                    else
                        console.log(result);
                });
            }
        });
        
    }
});
