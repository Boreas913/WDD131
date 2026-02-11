const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
const button = document.querySelector('button');
const list = document.getElementById('list-of-people-and-points');

button.addEventListener('click', function(){
    console.log('button clicked')
    const nameInput = document.getElementById('name').value;
    const gradeInput = document.getElementById('grade').value.toUpperCase();
    const points = convert(gradeInput);
    const nameParts = nameInput.split(', ');

    const student = {
    last: nameParts[0],
    first: nameParts[1],
    points: points
    };
    students.push(student);
    displayStudents();
    console.log(student)
});

function displayStudents(){
    list.innerHTML = '';
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.first} ${student.last}: ${student.points} points`;
        list.appendChild(li);

        console.log(list);
    })
}

function convert(grade) {
    let points;
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

          