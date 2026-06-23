// ------------- Web Certificate & Courses -------------------------
import { courses, certificates } from "../data/courses.mjs";

createCourseButton(courses);

//  --------------------  Certificate Button Selected ------------------------
const certificateButton = document.querySelector('.cert-card');
certificateButton.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button) return;
    certificateButton.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('button-selected');
    });
    button.classList.add('button-selected');
});

/*  --------------------  Certificate filters ------------------------ */
const allCourses = document.querySelector('#all');
allCourses.addEventListener('click', () => {
    createCourseButton(courses);
})
const wcpCourses = document.querySelector('#wcp');
wcpCourses.addEventListener('click', () => {
    createCourseButton(courses.filter(course => course.certificate == 'Web and Computer Programming'));
})
const wdCourses = document.querySelector('#wd');
wdCourses.addEventListener('click', () => {
    createCourseButton(courses.filter(course => course.certificate == 'Web Development'));
})
const sdCourses = document.querySelector('#sd');
sdCourses.addEventListener('click', () => {
    createCourseButton(courses.filter(course => course.certificate == 'Software Development'));
})



/* ------------- CREATE A BUTTON FOR EACH COURSE DISPLAYED ----------------- */
function createCourseButton(filteredCourses) {
    document.querySelector('#courses').innerHTML = '';
    let completed = 0;
    let total = 0;
    let remaining = 0;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('button');
        total += 1;
        if (course.completed) {
            courseCard.innerHTML = `<strong>&#10004; ${course.subject} ${course.number}</strong><br>${course.title}`;
            completed += 1;
        } else {
            courseCard.innerHTML = `<strong>${course.subject} ${course.number}</strong><br>${course.title}`;
            remaining += 1;
        }
        //  --------------------  add modal ------------------------
        courseCard.addEventListener('click', () => { displayCourseDetails(course); })
        //  --------------------  add button ------------------------
        document.querySelector('#courses').appendChild(courseCard);
    });
    //  --------------------  add end Summary ------------------------
    const endCert = document.querySelector('#courseSummary');
    endCert.innerHTML = `${completed} completed<br>${remaining} remaining`;
    // endCert.innerHTML = `${completed} completed out of ${total}<br>${remaining} remaining`;


}

/* ---------- MODAL ---------- */
const courseDetails = document.querySelector('#modal');
const closeModalButton = document.querySelector('#closeModal');

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${course.subject} ${course.number} - ${course.title}</h2>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p><strong>Description</strong>: ${course.description}</p>
    <p><strong>Learning Outcome</strong>:<br>- ${course.learningOutcome.join('<br>- ')}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>  
    `;
    // <p><strong>Credits</strong>: ${course.credits}</p>
    courseDetails.showModal();
    closeModal.addEventListener('click', () => { courseDetails.close() });
}
