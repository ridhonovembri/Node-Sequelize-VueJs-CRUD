import http from '@/api/http'

class Get {
  comments() {
    // console.log('id==>' + id)
    return http.get("/comments");
  }

  users(){
    return http.get('/users')
  }

  userById(id) {
    // console.log(id)
    return http.get(`/userById/${ id }`);
  }
}

export default new Get();

