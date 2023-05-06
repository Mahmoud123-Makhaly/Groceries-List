const ApiReq = async(url = "" , optionsObject = null , ErrorMsg = null)=>{
try{
const api  = await fetch(url , optionsObject);
if(!api.ok) throw Error ("Please Reload App")
}
catch(err){
ErrorMsg = err
}
finally{
return ErrorMsg;
}
}
export default ApiReq;