export const isDataValid = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|in)$/.test(email);

    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/.test(password);

    // if there is any invalid field, return false
    if (!isEmailValid) return "Email ID is Invalid";
    if (!isPasswordValid) return "Password is Invalid";

    // if all fields are valid, return true
    return null;
}