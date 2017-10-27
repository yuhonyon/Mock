import ContentType from './ContentType';

const responseTypse = [
  new ContentType('JSON', 'application/json'),
  new ContentType('Html', 'text/html'),
  new ContentType('Text', 'text/plain'),
  new ContentType('XML', 'application/xml'),
  new ContentType('JavaScript', 'javascript'),
  new ContentType('Mockjs', 'text/plain'),
  new ContentType('none', '')
];

export default responseTypse;
