// ------------- Web Certificate & Courses -------------------------
import { courses, certificates } from "../data/courses.mjs";

createCourseButton(courses);

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
    console.log(total)
    console.log(completed)
    const endCard = document.createElement('button');
    endCard.innerHTML = `${completed} completed out of ${total}, ${remaining} remaining`;
    document.querySelector('#courses').appendChild(endCard);


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
