import { OpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import * as dotenv from "dotenv";

dotenv.config();

const template = `Interpret the emotions conveyed by the following emoji(s): {emojis}. Consider each emoji individually and in combination with others in the series. Apply your knowledge of common emoji usage, cultural contexts, and emotional expressions to provide an insightful interpretation. When analyzing multiple emojis, consider the sequence and combination of the emojis to understand any nuanced emotional narrative or sentiment they may collectively express. Additionally, take into account the following considerations:

Emoji Specificity: Identify each emoji and any specific emotions or ideas it typically represents.
Cultural Context: Acknowledge if certain emojis have unique meanings in specific cultural contexts.
Emotional Range: Recognize if emojis express a range of emotions, from positive to negative or neutral.
Sequential Interpretation: When multiple emojis are used, analyze if the sequence changes the overall emotional message.
Complementary and Contrasting Emotions: Note if emojis complement or contrast each other emotionally.
Common Usage Patterns: Reflect on how these emojis are commonly used in digital communication to infer the underlying emotions.
Sarcasm or Irony Detection: Be aware of the possibility of sarcasm or irony in the use of certain emojis.
Emoji Evolution: Consider any recent changes in how these emojis are used or perceived in digital communication.

Based on these guidelines, in one very short sentence, provide a short interpretation of the emotions conveyed by the inputted emoji(s). `;

const promptTemplate = new PromptTemplate({
  template,
  inputVariables: ["emojis"],
});

const openAIModel = new OpenAI({
    temperature: 0.5,
  });
  
const chain = promptTemplate.pipe(openAIModel);

const response = await chain.invoke({
  emojis: "😂🤣",
});
  
  
  // Log result to the console
  console.log(response);
  
