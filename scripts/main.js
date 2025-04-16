var typewriter = document.getElementById('typewriter');
var texts = [' Graphics Designer', 'UI & UX Designer', 'Web Designer'];
var currentText = 0;
var letterCount = 0;

function type() {
    if (letterCount < texts[currentText].length) {
        letterCount++;
        typewriter.textContent = texts[currentText].substring(0, letterCount);
        setTimeout(type, 100);
    } else {
        currentText++;
        if (currentText >= texts.length) {
            currentText = 0;
        }
        letterCount = 0;
        setTimeout(type, 2000);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    type();
});

//lazy load of images

const lazyImage =document.querySelectorAll('.lazy');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            let img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('loading');
            img.classList.add('loaded')
            observer.unobserve(img);
        }
    })
});
lazyImage.forEach(img => {
    observer.observe(img);
});






//observer
function createIntersectionObserver(className, classToAdd) {
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(classToAdd);
            } else {
                entry.target.classList.remove(classToAdd);
            }
        });
    });

    const hiddenElements = document.querySelectorAll(className);
    hiddenElements.forEach((el) => observer2.observe(el));
}

createIntersectionObserver('.hiddenContentFromTop', 'show__YContent');
createIntersectionObserver('.hiddenBtnToBottom', 'show__YContent');
createIntersectionObserver('.hiddenLeft', 'showToLeft');
createIntersectionObserver('.hiddenRight', 'showToLeft');
createIntersectionObserver('.hiddenImage', 'show__YContent');
createIntersectionObserver('.hiddenCardToLeft', 'showToLeft');
// Observer for elements with the 'fromBottom' class
createIntersectionObserver('.HiddenToBottom', 'fromBottom');

