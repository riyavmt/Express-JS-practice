exports.get404Page = (req,res)=>{
    res.status(404).send('<h1>Error 404 not found</h1>');
};