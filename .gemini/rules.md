# Antigravity Workspace Rules

## 🚀 Automatic Git Commit & Push Directive

- **Mandatory Action**: Whenever any feature implementation, update, bug fix, refactoring, or deletion is completed and verified (e.g. via `npm run build`), the agent MUST automatically execute:
  1. `git add .`
  2. `git commit -m "<descriptive commit message>"`
  3. `git push`
- This ensures the remote GitHub repository ([HelloRayy/web-soccer-game](https://github.com/HelloRayy/web-soccer-game)) is always 100% up-to-date after every completed task.
