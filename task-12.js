var practiceKey = "formcraft-student01-theme-01";
localStorage.getItem(practiceKey);

localStorage.setItem(practiceKey, "forest");
localStorage.getItem(practiceKey);
var practiceTheme = "forest";


var practicePrefs = { theme: "forest", visits: 3 };
localStorage.setItem(practiceKey, JSON.stringify(practicePrefs));
localStorage.getItem(practiceKey);
var restoredPrefs = JSON.parse(localStorage.getItem(practiceKey));
restoredPrefs.theme;
restoredPrefs.visits + 1;


localStorage.removeItem(practiceKey);
localStorage.getItem(practiceKey);