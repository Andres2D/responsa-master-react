import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { decodeHtml, scrambleArray } from '../helpers/helpers';

const initialQuestionsState = {
  questions: [],
  currentQuestion: 0
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState: initialQuestionsState,
  reducers: {
    populate(state, action) {
      const questions = action.payload;
      let questionsMaped = []; 
      questions.map(questionRes => {
        const baseAnswers = [
          decodeHtml(questionRes.incorrect_answers[0]),
          decodeHtml(questionRes.incorrect_answers[1]),
          decodeHtml(questionRes.incorrect_answers[2]),
          decodeHtml(questionRes.correct_answer)
        ]
        const questionFormat = {
          id: uuidv4(),
          category: questionRes.category,
          difficulty: questionRes.difficulty,
          correct_answer: questionRes.correct_answer,
          answers: scrambleArray(baseAnswers),
          question: decodeHtml(questionRes.question),
          answerSelected: null
        };
        return questionsMaped.push(questionFormat);
      });
      state.questions = questionsMaped;
      state.currentQuestion = 0;
    },
    update(state, action) {
      const { questionId, answer } = action.payload;
      const questionIdx = state.questions.findIndex(q => q.id === questionId);

      const updatedQuestion = state.questions[questionIdx];

      updatedQuestion.answerSelected = answer;
      
      const updatedQuestionList = state.questions;
      updatedQuestionList[questionIdx] = updatedQuestion;
      state.questions = updatedQuestionList;
    },
    nextQuestion(state) {
      if(state.currentQuestion === (state.questions.length - 1)){
        state.currentQuestion = null;
        return;
      }

      state.currentQuestion++;
    },
    reset(state) {
      state.questions = [];
    }
  }
});

export const questionActions = questionsSlice.actions;

export default questionsSlice.reducer;
