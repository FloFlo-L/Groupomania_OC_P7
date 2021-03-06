const passwordValidator = require('password-validator')

const passwordSchema = new passwordValidator();

passwordSchema
.is().min(8)                    // Minimum length 8                                    
.is().max(64)                   // Maximum length 64                                 
.has().uppercase()              // Must have uppercase letters           
.has().lowercase()              // Must have lowercase letters               
.has().digits()                 // Must have digtis             
.has().not().spaces()           // Should not have spaces         

module.exports = passwordSchema;