# qlik-core-desktop

This is an experimental implementation of the Qlik Sense Desktop application code running on top of Qlik Core. To use it, you will need Docker installed.
To run the solution:
1. Use a terminal or bash client and navigate to the project directory.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to launch the Qlik Core Docker image and start the Node.js web server
4. Test the client by navigating to `http://localhost:8000/sense/app/Helpdesk%20Management.qvf`
5. To test other `.qvf` files simply drop them in the `data` folder and update the url accordingly.

NOTE: The hub and data load editor functionality is not available.