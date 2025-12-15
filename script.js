function showLesson(topic) {
    let content = '';
    switch (topic) {
        case 'input':
            content = `
                <h2>Input Data in C++</h2>
                <p>Use cin to read input from the user.</p>
                <pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int num;
    cout &lt;&lt; "Enter a number: ";
    cin &gt;&gt; num;
    cout &lt;&lt; "You entered: " &lt;&lt; num &lt;&lt; endl;
    return 0;
}</code></pre>`;
            break;
        case 'operators':
            content = `
                <h2>Numeric Operators in C++</h2>
                <p>C++ supports +, -, *, /, % for numbers.</p>
                <pre><code>#include &lt;iostream&gt;
                using namespace std;

int main() {
    cout &lt;&lt; (17 % 5) &lt;&lt; endl; // 2
    return 0;
}</code></pre>`;
            break;
        case 'conditions':
            content = `
                <h2>Conditions in C++</h2>
                <p>Conditional statements allow your program to make decisions and execute different code based on conditions.</p>

                <h3>1. If Statement</h3>
                <pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int age = 18;
    if (age >= 18) {
        cout &lt;&lt; "You are an adult" &lt;&lt; endl;
    }
    return 0;
}</code></pre>

                <h3>2. If-Else Statement</h3>
                <pre><code>int score = 75;
if (score > 60) {
    cout &lt;&lt; "Pass" &lt;&lt; endl;
} else {
    cout &lt;&lt; "Fail" &lt;&lt; endl;
}</code></pre>

                <h3>3. If-Else If-Else Statement</h3>
                <pre><code>int grade = 85;
if (grade > 90) {
    cout &lt;&lt; "Grade: A" &lt;&lt; endl;
} else if (grade > 80) {
    cout &lt;&lt; "Grade: B" &lt;&lt; endl;
} else if (grade > 70) {
    cout &lt;&lt; "Grade: C" &lt;&lt; endl;
} else {
    cout &lt;&lt; "Grade: F" &lt;&lt; endl;
}</code></pre>

                <h3>4. Switch Statement</h3>
                <pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int day = 1; // 1 = Monday, 2 = Tuesday, ...
    switch (day) {
        case 1:
            cout &lt;&lt; "Start of the week" &lt;&lt; endl;
            break;
        case 5:
            cout &lt;&lt; "End of the week" &lt;&lt; endl;
            break;
        default:
            cout &lt;&lt; "Midweek" &lt;&lt; endl;
    }
    return 0;
}</code></pre>
                <p>Note: switch in C++ typically works with integers, chars, or enums, not strings.</p>
            `;
            break;
        case 'loops':
            content = `
                <h2>Loops in C++</h2>
                <p>C++ uses for, while, and do-while loops for repetition.</p>
                <pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    for (int i = 0; i &lt; 5; i++) {
        cout &lt;&lt; i &lt;&lt; endl;
    }
    return 0;
}</code></pre>`;
            break;
        case 'output':
            content = `
                <h2>Output Data in C++</h2>
                <p>Use cout to display output.</p>
                <pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Hello, C++!" &lt;&lt; endl;
    return 0;
}</code></pre>`;
            break;
    }

    const lessonDiv = document.getElementById('lesson-content');

    lessonDiv.classList.remove('fade-in');

    lessonDiv.innerHTML = content;

    void lessonDiv.offsetWidth;

    lessonDiv.classList.add('fade-in');
}

function showQuiz(quizType) {
    let quizContent = '';
    switch (quizType) {
        case 'input':
            quizContent = `
                <h2>Input/Output Quiz</h2>
                <form id="quiz-form">
                    <div class="question">
                        <p>Question 1: What header is used for input/output in C++?</p>
                        <input type="radio" name="q1" value="wrong"> &lt;stdio.h&gt;<br>
                        <input type="radio" name="q1" value="correct"> &lt;iostream&gt;<br>
                        <input type="radio" name="q1" value="wrong"> &lt;fstream&gt;<br>
                    </div>
                    <div class="question">
                        <p>Question 2: How to read input?</p>
                        <input type="radio" name="q2" value="correct"> cin &gt;&gt;<br>
                        <input type="radio" name="q2" value="wrong"> cout &lt;&lt;<br>
                        <input type="radio" name="q2" value="wrong"> printf<br>
                    </div>
                    <div class="question">
                        <p>Question 3: What does cout do?</p>
                        <input type="radio" name="q3" value="wrong"> Read input<br>
                        <input type="radio" name="q3" value="correct"> Display output<br>
                        <input type="radio" name="q3" value="wrong"> Scan input<br>
                    </div>
                    <button type="button" id="submit-quiz" onclick="calculateScore()">Submit</button>
                </form>
                <p id="score"></p>`;
            break;
        case 'operators':
            quizContent = `
                <h2>Numeric Operators Quiz</h2>
                <form id="quiz-form">
                    <div class="question">
                        <p>Question 1: What is the result of 17 % 5 in C++?</p>
                        <input type="radio" name="q1" value="wrong"> 3<br>
                        <input type="radio" name="q1" value="correct"> 2<br>
                        <input type="radio" name="q1" value="wrong"> 3.4<br>
                        <input type="radio" name="q1" value="wrong"> 5<br>
                    </div>
                    <div class="question">
                        <p>Question 2: What does the ++ operator do?</p>
                        <input type="radio" name="q2" value="wrong"> Multiplies by 2<br>
                        <input type="radio" name="q2" value="correct"> Increments by 1<br>
                        <input type="radio" name="q2" value="wrong"> Adds positive sign<br>
                        <input type="radio" name="q2" value="wrong"> Doubles the value<br>
                    </div>
                    <div class="question">
                        <p>Question 3: What is the result of integer division 7 / 2 in C++?</p>
                        <input type="radio" name="q3" value="wrong"> 3.5<br>
                        <input type="radio" name="q3" value="correct"> 3<br>
                        <input type="radio" name="q3" value="wrong"> 4<br>
                    </div>
                    <button type="button" id="submit-quiz" onclick="calculateScore()">Submit</button>
                </form>
                <p id="score"></p>`;
            break;
        case 'conditions':
            quizContent = `
                <h2>Conditions Quiz</h2>
                <form id="quiz-form">
                    <div class="question">
                        <p>Question 1: What keyword starts a condition?</p>
                        <input type="radio" name="q1" value="correct"> if<br>
                        <input type="radio" name="q1" value="wrong"> for<br>
                        <input type="radio" name="q1" value="wrong"> switch<br>
                    </div>
                    <div class="question">
                        <p>Question 2: Can switch handle strings in C++?</p>
                        <input type="radio" name="q2" value="wrong"> Yes<br>
                        <input type="radio" name="q2" value="correct"> No (typically integers or chars)<br>
                    </div>
                    <div class="question">
                        <p>Question 3: What follows else if?</p>
                        <input type="radio" name="q3" value="wrong"> Another if<br>
                        <input type="radio" name="q3" value="correct"> A condition<br>
                        <input type="radio" name="q3" value="wrong"> Default<br>
                    </div>
                    <button type="button" id="submit-quiz" onclick="calculateScore()">Submit</button>
                </form>
                <p id="score"></p>`;
            break;
        case 'loops':
            quizContent = `
                <h2>Loops Quiz</h2>
                <form id="quiz-form">
                    <div class="question">
                        <p>Question 1: What loop types does C++ have?</p>
                        <input type="radio" name="q1" value="correct"> for, while, do-while<br>
                        <input type="radio" name="q1" value="wrong"> only for<br>
                        <input type="radio" name="q1" value="wrong"> foreach<br>
                    </div>
                    <div class="question">
                        <p>Question 2: Does do-while execute at least once?</p>
                        <input type="radio" name="q2" value="correct"> Yes<br>
                        <input type="radio" name="q2" value="wrong"> No<br>
                    </div>
                    <div class="question">
                        <p>Question 3: What keyword breaks a loop?</p>
                        <input type="radio" name="q3" value="correct"> break<br>
                        <input type="radio" name="q3" value="wrong"> continue<br>
                        <input type="radio" name="q3" value="wrong"> return<br>
                    </div>
                    <button type="button" id="submit-quiz" onclick="calculateScore()">Submit</button>
                </form>
                <p id="score"></p>`;
            break;
    }
    document.getElementById('quiz-selection').style.display = 'none';
    document.getElementById('quiz-content').innerHTML = quizContent;
    document.getElementById('quiz-content').style.display = 'block';
}

function calculateScore() {
    const form = document.getElementById('quiz-form');
    const answers = form.querySelectorAll('input[type="radio"]:checked');
    let score = 0;
    answers.forEach(answer => {
        if (answer.value === 'correct') score++;
    });
    document.getElementById('score').innerText = `Your score: ${score} / 3`;
}

function applySavedTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
}

function updateThemeToggleText() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    const icon = isDark ? '☀️' : '🌙';
    const label = isDark ? 'Light' : 'Dark';
    btn.innerHTML = `<span class="icon">${icon}</span><span class="label">${label}</span>`;
    btn.classList.toggle('toggled', isDark);
}

function toggleTheme() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    updateThemeToggleText();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleScrollTopVisibility() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;
    if (window.scrollY > 200) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
}

function positionNavIndicator() {
    const indicator = document.querySelector('.nav-indicator');
    const activeLink = document.querySelector('nav a.active');
    if (!indicator || !activeLink) return;

    const linkRect = activeLink.getBoundingClientRect();
    const navRect = activeLink.closest('nav').getBoundingClientRect();
    const left = linkRect.left - navRect.left;

    indicator.style.width = `${linkRect.width}px`;
    indicator.style.transform = `translateX(${left}px)`;
}

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('page-loaded');

    applySavedTheme();
    updateThemeToggleText();

    handleScrollTopVisibility();
    window.addEventListener('scroll', handleScrollTopVisibility);

    positionNavIndicator();
    window.addEventListener('resize', positionNavIndicator);
});