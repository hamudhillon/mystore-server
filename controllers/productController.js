const path = require('path');
const fs = require('fs');
const Product = require('../models/product');



dbpro=path.join(__dirname,'../db/products.json')

const readData=()=>{
    const ProductData=fs.readFileSync(dbpro)
    return JSON.parse(ProductData);
    
}
const writeData=(data)=>{
    fs.writeFileSync(dbpro,JSON.stringify(data))
}



exports.allProducts=(req,res)=>{
    data=readData()
    res.json(data)
}

// exports.CreateProduct = (req, res) => {
//     const products = readData();
//     const { name, price, description, category, brand } = req.body;
  
//     const imagePath = req.file ? `/uploads/${req.file.filename}` : null;
  
//     const newProduct = {
//       id: Date.now(),
//       name,
//       price,
//       description,
//       category,
//       brand,
//       images: imagePath, // use the uploaded file path
//     };
  
//     products.push(newProduct);
//     writeData(products);
//     console.log(newProduct);
//     res.json(newProduct);
//   };

// Save data in MongoDB
exports.CreateProduct = (req, res) => {
    try{
        const product=new Product({
            ...req.body,
            id:id=Date.now(),
            images:req.file ? `/uploads/${req.file.filename}` : null
        });
        const saved=product.save()
        res.status(201).json(saved);
    }catch{
        res.status(400).json({error:err.message})
    }
  };



exports.DeleteProduct=(req,res)=>{
    products=readData()
    qid =req.params.id
    index=products.findIndex(p=>p.id==parseInt(qid))
    // index=products.findIndex()
    if(index ==-1) return res.status(404).json({message:'product not found'})

    const deleted =products.splice(index,1)
    writeData(products)

    res.status(200).json({message:'Product is deleted','Product':deleted[0]})

}

