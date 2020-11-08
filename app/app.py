from flask import Flask, render_template, request
import base64
import time
import model_main

app = Flask(__name__, template_folder='templates')
model = model_main.create_model()

@app.route("/")
@app.route('/index')
def index(): 
        return render_template('index.html')

@app.route('/evaluate', methods = ['POST'])
def evaluate():
        imgDataB64 = request.form['imageData']
        imgDataPNG = base64.b64decode(imgDataB64[22:])
        fileName = str(time.time()) + ".png"
        with open(fileName,"wb") as fo:
                fo.write(imgDataPNG)
        processedImg = model_main.processImage(fileName)
        model_result = model(processedImg).numpy()
        result = ""
        if model_result[0][0] > model_result[0][1]:
                percentage = model_result[0][0] * 100
                percentage = str(round(percentage, 2))
                result += percentage + "% sure this is a cat."
        else:
                percentage = model_result[0][1] * 100
                percentage = str(round(percentage, 2))
                result += percentage + "%  sure this is a dog."
        return render_template('result.html', result=result, data=imgDataB64)

