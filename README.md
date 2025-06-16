# Ubertone Exercice 


## Exercice statement
A graphical interface displaying a sinusoid graphically, which can be configured in amplitude and frequency by the user.


## Getting Started

### Linux:
```bash
git clone git@github.com:leolcde/Ubertone-exercice.git
cd Ubertone_exercice
```

Check your node and npm version.
```bash
node -v
npm -v
```
If you do not have node or npm, install them.
```bash
npm install
npm run dev
```

### Apple & Windows:
```bash
git clone https://github.com/leolcde/Ubertone-exercice.git
cd Ubertone-exercice
```
Check your node and npm version.
```bash
node -v
npm -v
```
If you do not have node or npm, install them.
```bash
npm install
npm run dev
```

## Build website with docker container
To install Docker, please refer to the Docker documentation.

Linux:
https://docs.docker.com/desktop/setup/install/linux/

Mac:
https://docs.docker.com/desktop/setup/install/mac-install/

Windows:
https://docs.docker.com/desktop/setup/install/windows-install/

### For launch the website
```bash
docker run -it -p 8080:8080 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
```


## Project Structure
```
/Ubertone-exercice
│
├── /public         # Pictures
├── /src
│   ├── /App.vue    # HTML templates or frontend files
│   └── /main.js    # Javascript for init the app
│
└── package.json