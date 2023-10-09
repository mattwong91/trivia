import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawQuestion() {
  // @ts-ignore
  setHTML('hero-content', AppState.activeQuestion.questionTemplate)
}

function _drawHome() {
  const content = `
  <section class="row justify-content-center align-items-center py-5">
    <div class="col-12 text-center my-3">
      <h1>Choose a category</h1>
    </div>
    <div class="col-6 text-center my-3">
      <button onclick="app.QuestionsController.getQuestions('15')" class="btn btn-dark rounded">VIDEO GAMES</button>
    </div>
    <div class="col-6 text-center">
      <button onclick="app.QuestionsController.getQuestions('31')" class="btn btn-dark rounded">ANIME & MANGA</button>
    </div>
    <div class="col-6 text-center my-3">
      <button onclick="app.QuestionsController.getQuestions('12')" class="btn btn-dark rounded">MUSIC</button>
    </div>
    <div class="col-6 text-center">
      <button onclick="app.QuestionsController.getQuestions('27')" class="btn btn-dark rounded">ANIMALS</button>
    </div>
  </section>
  `
  setHTML('hero-content', content)
}
export class QuestionsController {
  constructor() {
    _drawHome()
    AppState.on('activeQuestion', _drawQuestion)
  }

  async getQuestions(categoryId) {
    try {
      await questionsService.getQuestions(categoryId)
      // Pop.success('obtained question data')
    } catch (error) {
      console.error(error);
    }
  }

  checkAnswer(answer) {
    questionsService.checkAnswer(answer)
  }

  goHome() {
    _drawHome()
  }
}