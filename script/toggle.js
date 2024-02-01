const toggleButtons = document.querySelectorAll('.toggleButton');

toggleButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const targetId = button.dataset.target;
    const targetElement = document.getElementById(targetId);
    toggleElement(targetElement);
  });
});

const closeButtons = document.querySelectorAll('.close');

closeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const element = button.closest('.modal');
    element.style.display = 'none';
  });
});

function toggleElement(element) {
  if (element.style.display === 'none') {
    element.style.display = 'flex';
  } else {
    element.style.display = 'none';
  }
}

window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
};

const toggleOpen = document.getElementById('switch');
toggleOpen.addEventListener('change', function() {
  const blocCompElements = document.querySelectorAll('.bloc-comp');
  if (toggleOpen.checked) {
    blocCompElements.forEach(function(element) {
      element.classList.add('active');
    });
  } else {
    blocCompElements.forEach(function(element) {
      element.classList.remove('active');
    });
  }
});

