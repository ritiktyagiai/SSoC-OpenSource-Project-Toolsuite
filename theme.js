function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

window.toggleTheme = function () {
    const isDark = document.body.classList.contains('dark-mode');

    if (isDark) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
};
