import { tokenIsExpired } from "../utils/date.js";

export default function auth({ next, router }) {
    const token = localStorage.getItem('token');
    
    if (tokenIsExpired(token)) {
        return router.push('loginpage');
    }

    return next();
};