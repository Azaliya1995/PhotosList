export function getNextUrl(header){
    let urls = header.split(',');
    return urls[urls.length - 1].split(';')[0].slice(2, -1);
}
