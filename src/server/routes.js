const { hello, postSubMessage } =  require('./handler');

const routes = [
  {
    path:'/',
    method:'GET',
    handler:hello
  },
  {
    path:'/',
    method:'POST',
    handler:postSubMessage
  }
];

module.exports = { routes };