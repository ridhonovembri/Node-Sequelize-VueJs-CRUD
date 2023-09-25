import http from '@/api/http'

class Get {
  agreements() {
    // console.log('id==>' + id)
    // console.log('retrieve data')
    return http.get('/agreements');
  }

  // agreements(page, size){
  //   return http.get('/')
  // }

//   users(){
//     return http.get('/users')
//   }

//   commentById(id) {
//     console.log(id)
//     return http.get("/comments/3");
//   }

//   create(data) {
//     return http.post("/tutorials", data);
//   }

//   update(id, data) {
//     return http.put(`/tutorials/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new Get();

