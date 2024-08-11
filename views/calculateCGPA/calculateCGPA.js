var instance = 2;
function newSemester(element) {
    if (instance < 8) {
        instance++;
        var mainDiv = document.getElementById('mainDiv');
        var br = document.createElement('br');

        var semester = document.createElement('input');
        semester.type = 'text';
        semester.name = 'semester' + instance;
        semester.id = 'semester' + instance;
        semester.className = '';
        semester.placeholder = 'Semester ' + instance;
        semester.required = true;

        var cr = document.createElement('input');
        cr.type = 'number';
        cr.id = 'cr' + instance;
        cr.name = 'cr' + instance;
        cr.className = '';
        cr.max = '18';
        cr.min = '1';
        cr.step = '1';
        cr.value = '';
        cr.required = true;

        var div = document.createElement('div');
        div.id = 'myDiv' + instance;
        div.className = '';
        div.appendChild(semester);
        div.appendChild(cr);

        mainDiv.appendChild(br);
        mainDiv.appendChild(div);
    }
    else {
        alert("There cannot be more than 8 Semesters!!!");
    }
}

function checkCGPAs(arr) {
    for (let i = 0; i < instance; i++) {
        if (arr[i] < 0 || arr[i] > 4) {
            return true;
        }
    }
    return false;
}

function checkCRHs(arr) {
    for (let i = 0; i < instance; i++) {
        if (arr[i] < 0 || arr[i] > 18) {
            return true;
        }
    }
    return false;
}

function calculateCGPA() {
    let CGPAs = [];
    for (let i = 0; i < instance; i++) {
        CGPAs[i] = parseFloat(document.getElementById('semester' + (i + 1)).value);
    }

    let CRHs = [];
    for (let i = 0; i < instance; i++) {
        CRHs[i] = parseInt(document.getElementById('cr' + (i + 1)).value);
    }

    if (checkCGPAs(CGPAs)) {
        alert("CGPA should be between 0 and 4 !!!");
    }
    else if (checkCRHs(CRHs)) {
        alert("Credit Hours should be between 1 and 18 !!!");
    }
    else {
        let cgpa = 0;
        let crh = 0;
        for (let i = 0; i < instance; i++) {
            crh += CRHs[i];
        }
        for (let i = 0; i < instance; i++) {
            cgpa += CGPAs[i] * CRHs[i];
        }
        cgpa /= crh;
        if (cgpa) {
            document.getElementById('output').value = cgpa;
        }
        else {
            alert("Please fill out all fields!!!")
        }
    }
}
