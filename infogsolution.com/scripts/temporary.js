window.onload = function() {
    var accordions = document.querySelectorAll('#accordion .accordion-toggle');
    for (var i=0; i<accordions.length; i++) { 
        accordions[i].onclick = function(){

            // Hide the other panels
            // ( at first: avoid testing wich is not to hide :P )
            var contents = this.parentElement.getElementsByClassName('accordion-content');
            for (var i=0; i<contents.length; i++) { 
              contents[i].className = 'accordion-content';
            }

            // Expand or collapse this panel
            this.nextElementSibling.className = 'accordion-content default';
        };
    }
};
