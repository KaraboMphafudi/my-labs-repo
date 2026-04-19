let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

// ==================
// PRACTICE TASK
// Dietary Services Authorization
// ==================

let personRole = "Non-Subscriber"; // Change this to test different roles
let accessMessage;

switch(personRole) {
    case "Employee":
        accessMessage = "Access Granted! You are authorized to have full access to Dietary Services. 🥗";
        break;
    case "Enrolled Member":
        accessMessage = "Access Granted! You are authorized to have full access to Dietary Services and one-on-one interaction with a dietician. 👨‍⚕️";
        break;
    case "Subscriber":
        accessMessage = "Partial Access Granted! You are authorized to have partial access to Dietary Services only. ⚠️";
        break;
    case "Non-Subscriber":
        accessMessage = "Access Denied! You need to enroll or subscribe first to avail this facility. ❌";
        break;
    default:
        accessMessage = "Unknown Role! Please contact the administrator. 🚫";
}

console.log("Role:", personRole);
console.log("Access Status:", accessMessage);