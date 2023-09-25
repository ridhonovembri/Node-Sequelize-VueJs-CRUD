import http from "@/api/http";

class Update {
  users(id, data) {
    return http.put(`/user/update/${id}`, data);
  }
}

export default new Update();
