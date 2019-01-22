# Dev-EQ

_Helping Developers Emote!_

This app is deployed here: 
[https://deveq.herokuapp.com/](https://deveq.herokuapp.com/)

## The Premise

Sometimes, we developers can be so focused on our machines that we fail to communicate well emotionally with others around us.  Sometimes we can be downright socially awkward!  

Enter Dev-EQ.

Dev-EQ is an Artificial Intelligence application with trained models to detect emotion in the user’s face.  We use this information to help the user learn (1) what facial expression they are making and (2) How they can better display emotion to those around us.  

## How it Works: The Basics

- Captures webcam data and draws it to the canvas in real-time, and on each update of the canvas,
- Tracks 70 data points on the user’s face and
- Implements Constrained Local Models (CLM) to
- Determine the current emotion by using Logistic Regression to compare the data points to the models that the machine has been pre-trained on.


## clmtrackr

The main package I used to make this app happen was [clmtrackr](https://www.npmjs.com/package/clmtrackr).  

