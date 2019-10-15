$(document).ready(function () {

    (function dropdown() {
        $('button.dropdown-button').on('click', function () {
            console.log(this);
            if (this.nextElementSibling.classList.contains('active')) {
                slideTop(this.nextElementSibling);
                this.nextElementSibling.classList.remove('active');
            } else {
                slideBottom(this.nextElementSibling);
                this.nextElementSibling.classList.add('active');
            }
        });

        function slideBottom(ele) {
            $(ele).slideDown();
        }

        function slideTop(ele) {
            $(ele).slideUp();
        }
    })();

});