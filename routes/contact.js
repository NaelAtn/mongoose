const express = require("express") ;
const Contact = require("../Model/Contact");

const router = express.Router();
/** 
* @desc : test routes
* @path : http://localhost:7777/api/contact/test
* @method : GET 
* @data no data

*/

router.get('/test', (req ,res) =>{
    res.send('hello')
})

/** 
* @desc : add contact
* @path : http://localhost:7777/api/contact/add
* @method : POST 
* @data : req.body

*/



router.post( '/add' , async (req,res) => {
    try {
        const {name , email,phone} = req.body;
        const newContact = new Contact ({name , email , phone})
        await newContact.save()
        res.status(200).send({msg : 'contact added', newContact})
        
    } catch (error) {
        res.status(400).send({msg : 'contact not added', error})   
    }

}
)



/** 
* @desc : get all contact
* @path : http://localhost:7777/api/contact/all
* @method : GET
* @data : no data

*/

router.get('/all' , async (req,res) => {
    try {
        const listcontacts = await Contact.find();
        res.status(200).send({msg : 'Contact list',listcontacts})
        
    } catch (error) {
        res.status(400).send({msg : 'cannot get all contacts', error})
        
    }
}
 )


 /** 
* @desc : get one contact
* @path : http://localhost:7777/api/contact/:id
* @method : GET
* @data : no data

*/

router.get('/:_id', async (req,res) => {
    try {
        const contactToGet = await Contact.findOne({_id: req.params.id})
        res.status(200).send({msg : 'Contact getted',contactToGet})
        
    } catch (error) {
        res.status(400).send({msg : 'cannot get this contact', error})
    }

} )

 /** 
* @desc : delete contact
* @path : http://localhost:7777/api/contact/:id
* @method : DELETE
* @data : req.params._id

*/

router.delete('/:_id' , async (req , res)=>{
    try {
        const{_id}= req.params;
        await Contact.findOneAndDelete({_id})
        res.status(200).send({msg : "Contact deleted"})
    } catch (error) {
        res.status(400).send({msg : "cannot delete this contact", error})
        
    }
}
)

/** 
* @desc : edit contact
* @path : http://localhost:7777/api/contact/:id
* @method : PUT
* @data : req.params._id nd req.body

*/

router.put('/:_id' , async (req , res)=>{
    try {
        const{_id}= req.params;
        const result = await Contact.updateOne({_id}, {$set:{...req.body}})
        res.status(200).send({msg : "Contact edited"})
    } catch (error) {
        res.status(400).send({msg : 'cannot edit this contact', error})
        
    }
}
)










module.exports = router;