from flask import Flask, render_template
  
app = Flask(__name__, template_folder='templates')
  
@app.route("/")
@app.route('/index')
def index(): 
        return render_template('index.html')

@app.route('/evaluate', methods = ['POST'])
def evaluate(): 
        return "<h1>Hi, Karan!</h1>"