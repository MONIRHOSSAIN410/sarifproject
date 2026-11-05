import Category from '../models/Category.js';import slugify from 'slugify';
export async function listCategories(req,res){res.json(await Category.find({}).sort({name:1}));}
export async function createCategory(req,res){const {name,description,image}=req.body;if(!name)return res.status(400).json({message:'Category name is required'});const item=await Category.create({name,slug:slugify(name,{lower:true,strict:true}),description,image});res.status(201).json(item);}
export async function updateCategory(req,res){const data={...req.body};if(data.name)data.slug=slugify(data.name,{lower:true,strict:true});const item=await Category.findByIdAndUpdate(req.params.id,data,{new:true,runValidators:true});if(!item)return res.status(404).json({message:'Category not found'});res.json(item);}
export async function deleteCategory(req,res){const item=await Category.findByIdAndDelete(req.params.id);if(!item)return res.status(404).json({message:'Category not found'});res.json({message:'Category deleted'});}
