"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = exports.users = void 0;
exports.users = [
    { id: 1, firstName: 'Anish', lastName: 'Karki', email: 'anish@uba.com', phone: '1234567890' },
    { id: 2, firstName: 'Manish', lastName: 'Karki', email: 'manish@uba.com', phone: '0987654321' },
];
const getUsers = (req, res) => {
    res.json(exports.users);
};
exports.getUsers = getUsers;
const getUserById = (req, res) => {
    const user = exports.users.find(user => user.id === Number(req.params.id));
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
};
exports.getUserById = getUserById;
const createUser = (req, res) => {
    const newUser = Object.assign({ id: exports.users.length + 1 }, req.body);
    exports.users.push(newUser);
    res.status(201).json(newUser);
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const userIndex = exports.users.findIndex(user => user.id === Number(req.params.id));
    if (userIndex !== -1) {
        exports.users[userIndex] = Object.assign(Object.assign({}, exports.users[userIndex]), req.body);
        res.status(200).json(exports.users[userIndex]);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const userIndex = exports.users.findIndex(user => user.id === Number(req.params.id));
    if (userIndex !== -1) {
        exports.users.splice(userIndex, 1);
        res.sendStatus(204);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
};
exports.deleteUser = deleteUser;
