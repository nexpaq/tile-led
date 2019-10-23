# tile-led Guide
## Getting Started on development

You can clone the desired repository to create a local copy on your computer.

  1. Navigate to the main page of the repository in Github

  2. Click **Clone or download** and copy the clone URL for the repository

  3. Open your Terminal and change the current working directory to the location where you want the cloned directory to be made and Type `git clone`, and then paste the URL you copied in Step 2.

  As an example, we will clone our `<tile-led>` repository.

  ```bash

  git clone https://github.com/moduware/tile-led.git

  ```

  4. Then **`$ cd tile-led/`**

  5. Run **`$ npm install`** to install all packages in your `package.json` and any packages that it depends on in the local `/node_modules` folder.
   
  6. Run **`$ npm install -g serve`** to install `npx serve` in your project's directory to serve a static site.

Refer to the [webpage][webpage] if you have this error:
   ```bash
   Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
   ```
[webpage]:https://stackoverflow.com/questions/48910876/error-eacces-permission-denied-access-usr-local-lib-node-modules-react/55628400

## Building the Demo

Run the following command:

```bash
$ npm run build
```
and if running correctly, a folder named **`dist`** will appear inside the **`tile-led`**.

## Running A Local Server

  To Run local server on your machine

  1. Open another tab  or window of your terminal

  2. Use `$ serve dist`

  and if running correctly, this message will appear in 

  ```bash
  
   ┌──────────────────────────────────────────────────┐
   │                                                  │
   │   Serving!                                       │
   │                                                  │
   │   - Local:            http://localhost:5000      │
   │   - On Your Network:  http://10.51.33.152:5000   │
   │                                                  │
   │   Copied local address to clipboard!             │
   │                                                  │
   └──────────────────────────────────────────────────┘

  ```
### Running the demo locally

Copy and paste the URL `http://localhost:5000` to your browser and open developer console and select either an IOS or Android device to see the component's render correctly.

   3. Shut down the local server by pressing `ctrl` and `C` together in terminal.

------------------------------------------
Tile for LED module

To build from scratch run these commands:
```bash
# install dependencies
npm install
# prepocess styles
gulp styles
# collect build files (dev mode compatible)
gulp build
# archive files for release
gulp zip
```

As result you will get tile.zip file in root directory containing latest tile package ready for publishing.

[Live Preview][preview]

[preview]: https://material.io/resizer/#device=handset&url=https%3A%2F%2Fnexpaq.github.io%2Ftile-led%2F&width=360