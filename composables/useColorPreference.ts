export const useColorPreference = () => {
    const isDark = ref(true);

    if (process.client) {
        const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

        darkModePreference.addEventListener("change", (e) => {
            isDark.value = e.matches;
        });
    }

    return { isDark };
};
