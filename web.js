<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Website</title>
    <style>
        /* CSS styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 0 20px;
        }
        #content {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Dynamic Website</h1>
    </header>
    <div class="container">
        <div id="content">
            <h2>Welcome to our dynamic website!</h2>
            <p>This is a simple example of a dynamic website using HTML, CSS, and JavaScript.</p>
            <button id="changeTextBtn">Click me!</button>
            <p id="dynamicText">This text can be changed dynamically.</p>
        </div>
    </div>

    <script>
        // JavaScript code
        document.getElementById('changeTextBtn').addEventListener('click', function() {
            document.getElementById('dynamicText').textContent = 'Text changed dynamically!';
        });
    </script>
</body>
</html>
