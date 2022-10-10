import json
from flask import Flask, request, render_template
from flask_cors import CORS

import constants

app = Flask(__name__)
cors = CORS(app=app)

@app.route('/')
@app.route('/home')
def home():
    if request.method == 'GET':
        with open(constants.HOME_PATH) as f:
            home_data = json.load(f)
        return render_template('home.html', context = home_data)
    
    
if __name__ == '__main__':
    
    app.run(
        host='127.0.0.1',
        port=5000,
        debug=True
    )