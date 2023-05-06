const { findUserByEmail } = require("../users/users.controllers");
const { comparePassword } = require("../utils/crypto");

const checkUserCredentials = async (email, password) => {
  // User | false
  const user = await findUserByEmail(email);
  const validatePassword = comparePassword(password, user.password);
  if (!validatePassword) {
    return false;
  }
  return user;
};

module.exports = checkUserCredentials;

// const createConversation = async ( conversationObj, userOwnerId, userGuestId ) => {
//   //? Validacion por si el usuario invitado existe
//   const userGuest = await Users.findOne({
//     where: {
//       id: userGuestId,
//     },
//   });
//   if (!userGuest) {
//     return false;
//   }
//   const newConversation = await Conversations.create({
//     id: uuid.v4(),
//     name: conversationObj.name,
//     profileImage: conversationObj.profileImage,
//     isGroup: conversationObj.isGroup,
//   });
//   //? Owner participant
//   await Participants.create({
//     id: uuid.v4(),
//     userId: userOwnerId,
//     conversationId: newConversation.id,
//     isAdmin: true,
//   });
//   //? Guest participant
//   await Participants.create({
//     id: uuid.v4(),
//     userId: userGuestId,
//     conversationId: newConversation.id,
//     isAdmin: false,
//   });
//   return newConversation;
// };


// //? Ejemplo de createConversation 
// const createConversation  = async (obj) => {    
//   //* title, userId, imgUrl, participantId     
//   const data = await Conversation.create({        
//     userId : obj.userId,        
//     title,        
//     imgUrl    
//   })    
//   await Participants.create({        
//     conversationId: data.id,        
//     userId: obj.UserId    
//   })    
//   await Participants.create({        
//     conversationId: data.id,        
//     userId: obj.participantId    
//   })    
//   return data
// }