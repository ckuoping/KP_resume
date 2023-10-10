// 變數
const my_projects = document.querySelector("#my-projects")

const my_skills = document.querySelector("#my-skills")

const my_jobs = document.querySelector("#my-jobs")

const my_education = document.querySelector("#my-education")

const project_filters = document.querySelectorAll('.project-filter')


const sideproject_links = [
    { name: '#sideproject-img1', link: "https://ckuoping.github.io/responsive_shopping_web/" },
    { name: '#sideproject-img2', link: "https://www.youtube.com/watch?v=C2y-MJhVH_g" },
    { name: '#sideproject-img3', link: "http://excited-string.surge.sh/index.html" },
    { name: '#sideproject-img4', link: "./html/project1.html" },
    { name: '#sideproject-img5', link: "https://www.youtube.com/watch?v=-HEMD3I000U" },
    { name: '#sideproject-img6', link: "./html/project2.html" },
]



// 偵聽事件
my_projects.addEventListener('click', function(event) {
    scrollToProjects()
})

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

for (let i = 0; i < sideproject_links.length; i++) {
    document.querySelector(`${sideproject_links[i].name}`).addEventListener('click', function(event) {
        window.open(`${sideproject_links[i].link}`);
    })
    document.querySelector(`${sideproject_links[i].name}`).addEventListener('mouseover', function(event) {
        project_filters[i].classList.remove('disappear')
    })

    document.querySelector(`${sideproject_links[i].name}`).addEventListener('mouseout', function(event) {
        project_filters[i].classList.add('disappear')
    })
}


document.addEventListener('scroll', timeline);

function openProjectMtr(){
    let pswd = prompt('密碼');
    let ans = 'moldex3d!';
    if(pswd === ans){
        window.open("../html/project_mtr.html", "_blank");
    }else{
        alert('invalid password');
    }
    
}

// 後台區
function scrollToProjects() {
    document.getElementById('move-to-projects').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
}



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
        // console.log(i, timeline_events[i].offsetTop)
        // console.log(threshold_position)
        if (timeline_events[i].offsetTop < threshold_position) {
            timeline_events[i].classList.add('visible');
        } else {

            timeline_events[i].classList.remove('visible');
        }
    }
}
// timeline();

// 個人專案區
let splideimg = new Splide('#image-slider', {
    type: 'loop',
    autoplay: true,
    cover: true,
    heightRatio: 0.2,
    height: 450,
});

splideimg.mount()