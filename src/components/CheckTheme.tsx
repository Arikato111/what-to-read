export function checkTheme() {
    let themeState = window.matchMedia('(prefers-color-scheme: dark)')
    if (themeState.matches) {
        document.documentElement.classList.add('dark')
    }
}