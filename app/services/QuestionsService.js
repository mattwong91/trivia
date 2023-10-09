import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { Pop } from "../utils/Pop.js";

function _setNewActiveQuestion() {
  const questions = AppState.questions
  const randomIndex = Math.floor(Math.random() * questions.length)
  // @ts-ignore
  AppState.activeQuestion = questions[randomIndex]
}

class QuestionsService {
  constructor() {

  }

  async getQuestions(categoryId) {
    // @ts-ignore
    const response = await axios.get(`https://opentdb.com/api.php?amount=20&category=${categoryId}&type=boolean`)
    console.log('[SERVICE], getQuestions(), results:', response.data.results);
    const newQuestions = response.data.results.map(question => new Question(question))

    AppState.questions = newQuestions
    console.log('[SERVICE], getQuestions(), questions now in AppState:', AppState.questions);
    _setNewActiveQuestion()
  }

  checkAnswer(answer) {
    const question = AppState.activeQuestion
    // @ts-ignore
    if (question.correctAnswer == answer) {
      Pop.success('Correct!')
      _setNewActiveQuestion()
      return
    }
    Pop.error('Wrong answer!')
  }
}

export const questionsService = new QuestionsService()