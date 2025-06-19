function camelize(str) {
    let firstCharUpperStr = str
    .split('-')
    .map((str) => {
        return str.at(0).toUpperCase() + str.slice(1).toLowerCase();
    })
    .join('');
    return console.log(firstCharUpperStr.at(0).toLowerCase() + firstCharUpperStr.slice(1));
    
}
camelize("HELLLO-WORLD-FROM-THE-FICTIONAL-WORLD")
camelize("java-script-or-type-script")