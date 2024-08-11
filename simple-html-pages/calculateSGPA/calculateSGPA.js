var instance = 4;
function newCourse() {
    instance++;
    var div = document.getElementById('myDiv');
    var br = document.createElement('br');
    var course = document.createElement('input');
    var cr = document.createElement('select');
    var gr = document.createElement('select');

    course.type = 'text';
    course.id = 'course' + instance;
    course.className = 'input-field';
    course.placeholder = 'Course No. ' + instance;

    cr.name = 'cr' + instance;
    cr.id = 'cr' + instance;
    cr.className = 'input-field';
    for (let x = 1; x < 4; x++) {
        var op = document.createElement('option');
        op.value = x;
        op.label = x;
        cr.appendChild(op);
    }

    gr.name = 'gr' + instance;
    gr.id = 'gr' + instance;
    gr.className = 'input-field';
    var letter = 'A';
    for (let x = 1; x < 12; x++) {
        if (x == 1 || x == 4 || x == 7 || x == 10) {
            var op = document.createElement('option');
            op.value = letter + '+';
            op.label = letter + '+';
            gr.appendChild(op);
        }
        else if (x == 2 || x == 5 || x == 8 || x == 11) {
            var op = document.createElement('option');
            op.value = letter;
            op.label = letter;
            gr.appendChild(op);
        }
        else {
            var op = document.createElement('option');
            op.value = letter + '-';
            op.label = letter + '-';
            gr.appendChild(op);
            letter = String.fromCharCode(letter.charCodeAt(0) + 1);
        }
    }
    var op = document.createElement('option');
    op.value = 'F';
    op.label = 'F';
    gr.appendChild(op);

    div.appendChild(br);
    div.appendChild(course);
    div.appendChild(cr);
    div.appendChild(gr);
}

function getGradeWeight(grade) {
    if (grade == 'A+') {
        return 4.0;
    }
    else if (grade == 'A') {
        return 4.0;
    }
    else if (grade == 'A-') {
        return 3.67;
    }
    else if (grade == 'B+') {
        return 3.33;
    }
    else if (grade == 'B') {
        return 3.0;
    }
    else if (grade == 'B-') {
        return 2.67;
    }
    else if (grade == 'C+') {
        return 2.33;
    }
    else if (grade == 'C') {
        return 2.0;
    }
    else if (grade == 'C-') {
        return 1.67;
    }
    else if (grade == 'D+') {
        return 1.33;
    }
    else if (grade == 'D') {
        return 1.0;
    }
    else {
        return 0.0;
    }
}

function calculateSGPA() {
    let CRHs = [];
    for (let i = 0; i < instance; i++) {
        CRHs[i] = parseInt(document.getElementById('cr' + (i + 1)).value);
    }

    let grades = [];
    for (let i = 0; i < instance; i++) {
        grades[i] = getGradeWeight(document.getElementById('gr' + (i + 1)).value);
    }

    let sgpa = 0;
    let crh = 0;
    for (let i = 0; i < instance; i++) {
        crh += CRHs[i];
    }
    for (let i = 0; i < instance; i++) {
        sgpa += grades[i] * CRHs[i];
    }
    sgpa /= crh;
    if (crh < 19) {
        document.getElementById('output').value = sgpa.toFixed(2);
    }
    else {
        alert("Total Credit Hours must not exceed 18!!!");
    }
}