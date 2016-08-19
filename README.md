# Marbles Demo

This Marbles Demo is built on top of the existing [marbles](https://github.com/IBM-Blockchain/marbles) demo

To launch this Marbles application, first you will need to setup a blockchain network. While you can choose to setup your own blockchain network locally or remotely, this repository makes use of the HSBN (High Security Business Network) on Bluemix. All the peer, ca, and relevant network information is specified in mycreds.json

If you decide to launch a new Bluemix blockchain network, from the Dashboard on Bluemix, 

1. Click the blockchain service tile
1. On the left hand navigation, click Service Credentials
1. Copy and paste the entire file into the mycreds.json

## Running Marbles from Systems Z

Once you have your blockchain network setup, you can run this application.

To run the server-side Marbles application, you must first download the [IBM SDK](https://developer.ibm.com/node/sdk/#v12). This will download the installation package. Install the package and add the location of where the node, npm, and other executables to the PATH environment variable. For instance, during the installation, if the installer says it will install to ~/ibm/node, then the executables will be inside ~/ibm/node/etc. Once this path is added to the PATH variable, node and npm can be called from any directory. 

Once the SDK is download and setup, if you haven't already, clone this repository. Change into the directory containing this repo and run the following commands:

1. $ npm install
1. $ gulp

***

After you see the message


------------------------------------ Websocket Up ----------------------------------------



printed in the console, the chaincode is successfully deployed.

***

## Projects Contents

If you **run marbles on local host** you will have these two urls:

1. Marbles Part 1   -	[http://localhost:3000/p1](http://localhost:3000/p1)
1. Marbles Part 2   -	[http://localhost:3000/p2](http://localhost:3000/p2)


## Privacy Notice

This web application includes code to track deployments to [IBM Bluemix](https://www.bluemix.net/) and other Cloud Foundry platforms. The following information is sent to a [Deployment Tracker](https://github.com/cloudant-labs/deployment-tracker) service on each deployment:

* Application Name (`application_name`)
* Space ID (`space_id`)
* Application Version (`application_version`)
* Application URIs (`application_uris`)

This data is used by IBM to track metrics around deployments of sample applications to IBM Bluemix to measure the usefulness of our examples, so that we can continuously improve the content we offer to you. Only deployments of sample applications that include code to ping the Deployment Tracker service will be tracked.

**Deployment tracking can be disabled by deleting the 'Deployment Tracking' section in [app.js.](app.js#L120)**