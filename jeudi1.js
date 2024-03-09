import { counter } from "./jeudi.js";
import { Card } from "./Card.js";
import { questions } from "./data.js";

for (let index = 0; index < 10; index++) {
  counter();
}

questions.map((question) => Card(question));
