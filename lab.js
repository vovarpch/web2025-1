const { execSync } = require("child_process");

try {
    const githubUsername = execSync("git config --get user.name").toString().trim();
    console.log(`Hello, ${githubUsername}`);
} catch (error) {
    console.error("Не вдалося отримати ім'я користувача GitHub. Налаштуйте його через `git config --global user.name`");
}
