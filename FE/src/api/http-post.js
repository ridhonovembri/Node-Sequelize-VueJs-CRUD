import http from "@/api/http";

class Post {
  users(data) {
    return http.post("/user/post", data);
  }

  roles(data) {
    // console.log('data', data)
    return http.post("/role/post", data);
  }

}

export default new Post();
