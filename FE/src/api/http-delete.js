import http from "@/api/http";

class Delete {
  users(id) {
    // console.log('id==>', id)
    return http.delete(`/user/delete/${id}`);
  }

  roles(id) {
    // console.log('id==>', id)
    return http.delete(`/role/delete/${id}`);
  }
}

export default new Delete();
