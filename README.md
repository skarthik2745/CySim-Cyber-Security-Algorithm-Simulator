# CySim

CySim is a lightweight browser-based cryptography and encoding toolkit built with plain HTML, CSS, and JavaScript. It lets you experiment with classical ciphers, encoding schemes, and number conversion tools without any backend or installation steps.

## Features

- Caesar cipher encryption and decryption
- Vigenère cipher encryption and decryption
- XOR processing
- ROT13 transformation
- Reverse text transformation
- Atbash cipher transformation
- Alphabet-to-number and number-to-alphabet conversion
- Number system converter (binary, decimal, hex, octal)
- Base64 encode and decode
- SHA-256 hashing

## Project Structure

- `index.html` – main cryptography toolkit interface
- `script.js` – all cipher, conversion, and hashing logic
- `style.css` – main styling for the application
- `home.html` – alternate landing page or home screen
- `home.css` – styling for the home page

## How to Run

Because this project is a static frontend app, you can run it in either of these ways:

1. Open `index.html` directly in a browser.
2. Or serve it locally:

```bash
cd "c:\Users\NCS\Documents\sk websites 2\CySim-main"
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Usage

- Select a tool from the navigation bar.
- Enter your text or data in the input area.
- Choose the relevant mode or key.
- Click the action button to encrypt, decrypt, convert, or hash.

## Notes

- This app is designed for learning and demonstration purposes.
- Some tools, such as Caesar and Vigenère, are educational examples and not secure for real-world encryption.
- Base64 is an encoding method, not encryption.
- SHA-256 is a one-way hashing function and cannot be reversed.

## Technologies Used

- HTML
- CSS
- JavaScript

##Website Link https://cysim2745.netlify.app/

## License

This project is provided for educational and demonstration use.
