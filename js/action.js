// 變數
const my_skills = document.querySelector("#my-skills")

const my_jobs = document.querySelector("#my-jobs")

const my_education = document.querySelector("#my-education")

// 偵聽事件
my_skills.addEventListener('click', function(event) {
    console.log(event.target)
    scrollToSkills()

})


my_jobs.addEventListener('click', function(event) {
    scrollToExperience()
})

my_education.addEventListener('click', function(event) {
    scrollToEducation()
})

document.addEventListener('scroll', timeline);

// 後台區

function scrollToSkills() {
    document.getElementById('move-to-skills').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
}

function scrollToExperience() {
    document.getElementById('move-to-experience').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
}

function scrollToEducation() {
    document.getElementById('move-to-education').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
}

function timeline() {
    // let threshold_position = window.scrollY + window.innerHeight * 2 / 3;
    let threshold_position = window.scrollY - 1.5 * window.innerHeight;

    //compare scrolltop with scrolltop on each timeline event
    let timeline_events = document.querySelectorAll('.timeline li');
    for (i = 0; i < timeline_events.length; i++) {
        console.log(i, timeline_events[i].offsetTop)
        console.log(threshold_position)
        if (timeline_events[i].offsetTop < threshold_position) {
            timeline_events[i].classList.add('visible');
        } else {

            timeline_events[i].classList.remove('visible');
        }
    }
}
// timeline();