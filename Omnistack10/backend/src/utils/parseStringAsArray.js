module.exports = function psrseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim())
}