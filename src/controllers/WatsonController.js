const fs = require('fs');
const path = require('path');
const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const config = require('../config/watson-vr');

const visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  authenticator: new IamAuthenticator({
    apikey: config.apikey
  }),
  url: config.url
});

module.exports = {
  async searchFile(request, response) {
    const classifyParams = {
      url: `http://pi2020a.herokuapp.com/files/${request.file.key}`
    }

    visualRecognition.classify(classifyParams)
      .then(wvr => {
        return response.json(wvr.result).status(200);
      })
      .catch(error => {
        return response.status(400).json({ error });
      });
  },

  async searchEncoded(request, response) {

    const fileName = new Date().getTime() + '.png';
    const base64Data = request.body.b64image.replace(/^data:image\/png;base64,/, "");

    fs.writeFile(path.resolve(__dirname, '..', '..', 'tmp', fileName), base64Data, 'base64', function (err) {
      console.log(err);
    });

    const classifyParams = {
      url: `https://pi2020a.herokuapp.com/files/${fileName}`
    }

    visualRecognition.classify(classifyParams)
      .then(wvr => {
        return response.json(wvr.result).status(200);
      })
      .catch(error => {
        return response.status(400).json({ error });
      });
  },
}