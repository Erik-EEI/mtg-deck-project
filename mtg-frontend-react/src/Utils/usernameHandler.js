const setDefaultUsername = () => {
    localStorage.setItem('username','Guest');
}

const getUsername = () => {
    return localStorage.getItem('username');
}

const saveUsername = ( username ) => localStorage.setItem('username', username);

export {
    setDefaultUsername,
    saveUsername,
    getUsername,
}
