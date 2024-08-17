from flask import Flask, render_template, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route("/getNews")
def getNews():
                                     
    url = ('https://newsapi.org/v2/everything?'
           'q=trump&'
           'language=en&'
           'pageSize=10&'
           'apiKey=') 
    print(requests.get(url).json())
    return jsonify(requests.get(url).json())
    

if __name__=='__main__':
    app.run(debug=True)
