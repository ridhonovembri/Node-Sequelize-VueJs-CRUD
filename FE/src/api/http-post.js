import http from "@/api/http";

class Post {
  users(data) {
    return http.post("/user/post", data);
  }

  roles(data) {
    // console.log('data', data)
    return http.post("/role/post", data);
  }

  employees(data) {
    // console.log('data', data)
    return http.post("/employee/post", data);
  }

}

export default new Post();
