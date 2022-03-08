export const login = (user) => ({
    type: "LOGIN",
    payload: user
});

export const resetAuth = (error) => ({
    type: "RESET_AUTH",
    payload: error
})

export const logout = () => ({
    type: "LOGOUT"
})

export const AuthActionTypes = {
    LOGIN: "LOGIN",
    RESET_AUTH: "RESET_AUTH",
    LOGOUT: "LOGOUT",
};