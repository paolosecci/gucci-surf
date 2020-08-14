from flask import Flask, jsonify

app = Flask(__name__)
app.config.from_object('config')

@app.route('/')
def index():
    return "routes:\n" + "/api/surf-data"

@app.route('/api/surf-data')
def getSurfData():
    surf_data = {
        'Banzai Pipeline': 'Oahu, Hawaii',
        'Praia do Norte': 'Nazaré, Portugal',
        'Maverick\'s': 'Half Moon Bay, California',
        'Supertubes': 'Jeffreys Bay, South Africa',
        'Puerto Escondido': 'Oaxaca, Mexico',
        'La Gravière': 'Hossegor, France',
        'Uluwatu': 'Bali, Indonesia',
        'Teahupo\'o': 'Tahiti, French Polynesia',
        'Trestles': 'San Clemente, California',
        'Cloud 9': 'Siargao, Philippines'
    }
    return jsonify(surf_data)

if __name__ == '__main__':
    app.run()
