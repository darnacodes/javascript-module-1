/*  In pairs, write a function that checks a username is of an acceptable format for a user type. The function must:
take two parameters: one for the username and one for the user type.

if the username starts with a capital letter and has length between 5 and 10 characters long, it must return "Username
 valid"; otherwise, it must return "Username invalid"

 if the user type is an admin or a manager, all usernames must return "Username valid

*/

//username === start with capital leter  && >= 5 and 10  return "Username valid", else return "Username invalid"
//usertype === admin  || manager return "username valid"

function usernameChecker(userName, userType) {
    if (userType === "admin" || userType === "manager") {
        return "Username Valid";
    }
    if (userName.length >= 5 && userName.length <= 10 && userName[0]== userName[0].toUpperCase()) {
        return "Username Valid";
        } else {
        return "Username Invalid";
        }
    
}
console.log("not adim or manager", usernameChecker("shortsssss","other"))
console.log("admin and less 5 ",usernameChecker("sho","admin"))
console.log("manager, and 5", usernameChecker("short","manager"))
console.log("other, and 5", usernameChecker("Short","other"))