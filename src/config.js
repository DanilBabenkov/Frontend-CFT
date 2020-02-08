const DEFAULT_EMPTY_USER = { 
  "id": -1,
  "firstName": "",
  "lastName": "",
  "faculty" : "",
  "course" : "",
  "degree": "",
  "paronym": "",
  "about": "",
  "isTeacher": false,
  "subjects": [],
  "price": 0,
  "avgMark": 0,
  "photo" : null
};

const DEFAULT_BACKEND_HOST = 'http://repetito.herokuapp.com';

export {
  DEFAULT_BACKEND_HOST,
  DEFAULT_EMPTY_USER
};