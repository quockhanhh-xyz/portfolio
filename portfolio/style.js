// Portfolio site coded from scratch to be responsive and mobile-first for the University of Michigan "Web Design for Everybody: Basics of Web Development & Coding Specialization". Code was copy-pasted for evaluation purposes only, so some formatting might have been lost. Favicon and videos missing.

//================================
// NAVIGATION | MOBILE MENU BUTTON
//================================

// Turns a couple of classes on and off to show and hide both parts of the mobile menu simultaneously.

    var mobileMenuTop = document.getElementById("mobileMenuContainer");
    var mobileMenuBottom = document.getElementById("mobileMenuBottomContainer");
    var documentBody = document.body;
    // Assigns variables to the top and bottom containers of the mobile menu, as well as the body.

    function mobileMenuToggle() {
        mobileMenuTop.classList.toggle("mobileMenuContainerShow");
        mobileMenuBottom.classList.toggle("mobileMenuBottomContainerShow");
        documentBody.classList.toggle("mobileMenuLockBody");
    } // Toggles a class in the containers, bringing them into view.
      // When toggled off, they move back into hiding.
      // Last one toggles a class that locks the body into position
      // when the mobile menu is open.


// ==============================
// NAVIGATION | MOBILE MENU LINKS
// ==============================

// Mobile menu links go through JavaScript in order for the menu to close when one is clicked.

    var bookmarkEssentials = document.getElementById("bookmarkEssentials");
    var bookmarkLearnings = document.getElementById("bookmarkLearnings");
    var bookmarkFrames = document.getElementById("bookmarkFrames");
    var bookmarkGraphics = document.getElementById("bookmarkGraphics");
    var bookmarkCoding = document.getElementById("bookmarkCoding");

    function teleportToBookmarkEssentials() {
        bookmarkEssentials.scrollIntoView();
    }

    function teleportToBookmarkLearnings() {
        bookmarkLearnings.scrollIntoView();
    }

    function teleportToBookmarkFrames() {
        bookmarkFrames.scrollIntoView();
    }

    function teleportToBookmarkGraphics() {
        bookmarkGraphics.scrollIntoView();
    }

    function teleportToBookmarkCoding() {
        bookmarkCoding.scrollIntoView();
    }


//====================
// NAVIGATION | NAVBAR
//====================

    var bodyWidth = document.body.clientWidth;
    // Creates a variable corresponding to the body width.

    documentBody.onresize = function() {resetMobileMenu()}
    // Runs the mobile menu reset function when body size changes are detected.

    function resetMobileMenu() {
        if (bodyWidth > 567) {
            mobileMenuTop.classList.remove("mobileMenuContainerShow");
            mobileMenuBottom.classList.remove("mobileMenuBottomContainerShow");
            documentBody.classList.remove("mobileMenuLockBody");
        }
    } // If the body width is greater than 567px (568px is the breakpoint to clear
      // the mobile menu), it removes all the classes introduced by opening the
      // mobile menu, such as locking the body in place. This prevents users from 
      // switching to landscape mode with the menu still open and not be able
      // to scroll. 

      
// =========================
// NAVIGATION | NAVBAR LINKS
// =========================

// Navbar menu links go through JavaScript to add the smooth scrolling behavior.
// Variables have already been defined in the mobile menu links.

    function goToBookmarkEssentials() {
        bookmarkEssentials.scrollIntoView({behavior: "smooth"});
    }

    function goToBookmarkLearnings() {
        bookmarkLearnings.scrollIntoView({behavior: "smooth"});
    }

    function goToBookmarkFrames() {
        bookmarkFrames.scrollIntoView({behavior: "smooth"});
    }

    function goToBookmarkGraphics() {
        bookmarkGraphics.scrollIntoView({behavior: "smooth"});
    }

    function goToBookmarkCoding() {
        bookmarkCoding.scrollIntoView({behavior: "smooth"});
    }


//================================
// NAVIGATION | BACK TO TOP BUTTON
//================================

// Turns a class on and off which is applied to the element depending on
// whether the browser window is past a certain distance from the top of the page.
// Most solutions online use jQuery but I found and simplified a JavaScript one.

    var backToTopButton = document.getElementById("backToTopButton");
    // Assigns the back to top button to a variable.

    function backToTopFunction() {
        window.scrollTo({top: 0, behavior: "smooth"});
    } // Defines a function that scrolls to the top of the browser window *smoothly*.

    window.onscroll = function() {showBackToTopButton()}
    // When the browser window is scrolled, runs the conditional function below.

    function showBackToTopButton() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.classList.add("backToTopShow");
            } else {
                backToTopButton.classList.remove("backToTopShow");
            }
    } // Defines a conditional function that checks if the page has been scrolled
      // past a certain point. If so, adds a class to the button that makes it come into view.
      // If not, it removes the class.