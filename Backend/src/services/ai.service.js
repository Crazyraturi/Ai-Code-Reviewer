const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
    
    model: "gemini-2.0-flash" ,
   
    syatemInstruction:`
    you are an code reviewer who have an experties in development, you look the code and  find the problems and then suggest the solution to the developer.
    
    ypu always try to  find the best solution for the developer and also try to make code more effficient and clean  and explain the things such a way that a biggner can also understand with example `


});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);

  return result.response.text();
}

module.exports = generateContent;
