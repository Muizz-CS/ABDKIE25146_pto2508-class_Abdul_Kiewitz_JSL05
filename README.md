Please note that my Git history might look a bit incomplete. I spent some time restructuring the project to improve the modularity, but in the process, I accidentally lost the link to my previous commits. I’m still getting the hang of Git moves, so I apologize for the lack of visible history!

Key Features
Persistent Storage: Tasks are saved to the browser's LocalStorage, ensuring data persists even after refreshing the page.

Modular JS Architecture: Code is organized into logical files (storage.js, taskFunctions.js, scripts.js) for maximum maintainability.


Responsive Design: Optimized for both desktop and mobile views, featuring a transforming "Add Task" button for smaller screens.

File Structure
index.html: Core markup, column shells, and modal dialog structure.

styles.css: Flexbox/Grid layout and mobile-responsive styling.

scripts.js: Main application logic and DOM orchestration.

storage.js: Module for localStorage GET/SAVE operations.

taskFunctions.js: Module for task object creation and logic.

initialData.js: Default task set for first-time users.