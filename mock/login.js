import { delay } from 'roadhog-api-doc';


export default {

  'POST /api/v1/login': (req, res) => {
    setTimeout(() => {
      res.send({
        code: 0,
        data: {
          token: "token"
        }
      });
    }, 1 * 1000)
  },

  'GET /api/v1/user': (req, res) => {
    setTimeout(() => {
      res.send({
        code: 0,
        data: {
          name: "admin"
        }
      });
    }, 1 * 1000)
  }

}

