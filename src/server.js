import app from "./app.js";

/**
 * This constant recive a port value to run server
 *
 * @constant
 */
const port = process.env.PORT || 3000;

/**
 * Run application server
 */
app.listen(port, () => console.log(`Server listening on port: ${port}`));
