AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modal-img');
    var modalInfo = document.getElementById('modal-info');
    var span = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.link-custom').forEach(function(link) {
        link.onclick = function(e) {
            e.preventDefault();
            var info = this.getAttribute('data-info');
            var img = this.getAttribute('data-img');
            
            if (img) {
                modalImg.src = img;
                modalImg.style.display = 'block';
            } else {
                modalImg.style.display = 'none';
            }

            modalInfo.textContent = info;
            modal.classList.add('show'); // Add class to show modal with transition
        };
    });

    span.onclick = function() {
        modal.classList.remove('show'); // Remove class to hide modal with transition
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('show'); // Remove class to hide modal with transition
        }
    };
});
