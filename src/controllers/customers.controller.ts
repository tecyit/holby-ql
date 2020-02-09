import express from 'express';
import connection from '#root/db/connection';

class authController {
  static getAllCustomers(_req: express.Request, res: express.Response) {
    connection.query('SELECT * FROM tbl_users_individuals', (err, rows) => {
      if(err){
        return res.status(400).json({
          msg: "err",
          res: err
        })
      }
      return res.json({
        msg: "Success",
        res: JSON.parse(JSON.stringify(rows))
      })    
    });
  }
}

export default authController;