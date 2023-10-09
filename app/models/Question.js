import { generateId } from "../utils/GenerateId.js"

export class Question {
  constructor(data) {
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers || []
  }

  get questionTemplate() {
    return `
    <section class="row">
      <div class="col-12 text-center p-5">
        <div class="rounded bg-dark text-light py-5 border border-light p-4">
          ${this.question}
        </div>
      </div>
    </section>

    <section class="row text-center">
      <div class="col-6">
        <button class="btn btn-dark rounded text-center" onclick="app.QuestionsController.checkAnswer('True')">
          TRUE
        </button>
      </div>
      <div class="col-6">
        <button class="btn btn-dark rounded text-center" onclick="app.QuestionsController.checkAnswer('False')">
          FALSE
        </button>
      </div>
    </section>
    `
  }
}