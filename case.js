const school = 'RAJ UK Uttara Model School';
console.log(school);
console.log(school.toLocaleLowerCase());
console.log(school.toUpperCase());



/************************************************************** */
/* string is a  case sensative
 * Uppercase : ABCDEFGH
 * lowercase : abcdefgh */
const subject = 'Chemistry';
const book = 'chemistry';

if(subject.toLocaleLowerCase() === book.toLocaleLowerCase())

    {
    console.log('I am reading book ai ber porikkhai fatai felmu');
}
else{
    console.log('hudai hudai prista ultai ar vat khawar jonno bosa thaki');
}
/*********************************************** */

const drink = 'water';
const liquid = ' water  ';

if(drink.trim() === liquid.trim()){
    console.log('pani er opor nam life');
}
else{
    console.log('somudre pani aca khaite pari na');
}