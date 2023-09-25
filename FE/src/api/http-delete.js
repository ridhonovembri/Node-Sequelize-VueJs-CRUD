import http from "@/api/http";

class Delete {
  users(id) {
    // console.log('id==>', id)
    return http.delete(`/user/delete/${id}`);
  }
}

export default new Delete();
