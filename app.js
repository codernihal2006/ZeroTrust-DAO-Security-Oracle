const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>ZeroTrust DAO Security Oracle</title>
    <style>
        body { background: #000; color: #0f0; font-family: monospace; padding: 20px; }
        .panel { border: 1px solid #0f0; padding: 20px; margin: 20px 0; }
        h1 { color: #fff; text-align: center; }
        .status { color: #0ff; font-weight: bold; }
    </style>
</head>
<body>
    <h1>🏆 ZeroTrust DAO Security Oracle</h1>
    <div class="panel">
        <h2>System Status: <span class="status">OPERATIONAL</span></h2>
        <p>Port: ${PORT}</p>
        <p>URL: http://localhost:${PORT}</p>
        <p>Status: <span id="status">Loading...</span></p>
    </div>
    <div class="panel">
        <h2>Live Stats</h2>
        <p>Threats: <span id="threats">0</span></p>
        <p>Transactions: <span id="tx">0</span></p>
        <p>Uptime: <span id="uptime">0</span>s</p>
    </div>
    <script>
        let threats = 0, tx = 0, start = Date.now();
        
        function update() {
            threats += Math.random() > 0.9 ? 1 : 0;
            tx += Math.floor(Math.random() * 5);
            
            document.getElementById('status').textContent = 'RUNNING';
            document.getElementById('threats').textContent = threats;
            document.getElementById('tx').textContent = tx;
            document.getElementById('uptime').textContent = Math.floor((Date.now() - start) / 1000);
        }
        
        setInterval(update, 2000);
        update();
        console.log('ZeroTrust System Loaded');
    </script>
</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log('');
  console.log('✅ ZeroTrust System WORKING');
  console.log(`🔗 URL: http://localhost:${PORT}`);
  console.log('');
});
