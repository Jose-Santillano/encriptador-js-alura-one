// ** Main functions **

// Functions to encrypt the message.
const input = (option) => {
  //Get the message from the input.
  let message = document.getElementById("message").value;

  //We clean the string to accept only letters and validate.
  message = cleanString(message);

  //Validate if the message is empty.
  if (message.length == 0) {
    alert("Please, write a message...");
  } else {
    switch (option) {
      case 1: {
        //Encrypt the message.
        document.getElementById("output").value = encrypt(message);
        alert("Message encrypted!");
        break;
      }
      case 2: {
        //Decrypt the message.
        document.getElementById("output").value = decrypt(message);
        alert("Message decrypted!");
        break;
      }
      default: {
        alert("An error has occurred, please try again...");
      }
    }
  }

  //Clear the input and output.
  clear();
};

// Function to encrypt the message.
const encrypt = (text) => {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
};

// Function to decrypt the message.
const decrypt = (text) => {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
};

// Function to copy the output.
const copyToClipboard = () => {
    const output = document.getElementById("output");
    output.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}

// ** Auxilar functions **

// Function to clean the string.
const cleanString = (str) => {
  //Remove accents.
  str = removeAccents(str);

  //Remove special characters and numbers.
  str = removeSpecialCharacters(str);

  //Convert to lowercase.
  str = str.toLowerCase();

  return str;
};

// Function to remove accents.
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// Function to remove special characters and numbers.
const removeSpecialCharacters = (str) => {
  return str.replace(/[^a-zA-Z ]/g, "");
};

// Function to clear the input and output.
const clear = () => {
  document.getElementById("message").value = "";
};
