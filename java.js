const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#d2')
const div3 = document.querySelector('#d3')
const div4 = document.querySelector('#d4')
const div5 = document.querySelector('#d5')
const div6 = document.querySelector('#d6')
const div7 = document.querySelector('#d7')
const div8 = document.querySelector('#d8')
const div9 = document.querySelector('#d9')
const div10 = document.querySelector('#d10')
const modal = document.querySelector('#modal')
const tModal = document.querySelector('.tModal')
const cModal = document.querySelector('.cModal')
const tModal2 = document.querySelector('.tModal2')
const cModal2 = document.querySelector('.cModal2')
const b = document.querySelector('#botao')
const a1 = document.querySelector('#a1');
const a2 = document.querySelector('#a2');
const a3 = document.querySelector('#a3');
const a4 = document.querySelector('#a4');
const a5 = document.querySelector('#a5');
const a6 = document.querySelector('#a6');
const a7 = document.querySelector('#a7');
const a8 = document.querySelector('#a8');
const a9 = document.querySelector('#a9');
const a10 = document.querySelector('#a10');
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')
const p4 = document.querySelector('#p4')
const audiobut1 = document.querySelector('#audiobut1')
const audiobut2 = document.querySelector('#audiobut2')
const audiobut3 = document.querySelector('#audiobut3')
const audiobut4 = document.querySelector('#audiobut4')
const audiobut5 = document.querySelector('#audiobut5')
const audiobut6 = document.querySelector('#audiobut6')
const audiobut7 = document.querySelector('#audiobut7')
const audiobut8 = document.querySelector('#audiobut8')
const audiobut9 = document.querySelector('#audiobut9')
const audiobut10 = document.querySelector('#audiobut10')
const overlay = document.querySelector('.overlay')

b.addEventListener('click', function () {
    modal.style.display = 'none'
    overlay.style.display = "none"
    audiobut1.style.display = 'none'
    audiobut2.style.display = 'none'
    audiobut3.style.display = 'none'
    audiobut4.style.display = 'none'
    audiobut5.style.display = 'none'
    audiobut6.style.display = 'none'
    audiobut7.style.display = 'none'
    audiobut8.style.display = 'none'
    audiobut9.style.display = 'none'
    audiobut10.style.display = 'none'


})

div1.addEventListener('click', (x) => {
    x.preventDefault();
    audiobut1.style.display = 'flex'
    modal.style.display = 'flex'
    overlay.style.display = "flex"
    tModal.textContent = 'Irregardless'
    cModal.textContent = 'Irregardless of the challenges ahead, we will persist and achieve our goals.'
    tModal2.textContent = 'Independente'
    cModal2.textContent = 'Independentemente dos desafios que venham, persistiremos e atingiremos os nossos objetivos.'
    p1.textContent = 'Have you ever noticed how people argue about saying "irregardless" instead of just "regardless"?'
    p2.textContent = 'Oh, totally! Its kinda weird. Some say its not even a real word.'
    p3.textContent = 'But dictionaries list it, even if they call it informal. Language is always evolving.'
    p4.textContent = 'True, but some get really annoyed hearing "irregardless" when they think its incorrect.'

})
div2.addEventListener('click', (x) => {
    x.preventDefault();
    audiobut2.style.display = 'flex'
    overlay.style.display = "flex"
    modal.style.display = 'flex'
    tModal.textContent = 'Branch'
    cModal.textContent = 'Like a sturdy branch reaching for the sky, let your aspirations grow and flourish.'
    tModal2.textContent = 'Ramo'
    cModal2.textContent = 'Como um ramo robusto que alcança o céu, deixe as suas aspirações crescerem e florescerem'
    p1.textContent = 'Do you prefer branching out for new features or working directly on the main branch?'
    p2.textContent = 'I think creating a separate branch for new features is a cleaner approach. It keeps the main branch stable, and its easier to track changes.'
    p3.textContent = ' Some argue that branching adds complexity. Whats your take on that?'
    p4.textContent = 'While theres some complexity, I believe the benefits outweigh it. Isolating changes in a branch makes it easier to manage and merge when everythings tested.'
})
div3.addEventListener('click', (x) => {
    x.preventDefault();
    audiobut3.style.display = 'flex'
    modal.style.display = 'flex'
    overlay.style.display = "flex"
    tModal.textContent = 'Nonplussed'
    cModal.textContent = 'Despite the unexpected turn of events, she remained nonplussed and calmly assessed the situation.'
    tModal2.textContent = 'Perplexo'
    cModal2.textContent = 'Apesar da reviravolta inesperada dos acontecimentos, manteve-se tranquila e avaliou calmamente a situação'
    p1.textContent = 'Have you ever noticed how people use "nonplussed" in different ways?'
    p2.textContent = 'Yeah, its interesting. Some think it means unfazed, while others believe it means surprised or confused.'
    p3.textContent = 'Ive heard that too. Its kind of nonplussing how the meaning has shifted over time.'
    p4.textContent = 'Exactly! The varied interpretations can leave you feeling a bit nonplussed about which definition is correct.'

})
div4.addEventListener('click', (x) => {
    x.preventDefault();
    audiobut4.style.display = 'flex'
    overlay.style.display = "flex"
    modal.style.display = 'flex'
    tModal.textContent = 'Disinterested'
    cModal.textContent = 'Remaining disinterested in the gossip, he focused on his work with unwavering dedication.'
    tModal2.textContent = 'Desinteresse'
    cModal2.textContent = 'Desinteressado dos mexericos, concentra-se no seu trabalho com uma dedicação inabalável.'
    p1.textContent = 'Have you ever come across people using "disinterested" to mean uninterested?'
    p2.textContent = 'Oh, definitely. Its a common mistake, but technically, "disinterested" means impartial or unbiased.'
    p3.textContent = 'Its interesting how the misuse of the word has become so widespread. People seem almost disinterested in the correct definition.'
    p4.textContent = 'Yeah, the confusion can be disheartening, especially for those who appreciate precision in language.'
})
div5.addEventListener('click', (x) => {
    x.preventDefault();
    audiobut5.style.display = 'flex'
    overlay.style.display = "flex"
    modal.style.display = 'flex'
    tModal.textContent = 'Enormity'
    cModal.textContent = 'While standing at the edge of the canyon, I was overwhelmed by the enormity of the natural beauty stretching before me.'
    tModal2.textContent = 'Enormidade'
    cModal2.textContent = 'Enquanto estava à beira do desfiladeiro, fiquei impressionado com a enormidade da beleza natural que se estendia diante de mim.'
    p1.textContent = 'Have you ever noticed how some people use "enormity" to describe something big, when it actually refers to something morally outrageous or heinous?'
    p2.textContent = 'Yeah, its a common misconception. "Enormity" is often misused to convey size or scale, but its real meaning is more about the extreme gravity of a situation.'
    p3.textContent = 'The enormity of the mistake is evident when you realize that the word is meant to emphasize the seriousness or moral weight, not just the sheer size.'
    p4.textContent = 'Absolutely. Its crucial to use "enormity" in contexts where moral or ethical implications are at play, rather than just describing something large.'
})
div6.addEventListener('click', (x) => {
    x.preventDefault();
    audiobut6.style.display = 'flex'
    overlay.style.display = "flex"
    modal.style.display = 'flex'
    tModal.textContent = 'Unabashed'
    cModal.textContent = 'Even in the face of criticism, she remained unabashed, expressing her opinions with confidence and authenticity.'
    tModal2.textContent = 'Sem Pudor'
    cModal2.textContent = 'Mesmo perante as críticas, manteve-se sem pudor, expressando as suas opiniões com confiança e autenticidade.'
    p1.textContent = 'Have you ever seen someone deliver a speech and thought, "Wow, they spoke with unabashed confidence"?'
    p2.textContent = 'Oh, definitely. Its impressive when someone expresses their opinions or ideas without any hesitation or embarrassment.'
    p3.textContent = 'That unabashed approach can be quite inspiring. Its like theyre unapologetically embracing their beliefs.'
    p4.textContent = 'Exactly! Being unabashed in communication often leaves a lasting impact, making the speaker come across as genuine and self-assured.'
})
div7.addEventListener('click', (x) => {
    x.preventDefault();
    audiobut7.style.display = 'flex'
    overlay.style.display = "flex"
    modal.style.display = 'flex'
    tModal.textContent = 'Schedule'
    cModal.textContent = 'After carefully coordinating our schedules, we finally found a time that works for everyone to meet and discuss the project.'
    tModal2.textContent = 'Horário'
    cModal2.textContent = 'Depois de coordenarmos cuidadosamente os nossos horários, finalmente encontrámos uma hora que funciona para todos se encontrarem e discutirem o projeto.'
    p1.textContent = 'How do you manage to stay on top of your tasks and deadlines?'
    p2.textContent = 'I have a pretty strict schedule that I follow. It helps me prioritize and organize my work efficiently.'
    p3.textContent = 'Thats impressive. I often find it challenging to stick to a schedule, especially when unexpected things come up.'
    p4.textContent = 'Yeah, flexibility is important too. I try to build in some buffer time in my schedule for unexpected tasks or changes.'
})
div8.addEventListener('click', (x) => {
    x.preventDefault();
    audiobut8.style.display = 'flex'
    overlay.style.display = "flex"
    modal.style.display = 'flex'
    tModal.textContent = 'Sieve'
    cModal.textContent = 'Sorting through the data felt like using a sieve, sifting out the relevant information from the vast sea of numbers and statistics.'
    tModal2.textContent = 'Peneira'
    cModal2.textContent = 'A seleção dos dados foi como usar uma peneira, peneirando a informação relevante do vasto mar de números e estatísticas.'
    p1.textContent = 'How do you separate the important emails from the irrelevant ones in your inbox?'
    p2.textContent = 'I use filters to sieve through my emails, categorizing them based on priority and relevance.'
    p3.textContent = 'That sounds efficient. I usually find myself drowning in a sea of emails, struggling to sift through them.'
    p4.textContent = 'Creating a system to sieve out the essential information can save a lot of time. Its like using a digital sieve to sift through the clutter.'

})
div9.addEventListener('click', (x) => {
    x.preventDefault();
    audiobut9.style.display = 'flex'
    overlay.style.display = "flex"
    modal.style.display = 'flex'
    tModal.textContent = 'Through'
    cModal.textContent = 'We persevered through the challenges, emerging stronger on the other side with valuable lessons and experiences.'
    tModal2.textContent = 'Através'
    cModal2.textContent = 'Perseverámos através dos desafios, saindo mais fortes do outro lado com lições e experiências valiosas.'
    p1.textContent = 'How did you manage to navigate through that complex coding problem?'
    p2.textContent = ' It took some time, but I went through the documentation thoroughly and stepped through the code line by line.'
    p3.textContent = ' Impressive. Sometimes, going through the details is the key to understanding complex issues.'
    p4.textContent = 'Absolutely. Its like going through a maze; you need to follow each path to find the solution.'
})
div10.addEventListener('click', (x) => {
    x.preventDefault();

    audiobut10.style.display = 'flex'
    overlay.style.display = "flex"
    modal.style.display = 'flex'
    tModal.textContent = 'Wednesday'
    cModal.textContent = 'On wednesday, lets gather for a productive meeting to discuss the upcoming project milestone'
    tModal2.textContent = 'Quarta-feira'
    cModal2.textContent = 'Na quarta-feira, vamos reunir-nos para uma reunião produtiva para discutir a próxima etapa do projeto.'
    p1.textContent = 'Do you have any plans for this week?'
    p2.textContent = 'Not really, just the usual work routine. Why?'
    p3.textContent = 'Well, I was thinking we could grab lunch together on Wednesday.'
    p4.textContent = 'Sounds good. Looking forward to it!'
})

div2.addEventListener('click', (x) => {
    x.preventDefault();
    modal.style.display = 'flex'
})
div3.addEventListener('click', (x) => {
    x.preventDefault();
    modal.style.display = 'flex'
})
div4.addEventListener('click', (x) => {
    x.preventDefault();
    modal.style.display = 'flex'
})
div5.addEventListener('click', (x) => {
    x.preventDefault();
    modal.style.display = 'flex'
})
div6.addEventListener('click', (x) => {
    x.preventDefault();
    modal.style.display = 'flex'
})
div7.addEventListener('click', (x) => {
    x.preventDefault();
    modal.style.display = 'flex'
})
div8.addEventListener('click', (x) => {
    x.preventDefault();
    modal.style.display = 'flex'
})
div9.addEventListener('click', (x) => {
    x.preventDefault();
    modal.style.display = 'flex'
})
div10.addEventListener('click', (x) => {
    x.preventDefault();
    modal.style.display = 'flex'
})

audiobut1.addEventListener('click', function() {
    a1.play()
})
audiobut2.addEventListener('click', function() {
    a2.play()
})
audiobut3.addEventListener('click', function() {
    a3.play()
})
audiobut4.addEventListener('click', function() {
    a4.play()
})
audiobut5.addEventListener('click', function() {
    a5.play()
})
audiobut6.addEventListener('click', function() {
    a6.play()
})
audiobut7.addEventListener('click', function() {
    a7.play()
})
audiobut8.addEventListener('click', function() {
    a8.play()
})
audiobut9.addEventListener('click', function() {
    a9.play()
})
audiobut10.addEventListener('click', function() {
    a10.play()
})