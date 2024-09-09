function helloMessage(inp){
    console.log(`Hi ${inp} its nice to welcome you`);
}

//module.export helps to export the file to outside

module.exports.display=helloMessage;