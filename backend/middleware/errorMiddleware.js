const notFound = (req,res,next) => {

    const error = new Error(`Not Found${req.originalUrl}`) 
    res.status(404)
    next(error)
    
}


const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    //if equal 200 then 500 error of server
    
    res.status(statusCode)

    res.json({ 
        message: err.message, 
      
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
        //display the error message and the stack trace only when in mode development not production 
   
    })
}

export {notFound, errorHandler}