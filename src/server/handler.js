async function postSubMessage(request, h){
  const message = await decodeBase64Json(request.payload.message.data);
  console.log(message);
  try {
    const response = h.response({
      status:'success',
      message:'Pub/Sub message delivered'
    }).code(204);
    return response;
  } catch (e){
    console.log(e.message);
    const response = h.response({
      status:'fail',
      message:'Pub/Sub message not delivered'
    }).code(500);
    return response;
  }
}

function decodeBase64Json(data) {
  return JSON.parse(Buffer.from(data, 'base64').toString());
}

module.exports = { hello, postSubMessage };