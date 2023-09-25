import http from "@/api/http";

class Post {
  users(data) {
    return http.post("/user/post", data);
  }
}

export default new Post();
