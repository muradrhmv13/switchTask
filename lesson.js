// let min = 1
// let max = 20

// randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(randomNumber);

// kokalti = Math.sqrt(randomNumber);
// console.log(kokalti);

// fullValue = Math.floor(kokalti);
// console.log(fullValue);

// totalValue = Math.ceil(fullValue);
// console.log(kokalti - fullValue);

/*
let value = Date.now();

let toDay = new Date()
let tomorrow = new Date('09/15/2023')

let difference = tomorrow - toDay
let diffWithSecond = difference / 1000

// Umumi Saniye
let diffWithTotalSecond = Math.floor(difference / 1000)

// Milli Saniye
let diffWithMilliSecond = diffWithSecond - diffWithTotalSecond

// Deqiqe
let diffWithTotalMin = Math.floor(diffWithTotalSecond / 60)

let differenceWithSecond = (diffWithTotalSecond / 60 - diffWithTotalMin) * 60

// Saat
let diffWithTotalHours = Math.floor(diffWithTotalMin / 60)

// Gun
let differenceWithDays = Math.floor(diffWithTotalHours / 24)


console.log('Gun: '+ differenceWithDays);
console.log( 'Gun:'+ differenceWithDays + " Saat:"+diffWithTotalHours 
  + ' Deqiqe:' + diffWithTotalMin + ' Saniye:'+ diffWithTotalSecond 
  + ' MilliSaniye:' + diffWithMilliSecond);
*/


let honey = prompt('Imtahan Balinizin Umumi Neticesini Qeyd Edin!')
switch (honey) {
    case '100':
    case '99':
    case '98':
    case '97':
    case '96':
    case '95':
    case '94':
    case '93':
    case '92':
    case '91':
        console.log('Siz imtahani A seviiyesinde Bitirmisiniz.. imtahan Baliniz: ' + honey)
        break;
    case '90':
    case '89':
    case '88':
    case '87':
    case '86':
    case '85':
    case '84':
    case '83':
    case '82':
    case '81':
        console.log('Siz imtahani B seviiyesinde Bitirmisiniz.. imtahan Baliniz: ' + honey)
        break;
    case '80':
    case '79':
    case '78':
    case '77':
    case '76':
    case '75':
    case '74':
    case '73':
    case '72':
    case '71':
        console.log('Siz imtahani C seviiyesinde Bitirmisiniz.. imtahan Baliniz: ' + honey)
        break;
    case '70':
    case '69':
    case '68':
    case '67':
    case '66':
    case '65':
    case '64':
    case '63':
    case '62':
    case '61':
        console.log('Siz imtahani D seviiyesinde Bitirmisiniz.. imtahan Baliniz: ' + honey)
        break;
    case '60':
    case '59':
    case '58':
    case '57':
    case '56':
    case '55':
    case '54':
    case '53':
    case '52':
    case '51':
        console.log('Siz imtahani E seviiyesinde Bitirmisiniz.. imtahan Baliniz: ' + honey)
        break;
    case '':
        console.log('Imtahan Balinizi girin!')
        break;
    default:
        console.log('Universitet\'də oxuyanlarla oxumuyanlar arasında tək fərq aradaki \"Universitet"\ sözüdür...')
}

if (honey === '') {
    console.log('Imtahan Balinizi Reqemle Daxil Edin.')
    prompt('Imtahan Balinizi girin!')
} if (honey == null) {
    prompt('Imtahan Balinizi girin!')
}