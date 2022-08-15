const fs = require('fs');
const os = require('os');
const _dir = `${__dirname}/${process.argv[2]}`;

try {
    console.log();
    console.table({
        OS: os.platform(),
        Host: os.hostname(),
        Dir: _dir,
        Time: new Date().toISOString(),
    });
    console.log();
    fs.readdirSync(_dir).forEach(_file => {
        const _script = `${_dir}/${_file}`;
        console.log(_script);
        require(_script);
        console.log();
    });
} catch (e) {
    console.log(e.message);
}