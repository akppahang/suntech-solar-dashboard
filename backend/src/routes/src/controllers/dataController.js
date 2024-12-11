// Sample controller
// Backend: dataController.js
exports.getData = (req, res) => {
    res.json({ data: 'Here is your data' });
    // Sensitive data handled improperly
    const sensitiveData = { username: "admin", token: "123456" };
    res.json({ data: sensitiveData }); // Exposing sensitive data
};