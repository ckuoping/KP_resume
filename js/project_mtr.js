// ============ VERTICAL SLIDER ============ //
var cards = $('#card-slider .slider-item').toArray();

startAnim(cards);

function startAnim(array){
    if(array.length >= 4 ) {
        TweenMax.fromTo(array[0], 0.5, {x:0, y: 0, opacity:0.75}, {x:0, y: -120, opacity:0, zIndex: 0, delay:0.03, ease: Cubic.easeInOut, onComplete: sortArray(array)});

        TweenMax.fromTo(array[1], 0.5, {x:79, y: 125, opacity:1, zIndex: 1}, {x:0, y: 0, opacity:0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: Cubic.easeInOut});

        TweenMax.to(array[2], 0.5, {bezier:[{x:0, y:250}, {x:65, y:200}, {x:79, y:125}], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: Cubic.easeInOut});

        TweenMax.fromTo(array[3], 0.5, {x:0, y:400, opacity: 0, zIndex: 0}, {x:0, y:250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut}, );
    } else {
        $('#card-slider').append('<p>Sorry, carousel should contain more than 3 slides</p>')
    }
}

function sortArray(array) {
    clearTimeout(delay);
    var delay = setTimeout(function(){
        var firstElem = array.shift();
        array.push(firstElem);
        return startAnim(array); 
    },3000)
}
// ============ tooltip initialization ============ //
$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});
// =============== persona selection =============== // 
const expert = document.querySelectorAll('.expert-btn');
const novice = document.querySelectorAll('.novice-btn');

const persona_top = document.querySelector('.persona-top');
const persona_bottom = document.querySelector('.persona-bot');

expert.forEach(item =>{
    item.addEventListener('click',function(){
        persona_top.src = '../img/mdxmat/mat_persona_1.png';
        persona_bottom.src = '../img/mdxmat/mat_persona_2.png';
    })
})
novice.forEach(item=>{
    item.addEventListener('click',function(){
        persona_top.src = '../img/mdxmat/mat_persona_2.png';
        persona_bottom.src = '../img/mdxmat/mat_persona_1.png';
    })
})


// ============ demo material picture ============ // 
const demo_icon = document.querySelectorAll('.demo_icon');
const demo_img = document.querySelector('.demo-img');
const demo_img_wrapper = document.querySelector('.demo-img-wrapper');

demo_icon.forEach(item=>{
    item.addEventListener('click',function(){
        demo_img.src = `../img/mdxmat/mat_demo_${item.dataset.id}.png`;
        demo_img.setAttribute('data-magnify-src',`../img/mdxmat/mat_demo_${item.dataset.id}.png`);

        $(document).ready(function() {
            $('.zoom').magnify();
          });
    })
});

// ============ magnifier ============ //
$(document).ready(function() {
    $('.zoom').magnify();
  });

