/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let match = [];



    for(let i = 0; i < str.length; i++){

        let bracketMatch = match[match.length - 1];

        if(str[i] == '(' || str[i] == '[' || str[i] == '{'){
            match.push(str[i]);
        }
        
       else if((bracketMatch == '(' && str[i] == ')') || (bracketMatch == '[' && str[i] == ']' )|| (bracketMatch == '{' && str[i] == '}')){
            match.pop();
        }else{
            return 'invalid';
        } 
    }
    



    if(match.length == 0){
        return 'valid';
    } else {
        return 'invalid';
    }
    
    
}
console.log(isValid('[(])'));
console.log(isValid('{[()[]]()}()'));

module.exports = isValid;
