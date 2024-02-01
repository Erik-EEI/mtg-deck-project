const setDefaultUsername = () => {
    if( !localStorage.getItem('username') ){
    localStorage.setItem('username','Guest');
    }
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
