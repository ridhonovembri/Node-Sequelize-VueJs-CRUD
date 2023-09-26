import http from "@/api/http";

class Update {
  users(id, data) {
    return http.put(`/user/update/${id}`, data);
  }

  roles(id, data) {
    // console.log('id', id)
    // console.log('data', data)
    return http.put(`/role/update/${id}`, data);
  }
}

export default new Update();
