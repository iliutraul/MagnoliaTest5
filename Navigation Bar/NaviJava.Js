function loadNavigationBar() {
    var navigationBarContainer = document.getElementById('Navigatia');

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../Navigation Bar/Navigation Bar.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            navigationBarContainer.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

loadNavigationBar();


