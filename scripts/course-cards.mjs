// ------------- Web Certificate & Courses -------------------------
import { courses, certificates } from "../data/courses.mjs";
// console.log(courses)
// console.log(certificates)

createCourseButton(courses);




/* ------------- CREATE THE BUTTON FOR EACH DISPLAYED COURSE ----------------- */
/* ------------- CREATE A BUTTON FOR EACH COURSE DISPLAYED ----------------- */
function createCourseButton(filteredCourses) {
    // console.log(filteredCourses)

    document.querySelector('#courses').innerHTML = '';

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('button');

        if (course.completed) {
            courseCard.innerHTML = `<strong>&#10004; ${course.subject} ${course.number}</strong><br>${course.title}`;
        } else {
            courseCard.innerHTML = `<strong>${course.subject} ${course.number}</strong><br>${course.title}`;
        }


        document.querySelector('#courses').appendChild(courseCard);
    });
}
