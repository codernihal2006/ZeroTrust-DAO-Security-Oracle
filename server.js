const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002;

app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'beautiful-dashboard.html'));
});

app.listen(PORT, () => {
    console.log('✅ BEAUTIFUL ZeroTrust Dashboard RESTORED!');
    console.log(`🔗 http://localhost:${PORT}`);
    console.log('🎨 Your amazing dashboard is back!');
});
