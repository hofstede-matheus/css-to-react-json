export function convertToJSON( string ) {
    const linesArray = string.split(/\r?\n/g);
    const parts = linesArray.map((item) => {
        let line = item.split(':');
        line[0] = dashCaseToCamelCase(line[0].trim());
        line[1] = line[1].trim().replace(";", '');
        return line;
    });
    const convertedLinesArray = parts.map((item) => {
        return `${item[0]}: "${item[1]}",`
    });
    return convertedLinesArray.join('\n');
}

function dashCaseToCamelCase( string ) {
    const dashPosition = string.indexOf('-');
    string = string.replace('-', '');
    if (dashPosition) string = setCharAt(string, dashPosition, string.charAt(dashPosition).toUpperCase());
    return string
}

function setCharAt( str, index, chr ) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
