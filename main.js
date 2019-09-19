let faqs = [
	{
		question: 'Do you want to build a snowman?',
		answer: 'No',
		open: false
	},
	{
		question: 'Have you liked, subbed and shared?',
		answer: 'No',
		open: false
	},
	{
		question: 'Marvel vs DC?',
		answer: 'Dragon Ball',
		open: false
	}
]

const faqs_element = document.querySelector('.faqs');

faqs.map(function (faq) {
	const faq_element = document.createElement('div');
	faq_element.classList.add('faq');
	if (faq.open) {
		faq_element.classList.add('open');
	}

	faq_element.addEventListener('click', function (e) {
		faq.open = true;
		this.classList.toggle('open');
	});

	const faq_question_element = document.createElement('div');
	faq_question_element.classList.add('question');
	faq_question_element.innerText = faq.question;

	faq_element.appendChild(faq_question_element);

	const faq_answer_element = document.createElement('div') ;
	faq_answer_element.classList.add('answer');
	faq_answer_element.innerText = faq.answer;

	faq_element.appendChild(faq_answer_element);

	faqs_element.appendChild(faq_element);
});