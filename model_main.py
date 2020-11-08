# dependencies


import numpy as np  # linear algebra
from keras.preprocessing.image import load_img
from keras.preprocessing.image import img_to_array
from tensorflow.python.keras.models import load_model

from os.path import isfile
from zipfile import ZipFile
IMG_SIZE = 200
NUM_CLASSES = 2


def create_model():
    saved_model = "my_modelResnet.h5"
    # if the file does not exist, that means we need to extract it

    if not isfile(saved_model):
        with ZipFile('my_modelResnet.zip','r') as zippedModel:
            zippedModel.extractall()
        pass
    model = load_model(saved_model)
    # print(model.summary())
    return model

def processImage(image):
    '''takes an image and converts it into a format that the model can read'''
    img = [img_to_array(load_img(image, target_size=(IMG_SIZE, IMG_SIZE)))]
    return np.array(img)

if __name__ == '__main__':
    model = create_model()
    testImg = "cat.51.jpg"
    pImg = processImage(testImg)
    result = model(pImg).numpy()
    fullResults = {
        "cat":result[0][0],
        "dog":result[0][1]
    }
    print(fullResults)
    pass
