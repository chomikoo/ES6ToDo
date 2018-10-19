const generateID = () => {
    const chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
    let id = 'task-';

    for(let i = 0; i < 5; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];

    };

    return id;
}


export default generateID;