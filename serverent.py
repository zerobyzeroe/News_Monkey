from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API_URL = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apikey=c3adf6e89d0a4a2ea355b6aecab7e398&page=1&pageSize=50"

@app.route('/api/news', methods=['GET'])
def get_news():
    try:
        response = requests.get(API_URL)
        print(response)
        data = response.json()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)