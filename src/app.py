from flask import Flask, request, render_template

app = Flask(__name__)

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