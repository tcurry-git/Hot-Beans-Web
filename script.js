
/*mobile nav opening*/
function showSidebar(){
    const sidebar = document.querySelector('.mobile-sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.mobile-sidebar')
    sidebar.style.display = 'none'
}


/*mobile sidebar closing when link is pressed*/

// GET ALL LINKS IN NAVBAR
const sidebarLinkClicked = document.querySelectorAll('.sidebar-links li a')

links.forEach(l => {
  // BIND CLICK EVENT ON ALL LINKS
  l.addEventListener('click', () => {
    // ON CLICK, REMOVE active CLASS FROM navBarLinks
    sidebar-links.classList.remove('active')
  })
})

/*top button*/
 // Get the button
 let mybutton = document.getElementById("top-button");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }