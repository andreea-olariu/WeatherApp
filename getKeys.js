async function getKeys() {
    const response = await fetch('apikeys.json');
    const responseData = await response.json();

    return responseData;
}