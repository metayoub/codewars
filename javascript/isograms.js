// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// For  Exemple :

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str){
    str = str.toLowerCase().split('');
    ret = true;
    str.forEach(element => {
       if (str.lastIndexOf(element) !=  str.indexOf(element)) ret = false;
    });
    return ret;
}
