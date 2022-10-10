from pprint import pp
from flask import Flask, request, render_template
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app=app)

@app.route('/')
@app.route('/home')
def home():
    if request.method == 'GET':
        return render_template('home.html')
    
    
if __name__ == '__main__':
    
    app.run(
        host='127.0.0.1',
        port=5000,
        debug=True
    )