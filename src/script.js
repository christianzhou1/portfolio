document.addEventListener("DOMContentLoaded", function() {
  

  /* let scroll_timeout = undefined;
  let ratio = 0.25; // change this to increase/decrease scroll speed/step

  window.addEventListener("wheel", (event) => {
    event.preventDefault();

    clearTimeout(scroll_timeout); // if the previous scroll didn't finish, need to stop it to prevent infinite scroll.

    let target = window.scrollY + event.deltaY * ratio;
    let step = target > window.scrollY ? 1 : -1;

    let frame = () => {
      window.scrollBy(0, step);
      if ((target < window.scrollY && step < 0) || (target > window.scrollY && step > 0)) {
        scroll_timeout = setTimeout(frame, 5);
      }
    };
    frame();
  }); */
/* 
  // Define the testScroll function
  function testScroll(event) {
    event.preventDefault();
    let deltaY = event.deltaY;
    let speed = deltaY / 3;
    this.scrollTop += speed;
  }

  // Get all elements in the document
  const allElements = document.querySelectorAll('*');

  // Iterate over each element and attach the event listener
  allElements.forEach(element => {
    element.addEventListener("wheel", testScroll);
  }); */






  let iframes = document.getElementsByTagName("iframe");
  for (var i=0; i<iframes.length; i++) {
    console.log(iframes[i].src);
  }


  // fade into view
  // Function to handle intersection events
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }

  // Create an Intersection Observer
  let observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1  // Adjust this threshold as needed
  });

  // Select all elements with the class 'fade-into-view'
  let elementsToObserve = document.querySelectorAll('.fade-into-view');

  // Observe each element
  elementsToObserve.forEach(element => {
    observer.observe(element);
  });


  //-------------------------------------------------------------
/*   var animatedElement = document.getElementById("fade-into-view");
        //var triggered = false;

  function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function triggerAnimation() {
    if (isInViewport(animatedElement)) {
      animatedElement.classList.add("is-visible");
      //triggered = true;
    } else {
      animatedElement.classList.remove("is-visible");
      //triggered = false;
    }
  }

  // Trigger animation on scroll
  window.addEventListener("scroll", triggerAnimation);
  // Trigger animation on page load (if element is initially in view)
  triggerAnimation(); */
  
  
  


  var scrollTopButton = document.getElementById("scroll-top-btn");
  
  window.onscroll = () => {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 700) {
      //scrollTopButton.style.display = "block";
      //scrollTopButton.classList.toggle("fade-in");
      if (!scrollTopButton.classList.contains("visible")) {
        scrollTopButton.classList.add("visible");
        scrollTopButton.classList.remove("hidden");
        console.log("visible");
      }
    } else {
      //scrollTopButton.style.display = "none";
      //scrollTopButton.classList.toggle("fade-out");
      if (!scrollTopButton.classList.contains("hidden")) {
        scrollTopButton.classList.add("hidden");
        scrollTopButton.classList.remove("visible");
        console.log("hidden");
      }
    }
  }
});



/* // Bind your button click, scroll direction and effect speed
document.getElementById("scroll-top-btn").onclick = function() {
  scrollTo(0, 2000);

}

// Element to move, time in ms to animate
function scrollTo(element, duration) {
  var e = document.documentElement;
  if (e.scrollTop === 0) {
    var t = e.scrollTop;
    ++e.scrollTop;
    e = t + 1 === e.scrollTop-- ? e : document.body;
  }
  scrollToC(e, e.scrollTop, element, duration);
}

// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
  if (duration <= 0) return;
  if (typeof from === "object") from = from.offsetTop;
  if (typeof to === "object") to = to.offsetTop;

  scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
  if (t01 < 0 || t01 > 1 || speed <= 0) {
    element.scrollTop = xTo;
    return;
  }
  element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
  t01 += speed * step;
  debugger;
  setTimeout(function() {
    scrollToX(element, xFrom, xTo, t01, speed, step, motion);
  }, step);
}

function easeOutCuaic(t) {
  t--;
  return t * t * t + 1;
} */