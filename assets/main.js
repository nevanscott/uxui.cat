// =============================
// IMAGE LOADING (lazy load polyfill)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll("img.lazyload");
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Dynamically import the LazySizes library
  let script = document.createElement("script");
  script.async = true;
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
  document.body.appendChild(script);
}

// =============================
// PAGE LOADING

//Define Transition
const FadeTransition = Barba.BaseTransition.extend({
  start: function () {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this))
  },
  fadeOut: function () {
    const oldContainer = this.oldContainer
    return new Promise(function (resolve) {
      anime({
        targets: oldContainer,
        opacity: 0,
        easing: 'easeInOutCirc',
        duration: 300,
        complete: function () {
          resolve()
        }
      })
    })
  },
  fadeIn: function () {
    const _this = this
    const oldContainer = this.oldContainer
    const newContainer = this.newContainer
    window.scrollTo(0, 0)
    oldContainer.style.display = 'none'
    newContainer.style.visibility = 'visible'
    newContainer.style.opacity = 0
    // Clear classes on body
    document.body.className = ''
    // Set URL as array split at slashes
    var targetUrl = Barba.Utils.getCurrentUrl().split('/')
    // Apply last item in array as class
    var l = targetUrl[targetUrl.length-1]
    // Index returns nothing after split, so check
    if (l != '') { document.body.classList.add(l) }
    else { document.body.classList.add('work') }
    anime({
      targets: newContainer,
      opacity: 1,
      easing: 'easeInOutCirc',
      duration: 600,
      complete: function () {
        _this.done()
      }
    })
  }
})

Barba.Pjax.getTransition = function () {
  return FadeTransition
}

//Setup Barba
const Home = Barba.BaseView.extend({
  namespace: 'home',
  header: document.querySelector('.header')
})

// Init view
Home.init()

// Document ready
document.addEventListener('DOMContentLoaded', function (e) {
  Barba.Pjax.start()
})
