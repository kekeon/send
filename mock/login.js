export default {

  'POST /api/v1/login' : (req,res)=>{
    setTimeout(()=>{
      res.send({
        code:0,
        data:{
          token:"token"
        }
      });
    },1 * 1000)
  }

}