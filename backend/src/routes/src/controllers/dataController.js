// Sample controller
// Backend: dataController.js
exports.getData = (req, res) => {
    // Return only necessary data to the client
    res.json({ data: 'Here is your data' });

    // Avoid exposing sensitive data directly
    // Sensitive data should never be hardcoded or sent in the response
    const sensitiveData = { username: "admin", token: "123456" };

    // Example: Sensitive data should be stored in environment variables and never sent to the client
    // console.log(`Sensitive Data: ${process.env.SOME_SECRET}`);
};
