export const getjwt = () => {
    return localStorage.getItem('the-jwt');
};

export const getID = () => {
    return localStorage.getItem('userID');
}