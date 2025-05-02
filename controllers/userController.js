const path = require('path');
const fs = require('fs');

db=path.join(__dirname,'../db/users.json')

const readData=()=>{
    const data=fs.readFileSync(db)
    return JSON.parse(data);
    
}
const writeData=(data)=>{
    fs.writeFileSync(db,JSON.stringify(data))
}



exports.allUsers=(req,res)=>{
    data=readData()
    res.json(data)
}

exports.CreateUser=(req,res)=>{
    Users=readData()
    const {name,address,phone,email,profilePic,password}=req.body
    // console.log(req.body)
    const newUser={id:Date.now(),name:name,password:password,address:address,phone:phone,email:email,profilePic:profilePic,role:'user'}
    Users.push(newUser)
    console.log(newUser)
    writeData(Users)
    res.json(newUser)
}

exports.DeleteUser=(req,res)=>{
    Users=readData()
    qid =req.params.id
    index=Users.findIndex(p=>p.id==parseInt(qid))
    // index=Users.findIndex()
    if(index ==-1) return res.status(404).json({message:'User not found'})

    const deleted =Users.splice(index,1)
    writeData(Users)

    res.status(200).json({message:'User is deleted','User':deleted[0]})

}

exports.login=(req,res)=>{
    Users=readData()
    const {email,password}=req.body

    index=Users.findIndex(p=>p.email==email)
    // index=Users.findIndex()
    if(index ==-1) return res.status(404).json({message:'User not found'})
    
    if(Users[index].password!=password) return res.status(200).json({message:'User password wrong'})
    
    
    res.status(200).json({data:Users[index]})

}

