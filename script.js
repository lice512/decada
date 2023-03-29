let date_n = prompt('Введите дату')

if(date_n <= 10, date_n > 0) {
    alert('Сейчас первая декада')
} else if(date_n <= 20, date_n > 10) {
    alert('Сейчас вторая декада')
} else if(date_n <=31, date_n > 20) {
    alert('Сейчас третья декада')
} else {
    alert('Врёшь')
}