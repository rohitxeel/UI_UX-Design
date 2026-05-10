const storageKeys = {
    completed: "ux_completed_concepts",
    bookmarks: "ux_bookmarks",
    recent: "ux_recent",
    quizStats: "ux_quiz_stats",
    theme: "ux_theme",
    coursera: "ux_coursera_progress",
};

const state = {
    content: `Full CSEB414 objective exam prep: concept clarity, micro-topics, keywords, and complete MCQ practice with ${GLOBAL_MCQ_BANK.length}+ curated questions.`,
    completed: JSON.parse(localStorage.getItem(storageKeys.completed) || "[]"),
    bookmarks: JSON.parse(localStorage.getItem(storageKeys.bookmarks) || "[]"),
    recent: JSON.parse(localStorage.getItem(storageKeys.recent) || "[]"),
    quizStats: JSON.parse(localStorage.getItem(storageKeys.quizStats) || "[]"),
    courseraProgress: JSON.parse(localStorage.getItem(storageKeys.coursera) || "{}"),
    mockSession: null,
    timerHandle: null,
};

function saveState() {
    localStorage.setItem(storageKeys.completed, JSON.stringify(state.completed));
    localStorage.setItem(storageKeys.bookmarks, JSON.stringify(state.bookmarks));
    localStorage.setItem(storageKeys.recent, JSON.stringify(state.recent));
    localStorage.setItem(storageKeys.quizStats, JSON.stringify(state.quizStats));
    localStorage.setItem(storageKeys.coursera, JSON.stringify(state.courseraProgress));
}

function initTheme() {
    const savedTheme = localStorage.getItem(storageKeys.theme) || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.getElementById("themeToggle").textContent = savedTheme === "dark" ? "Light Mode" : "Dark Mode";
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(storageKeys.theme, next);
    document.getElementById("themeToggle").textContent = next === "dark" ? "Light Mode" : "Dark Mode";
}

function buildHomeCards() {
    const container = document.getElementById("homeInsights");
    const weak = getWeakTopics(5);
    const recentAttempts = state.quizStats.slice(-5).reverse();

    const cards = [{
            title: "Course Overview",
            content: "Full CSEB414 objective exam prep: concept clarity, micro-topics, keywords, and complete MCQ practice.",
        },
        {
            title: "Course Outcomes",
            list: UX_COURSE_DATA.outcomes,
        },
        {
            title: "Unit-wise Roadmap",
            list: UX_COURSE_DATA.units.map((u) => u.name),
        },
        {
            title: "Most Important MCQ Topics",
            list: ["Design Thinking stages", "Accessibility principles", "Wireframe vs Mockup", "Bootstrap vs Tailwind", "Design systems"],
        },
        {
            title: "Frequently Asked Concepts",
            list: ["POUR principles", "User personas", "Journey maps", "Low vs High fidelity", "Responsive vs Mobile-first"],
        },
        {
            title: "Quick Revision Shortcuts",
            list: ["One-line unit notes", "Keywords by topic", "Expected MCQs", "Flashcard drill"],
        },
        {
            title: "Weak Topic Analysis",
            list: weak.length ? weak : ["No weak topics detected yet. Attempt quizzes to generate analysis."],
        },
        {
            title: "Recently Attempted Quizzes",
            list: recentAttempts.length ?
                recentAttempts.map((s) => `${s.context}: ${s.correct ? "Correct" : "Wrong"}`) : ["No attempts yet."],
        },
        {
            title: "Performance Dashboard",
            content: "Track completion, quiz count, accuracy percentage, bookmarks, and recommendation-driven study path.",
        },
        {
            title: "Exam Preparation Tracker",
            content: "Progress bar auto-updates from completed micro-concepts, Coursera milestones, and mock test attempts.",
        },
    ];

    container.innerHTML = cards
        .map((card) => {
                const body = card.list ?
                    `<ul class="clean-list">${card.list.map((item) => `<li>${item}</li>`).join("")}</ul>`
        : `<p class="text-sm text-muted">${card.content}</p>`;
      return `<article class="home-card reveal"><h4>${card.title}</h4>${body}</article>`;
    })
    .join("");
}

function renderCourseraTracker() {
  const tracker = document.getElementById("courseraTracker");
  tracker.innerHTML = UX_COURSE_DATA.courseraTracker
    .map((item, idx) => {
      const id = `wk-${idx + 1}`;
      const checked = !!state.courseraProgress[id];
      const percent = checked ? 100 : 0;
      return `
      <div class="border border-app rounded-xl p-3 bg-[var(--surface-2)]">
        <div class="flex items-center justify-between gap-2">
          <div>
            <p class="font-semibold">${item.title}</p>
            <p class="text-xs text-muted">${item.week}</p>
          </div>
          <button class="chip-btn" data-coursera-id="${id}">${checked ? "Completed" : "Mark Done"}</button>
        </div>
        <div class="progress-wrap mt-2"><div class="progress-bar" style="width:${percent}%"></div></div>
      </div>`;
    })
    .join("");

  tracker.querySelectorAll("[data-coursera-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-coursera-id");
      state.courseraProgress[key] = !state.courseraProgress[key];
      saveState();
      renderCourseraTracker();
      updateKPIs();
    });
  });
}

function renderUnitNav() {
  const nav = document.getElementById("unitNav");
  nav.innerHTML = UX_COURSE_DATA.units
    .map(
      (unit) => `
      <details>
        <summary class="unit-link">${unit.name}</summary>
        <div class="mt-2 space-y-2">
          ${unit.topics
            .map(
              (topic) => `
            <div class="ml-1">
              <p class="text-xs font-semibold text-muted mb-1">${topic.name}</p>
              ${topic.subtopics
                .map(
                  (sub) => `
                <div class="mb-2 ml-2">
                  <p class="text-[11px] uppercase tracking-wide text-muted">${sub.name}</p>
                  <div class="space-y-1 mt-1">
                    ${sub.microConcepts
                      .map(
                        (m) => `
                      <button class="sidebar-mini-btn" data-concept-id="${m.id}">${m.title}</button>
                    `
                      )
                      .join("")}
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          `
            )
            .join("")}
        </div>
      </details>
    `
    )
    .join("");

  nav.querySelectorAll("[data-concept-id]").forEach((btn) => {
    btn.addEventListener("click", () => selectConcept(btn.getAttribute("data-concept-id")));
  });
}

function selectConcept(conceptId) {
  const concept = ALL_CONCEPTS.find((c) => c.id === conceptId);
  if (!concept) return;

  state.selectedConceptId = conceptId;
  if (!state.recent.includes(conceptId)) {
    state.recent.unshift(conceptId);
  } else {
    state.recent = [conceptId, ...state.recent.filter((id) => id !== conceptId)];
  }
  state.recent = state.recent.slice(0, 8);

  const breadcrumb = document.getElementById("breadcrumb");
  breadcrumb.textContent = `HOME -> ${concept.unitName} -> ${concept.topicName} -> ${concept.subtopicName} -> ${concept.title} -> MCQ PRACTICE -> REVISION -> MOCK TEST`;

  renderConcept(concept);
  renderRecent();
  renderRecommendations();
  saveState();
}

function renderConcept(concept) {
  const container = document.getElementById("conceptContainer");
  const isBookmarked = state.bookmarks.includes(concept.id);
  const isCompleted = state.completed.includes(concept.id);

  container.innerHTML = `
    <article class="border border-app rounded-2xl p-4 bg-[var(--surface)]">
      <div class="concept-head">
        <div>
          <h3 class="font-heading text-xl">${concept.title}</h3>
          <p class="text-sm text-muted mt-1">${concept.unitName}</p>
          <div class="flex flex-wrap gap-2 mt-2">
            <span class="badge">Topic: ${concept.topicName}</span>
            <span class="badge">Subtopic: ${concept.subtopicName}</span>
          </div>
        </div>
        <div class="flex gap-2">
          <button id="bookmarkBtn" class="chip-btn">${isBookmarked ? "Bookmarked" : "Bookmark"}</button>
          <button id="completeBtn" class="primary-btn">${isCompleted ? "Completed" : "Mark Complete"}</button>
        </div>
      </div>

      <div class="info-grid">
        ${createInfoCard("Definition", concept.definition)}
        ${createInfoCard("Simple Explanation", concept.simpleExplanation)}
        ${createInfoCard("Exam-Oriented Explanation", concept.examExplanation)}
        ${createInfoCard("One-Line Revision", concept.oneLineRevision)}
        ${createInfoCard("Frequently Confused Concepts", concept.confusedConcepts)}
        ${createInfoCard("Common MCQ Traps", concept.mcqTraps)}
        ${createInfoCard("Real-World Example", concept.realWorldExample)}
        ${createInfoCard("Memory Trick / Mnemonic", concept.mnemonic)}
        ${createInfoCard("Repeated University Concept", concept.repeatedUniversityConcept)}
        ${createInfoCard("Previous-Year Pattern", concept.previousPatternQuestion)}
      </div>

      <div class="info-grid mt-3">
        ${createListCard("Important Keywords", concept.keywords)}
        ${createListCard("Important Terminology", concept.terminology)}
        ${createListCard("Important Points for Exam", concept.examPoints)}
        ${createListCard("Process Breakdown", concept.processSteps)}
        ${createListCard("Most Expected MCQs", concept.expectedMcqs)}
      </div>

      <div class="mcq-card" id="microMcq"></div>
    </article>
  `;

  document.getElementById("bookmarkBtn").addEventListener("click", () => toggleBookmark(concept.id));
  document.getElementById("completeBtn").addEventListener("click", () => toggleComplete(concept.id));
  renderMicroMcq(concept);
}

function createInfoCard(title, content) {
  return `
    <div class="info-card">
      <h5>${title}</h5>
      <p class="text-sm text-muted">${content}</p>
    </div>
  `;
}

function createListCard(title, list) {
  return `
    <div class="info-card">
      <h5>${title}</h5>
      <div class="chips">${list.map((item) => `<span>${item}</span>`).join("")}</div>
    </div>
  `;
}

function renderMicroMcq(concept) {
  const mcqBox = document.getElementById("microMcq");
  const q = concept.quiz;
  mcqBox.innerHTML = `
    <h4 class="font-heading text-lg">Practice Quiz - ${concept.title}</h4>
    <p class="text-sm mt-2">${q.question}</p>
    <div class="mcq-options">
      ${q.options
        .map(
          (opt, idx) => `<button class="option-btn" data-opt-idx="${idx}">${String.fromCharCode(65 + idx)}. ${opt}</button>`
        )
        .join("")}
    </div>
    <p id="microFeedback" class="text-sm mt-3 text-muted"></p>
  `;

  mcqBox.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-opt-idx"));
      const correct = idx === q.answerIndex;
      mcqBox.querySelectorAll(".option-btn").forEach((optionBtn) => {
        const oIdx = Number(optionBtn.getAttribute("data-opt-idx"));
        optionBtn.classList.remove("correct", "wrong");
        if (oIdx === q.answerIndex) optionBtn.classList.add("correct");
      });
      if (!correct) btn.classList.add("wrong");
      document.getElementById("microFeedback").textContent = `${correct ? "Correct" : "Incorrect"}. ${q.explanation}`;
      state.quizStats.push({
        conceptId: concept.id,
        context: concept.title,
        correct,
        ts: Date.now(),
        unitId: concept.unitId,
      });
      saveState();
      updateKPIs();
      renderRecommendations();
      buildHomeCards();
    });
  });
}

function toggleBookmark(conceptId) {
  if (state.bookmarks.includes(conceptId)) {
    state.bookmarks = state.bookmarks.filter((id) => id !== conceptId);
  } else {
    state.bookmarks.unshift(conceptId);
  }
  saveState();
  renderBookmarkList();
  updateKPIs();
  if (state.selectedConceptId) {
    selectConcept(state.selectedConceptId);
  }
}

function toggleComplete(conceptId) {
  if (state.completed.includes(conceptId)) {
    state.completed = state.completed.filter((id) => id !== conceptId);
  } else {
    state.completed.push(conceptId);
  }
  saveState();
  updateKPIs();
  buildHomeCards();
  if (state.selectedConceptId) {
    selectConcept(state.selectedConceptId);
  }
}

function renderRecent() {
  const list = document.getElementById("recentList");
  if (!state.recent.length) {
    list.innerHTML = '<li class="text-muted text-xs">No topics viewed yet.</li>';
    return;
  }
  list.innerHTML = state.recent
    .map((id) => {
      const c = ALL_CONCEPTS.find((x) => x.id === id);
      if (!c) return "";
      return `<li><button class="sidebar-mini-btn" data-recent-id="${id}">${c.title}</button></li>`;
    })
    .join("");

  list.querySelectorAll("[data-recent-id]").forEach((btn) => {
    btn.addEventListener("click", () => selectConcept(btn.getAttribute("data-recent-id")));
  });
}

function renderBookmarkList() {
  const list = document.getElementById("bookmarkList");
  if (!state.bookmarks.length) {
    list.innerHTML = '<li class="text-muted text-xs">No bookmarks yet.</li>';
    return;
  }
  list.innerHTML = state.bookmarks
    .map((id) => {
      const c = ALL_CONCEPTS.find((x) => x.id === id);
      if (!c) return "";
      return `<li><button class="sidebar-mini-btn" data-book-id="${id}">${c.title}</button></li>`;
    })
    .join("");

  list.querySelectorAll("[data-book-id]").forEach((btn) => {
    btn.addEventListener("click", () => selectConcept(btn.getAttribute("data-book-id")));
  });
}

function getWeakTopics(limit = 4) {
  const grouped = {};
  state.quizStats.forEach((stat) => {
    if (!grouped[stat.conceptId]) grouped[stat.conceptId] = { wrong: 0, total: 0 };
    grouped[stat.conceptId].total += 1;
    if (!stat.correct) grouped[stat.conceptId].wrong += 1;
  });

  const scores = Object.entries(grouped)
    .map(([conceptId, g]) => {
      const c = ALL_CONCEPTS.find((x) => x.id === conceptId);
      if (!c) return null;
      return { conceptId, title: c.title, ratio: g.wrong / g.total };
    })
    .filter(Boolean)
    .sort((a, b) => b.ratio - a.ratio)
    .slice(0, limit)
    .map((item) => item.title);

  return scores;
}

function renderRecommendations() {
  const list = document.getElementById("recommendList");
  const weak = getWeakTopics(3);
  const uncompleted = ALL_CONCEPTS.filter((c) => !state.completed.includes(c.id)).slice(0, 3).map((c) => c.title);
  const recs = [...weak, ...uncompleted].slice(0, 5);

  if (!recs.length) {
    list.innerHTML = '<li class="text-muted text-xs">Recommendations appear after activity.</li>';
    return;
  }

  list.innerHTML = recs
    .map((name) => {
      const c = ALL_CONCEPTS.find((x) => x.title === name);
      return c
        ? `<li><button class="sidebar-mini-btn" data-rec-id="${c.id}">${name}</button></li>`
        : `<li class="text-muted text-xs">${name}</li>`;
    })
    .join("");

  list.querySelectorAll("[data-rec-id]").forEach((btn) => {
    btn.addEventListener("click", () => selectConcept(btn.getAttribute("data-rec-id")));
  });
}

function updateKPIs() {
  const completion = Math.round((state.completed.length / ALL_CONCEPTS.length) * 100);
  const quizzes = state.quizStats.length;
  const correct = state.quizStats.filter((x) => x.correct).length;
  const accuracy = quizzes ? Math.round((correct / quizzes) * 100) : 0;
  const courseraCompleted = Object.values(state.courseraProgress).filter(Boolean).length;
  const combinedProgress = Math.round((completion * 0.75) + ((courseraCompleted / UX_COURSE_DATA.courseraTracker.length) * 25));

  document.getElementById("kpiCompletion").textContent = `${completion}%`;
  document.getElementById("kpiQuizzes").textContent = String(quizzes);
  document.getElementById("kpiAccuracy").textContent = `${accuracy}%`;
  document.getElementById("kpiBookmarks").textContent = String(state.bookmarks.length);
  document.getElementById("examProgress").style.width = `${combinedProgress}%`;
  document.getElementById("progressText").textContent = `Overall readiness ${combinedProgress}% | Completed ${state.completed.length}/${ALL_CONCEPTS.length} micro-concepts.`;
}

function setupSearch() {
  const input = document.getElementById("globalSearch");
  const resultBox = document.getElementById("searchResults");

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      resultBox.innerHTML = "";
      return;
    }
    const matches = ALL_CONCEPTS.filter((c) => {
      const searchSpace = [
        c.unitName,
        c.topicName,
        c.subtopicName,
        c.title,
        c.definition,
        ...c.keywords,
        ...c.terminology,
      ]
        .join(" ")
        .toLowerCase();
      return searchSpace.includes(q);
    }).slice(0, 15);

    resultBox.innerHTML = matches
      .map(
        (m) => `<div class="search-item" data-search-id="${m.id}"><strong>${m.title}</strong><p class="text-xs text-muted">${m.unitName}</p></div>`
      )
      .join("");

    resultBox.querySelectorAll("[data-search-id]").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("data-search-id");
        selectConcept(id);
        document.getElementById("searchBar").classList.add("hidden");
        showView("learnView");
      });
    });
  });
}

function renderRevision() {
  const container = document.getElementById("revisionContainer");
  container.innerHTML = UX_COURSE_DATA.units
    .map((unit) => {
      const concepts = ALL_CONCEPTS.filter((c) => c.unitId === unit.id);
      return `
      <article class="border border-app rounded-xl p-3 bg-[var(--surface-2)]">
        <h4 class="font-heading text-lg mb-2">${unit.name}</h4>
        <p class="text-sm text-muted mb-2">One-page summary sheet and one-line notes for rapid exam revision.</p>
        <div class="chips mb-2">${concepts
          .flatMap((c) => c.keywords.slice(0, 2))
          .slice(0, 14)
          .map((k) => `<span>${k}</span>`)
          .join("")}</div>
        <ul class="clean-list">
          ${concepts
            .slice(0, 6)
            .map((c) => `<li><strong>${c.title}:</strong> ${c.oneLineRevision}</li>`)
            .join("")}
        </ul>
      </article>`;
    })
    .join("");
}

function renderFlashcards() {
  const container = document.getElementById("flashcardContainer");
  container.innerHTML = UX_COURSE_DATA.flashcards
    .map(
      (card, idx) => `
      <article class="flash-card" data-flash-id="${idx}">
        <div class="flash-inner">
          <div class="flash-face">
            <p class="text-xs text-muted">Term</p>
            <h4 class="font-heading text-lg mt-1">${card.term}</h4>
            <p class="text-xs mt-6 text-muted">Click to flip</p>
          </div>
          <div class="flash-face flash-back">
            <p class="text-xs text-muted">Meaning</p>
            <p class="text-sm mt-2">${card.meaning}</p>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  container.querySelectorAll(".flash-card").forEach((card) => {
    card.addEventListener("click", () => card.classList.toggle("flipped"));
  });
}

function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      showView(btn.getAttribute("data-view"));
    });
  });
}

function showView(viewId) {
  document.querySelectorAll(".view-panel").forEach((panel) => panel.classList.remove("active"));
  document.getElementById(viewId).classList.add("active");

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-view") === viewId);
  });
}

function setupMockControls() {
  const unitFilter = document.getElementById("mockUnitFilter");
  const options = [`<option value="all">All Units</option>`]
    .concat(UX_COURSE_DATA.units.map((u) => `<option value="${u.id}">${u.name}</option>`))
    .join("");
  unitFilter.innerHTML = options;

  document.getElementById("startTestBtn").addEventListener("click", startMockTest);
}

function startMockTest() {
  const unit = document.getElementById("mockUnitFilter").value;
  const difficulty = document.getElementById("mockDifficultyFilter").value;
  const length = Number(document.getElementById("mockLength").value);

  let pool = GLOBAL_MCQ_BANK;
  if (unit !== "all") pool = pool.filter((q) => q.unitId === unit);
  if (difficulty !== "all") pool = pool.filter((q) => q.difficulty === difficulty);

  if (!pool.length) {
    document.getElementById("mockQuestionArea").innerHTML = '<p class="text-sm text-muted">No questions match this filter. Change selection.</p>';
    return;
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(length, pool.length));
  state.mockSession = {
    questions: shuffled,
    answers: {},
    current: 0,
    endsAt: Date.now() + 15 * 60 * 1000,
  };
  renderMockQuestion();
  startTimer();
  document.getElementById("mockResultArea").innerHTML = "";
}

function startTimer() {
  const timerBox = document.getElementById("timerBox");
  const timerText = document.getElementById("timerText");
  timerBox.classList.remove("hidden");
  if (state.timerHandle) clearInterval(state.timerHandle);

  state.timerHandle = setInterval(() => {
    if (!state.mockSession) {
      clearInterval(state.timerHandle);
      return;
    }
    const remaining = Math.max(0, state.mockSession.endsAt - Date.now());
    const mins = String(Math.floor(remaining / 60000)).padStart(2, "0");
    const secs = String(Math.floor((remaining % 60000) / 1000)).padStart(2, "0");
    timerText.textContent = `${mins}:${secs}`;
    if (remaining <= 0) {
      submitMockTest(true);
    }
  }, 250);
}

function renderMockQuestion() {
  const area = document.getElementById("mockQuestionArea");
  const s = state.mockSession;
  if (!s) return;
  const q = s.questions[s.current];
  const selected = s.answers[q.id];

  area.innerHTML = `
    <div class="border border-app rounded-xl p-4 bg-[var(--surface-2)]">
      <p class="text-xs text-muted">Question ${s.current + 1} of ${s.questions.length} | ${q.unitName} | ${q.difficulty.toUpperCase()}</p>
      <h4 class="font-semibold mt-2">${q.question}</h4>
      <div class="mcq-options mt-3">
        ${q.options
          .map(
            (opt, idx) => `
          <button class="option-btn ${selected === idx ? "correct" : ""}" data-mock-opt="${idx}">
            ${String.fromCharCode(65 + idx)}. ${opt}
          </button>`
          )
          .join("")}
      </div>
      <div class="flex gap-2 mt-4">
        <button class="chip-btn" id="prevMockBtn" ${s.current === 0 ? "disabled" : ""}>Previous</button>
        <button class="chip-btn" id="nextMockBtn">${s.current === s.questions.length - 1 ? "Review" : "Next"}</button>
        <button class="primary-btn ml-auto" id="submitMockBtn">Submit Test</button>
      </div>
    </div>
  `;

  area.querySelectorAll("[data-mock-opt]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-mock-opt"));
      s.answers[q.id] = idx;
      renderMockQuestion();
    });
  });

  document.getElementById("prevMockBtn").addEventListener("click", () => {
    s.current = Math.max(0, s.current - 1);
    renderMockQuestion();
  });

  document.getElementById("nextMockBtn").addEventListener("click", () => {
    s.current = Math.min(s.questions.length - 1, s.current + 1);
    renderMockQuestion();
  });

  document.getElementById("submitMockBtn").addEventListener("click", () => submitMockTest(false));
}

function submitMockTest(auto = false) {
  const s = state.mockSession;
  if (!s) return;

  if (state.timerHandle) clearInterval(state.timerHandle);
  document.getElementById("timerBox").classList.add("hidden");

  let score = 0;
  const unitStats = {};
  const wrongConcepts = [];

  s.questions.forEach((q) => {
    const selected = s.answers[q.id];
    const correct = selected === q.answerIndex;
    if (correct) score += 1;

    if (!unitStats[q.unitId]) {
      unitStats[q.unitId] = { unitName: q.unitName, total: 0, correct: 0 };
    }
    unitStats[q.unitId].total += 1;
    if (correct) unitStats[q.unitId].correct += 1;

    state.quizStats.push({
      context: `Mock: ${q.topic}`,
      conceptId: q.id.replace("g-", ""),
      unitId: q.unitId,
      correct,
      ts: Date.now(),
    });

    if (!correct) wrongConcepts.push(q.topic);
  });

  const percent = Math.round((score / s.questions.length) * 100);

  document.getElementById("mockResultArea").innerHTML = `
    <article class="border border-app rounded-xl p-4 bg-[var(--surface)]">
      <h4 class="font-heading text-xl">${auto ? "Time Up" : "Test Submitted"} - Score ${score}/${s.questions.length} (${percent}%)</h4>
      <p class="text-sm text-muted mt-1">Answer explanations and weak-topic detection generated below.</p>
      <div class="info-grid mt-3">
        ${Object.values(unitStats)
          .map((u) => `<div class="info-card"><h5>${u.unitName}</h5><p class="text-sm text-muted">${u.correct}/${u.total} correct</p></div>`)
          .join("")}
      </div>
      <div class="info-card mt-3">
        <h5>Weak Topics Detected</h5>
        <p class="text-sm text-muted">${wrongConcepts.length ? wrongConcepts.slice(0, 8).join(" | ") : "No major weak topics in this attempt."}</p>
      </div>
      <div class="mt-3">
        <h5 class="font-semibold mb-2">Answer Explanations</h5>
        <div class="space-y-2 max-h-[260px] overflow-auto pr-1">
          ${s.questions
            .map((q, idx) => {
              const selected = s.answers[q.id];
              const isCorrect = selected === q.answerIndex;
              return `<div class="text-sm border border-app rounded-lg p-2 bg-[var(--surface-2)]">
                <p><strong>Q${idx + 1}:</strong> ${q.question}</p>
                <p class="text-muted">Your answer: ${selected !== undefined ? q.options[selected] : "Not answered"}</p>
                <p class="${isCorrect ? "text-green-600" : "text-red-600"}">${isCorrect ? "Correct" : "Incorrect"} | Correct: ${q.options[q.answerIndex]}</p>
                <p class="text-muted">Explanation: ${q.explanation}</p>
              </div>`;
            })
            .join("")}
        </div>
      </div>
    </article>
  `;

  state.mockSession = null;
  saveState();
  updateKPIs();
  renderRecommendations();
  buildHomeCards();
}

function attachTopButtons() {
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);

  document.getElementById("searchToggle").addEventListener("click", () => {
    document.getElementById("searchBar").classList.toggle("hidden");
    document.getElementById("globalSearch").focus();
  });

  const toLearn = () => {
    showView("learnView");
    window.scrollTo({ top: document.body.scrollHeight * 0.2, behavior: "smooth" });
  };

  const toMock = () => showView("mockView");
  const toRevision = () => showView("revisionView");

  document.getElementById("startLearningBtn").addEventListener("click", toLearn);
  document.getElementById("exploreUnitsBtn").addEventListener("click", toLearn);
  document.getElementById("heroMockBtn").addEventListener("click", toMock);
  document.getElementById("startMockBtn").addEventListener("click", toMock);
  document.getElementById("heroRevisionBtn").addEventListener("click", toRevision);
  document.getElementById("quickRevisionBtn").addEventListener("click", toRevision);
}

function renderDesignThinkingFlow() {
  const stages = [
    {
      key: "Empathize",
      detail: "Understand users deeply through observation and interviews. Objective cue: first stage and pain-point discovery.",
    },
    {
      key: "Define",
      detail: "Convert insights into a clear user-centered problem statement. Objective cue: POV and HMW framing.",
    },
    {
      key: "Ideate",
      detail: "Generate multiple solutions using brainstorming and sketching. Objective cue: divergent thinking.",
    },
    {
      key: "Prototype",
      detail: "Create low/high-fidelity representations for validation. Objective cue: rapid learning before coding.",
    },
    {
      key: "Test",
      detail: "Run usability tasks, analyze results, and iterate. Objective cue: task success and error rate.",
    },
  ];

  const flow = document.getElementById("thinkingFlow");
  const detail = document.getElementById("flowDetail");
  flow.innerHTML = stages
    .map((s, i) => `<button class="flow-step ${i === 0 ? "active" : ""}" data-flow="${s.key}">${i + 1}. ${s.key}</button>`)
    .join("");
  detail.innerHTML = `<h5>${stages[0].key}</h5><p class="text-sm text-muted">${stages[0].detail}</p>`;

  flow.querySelectorAll("[data-flow]").forEach((btn) => {
    btn.addEventListener("click", () => {
      flow.querySelectorAll(".flow-step").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const selected = stages.find((s) => s.key === btn.getAttribute("data-flow"));
      detail.innerHTML = `<h5>${selected.key}</h5><p class="text-sm text-muted">${selected.detail}</p>`;
    });
  });
}

function setupLabs() {
  const output = document.getElementById("labOutput");
  const setOutput = (title, body) => {
    output.innerHTML = `<h5>${title}</h5><div class="text-sm text-muted mt-2">${body}</div>`;
  };

  document.getElementById("openPersonaLab").addEventListener("click", () => {
    setOutput(
      "Persona Creator Demo",
      `
      <p><strong>Name:</strong> Aditi Sharma, B.Tech CSE 3rd Year</p>
      <p><strong>Goals:</strong> Score high in objective exam, revise fast, practice timed MCQs.</p>
      <p><strong>Pain Points:</strong> Scattered notes, forgotten terminology, weak process-order memory.</p>
      <p><strong>Behavior Pattern:</strong> Learns in short sessions, prefers keyword flashcards and quick tests.</p>
      <p><strong>Tool Preference:</strong> Figma examples + MCQ explanations.</p>
      `
    );
  });

  document.getElementById("openJourneyLab").addEventListener("click", () => {
    setOutput(
      "Journey Map Example",
      `
      <p><strong>Stage 1:</strong> Search topic -> Emotion: Curious -> Pain: Too many scattered resources</p>
      <p><strong>Stage 2:</strong> Learn micro-concepts -> Emotion: Focused -> Pain: Terminology confusion</p>
      <p><strong>Stage 3:</strong> Attempt MCQs -> Emotion: Anxious -> Pain: Process-order mistakes</p>
      <p><strong>Stage 4:</strong> Review explanations -> Emotion: Confident -> Opportunity: better retention</p>
      <p><strong>Stage 5:</strong> Mock test -> Emotion: Prepared -> Outcome: improved score trend</p>
      `
    );
  });

  document.getElementById("openCaseLab").addEventListener("click", () => {
    setOutput(
      "Interactive Case Scenario",
      `
      <p><strong>Problem:</strong> Students skip accessibility topics, losing easy MCQ marks.</p>
      <p><strong>Constraint:</strong> 2 days left for exam.</p>
      <p><strong>Decision:</strong> Prioritize POUR flashcards + expected MCQs + timed mini quiz.</p>
      <p><strong>Result:</strong> Higher recall of accessibility terms and process sequence questions.</p>
      `
    );
  });

  document.getElementById("openResponsiveLab").addEventListener("click", () => {
    setOutput(
      "Responsive Simulator Guide",
      `
      <p>Desktop: multi-column dashboard and sidebar navigation.</p>
      <p>Tablet: condensed cards and stacked controls.</p>
      <p>Mobile: single-column learning flow with touch-friendly buttons.</p>
      <p>Exam Tip: Responsive design MCQs often ask about breakpoints, fluid layout, and mobile-first strategy.</p>
      `
    );
  });

  document.getElementById("openTypographyLab").addEventListener("click", () => {
    setOutput(
      "Typography Comparison",
      `
      <p><strong>Readable UI:</strong> consistent type scale, adequate line-height, strong contrast.</p>
      <p><strong>Poor UI:</strong> random font sizes, low contrast, overcrowded line spacing.</p>
      <p><strong>Exam Focus:</strong> typography improves hierarchy, scanability, and readability.</p>
      `
    );
  });

  document.getElementById("openFrameworkLab").addEventListener("click", () => {
    setOutput(
      "Bootstrap vs Tailwind Comparison",
      `
      <p><strong>Bootstrap:</strong> component-first, faster standard layouts, predefined patterns.</p>
      <p><strong>Tailwind:</strong> utility-first, higher customization, class composition approach.</p>
      <p><strong>MCQ Trap:</strong> Tailwind is not primarily a prebuilt component framework.</p>
      `
    );
  });

  document.getElementById("openResumeLab").addEventListener("click", () => {
    setOutput(
      "Resume Builder Section",
      `
      <p><strong>Header:</strong> role target (UX Designer/Research Intern)</p>
      <p><strong>Skills:</strong> UX Research, Figma, Wireframing, Usability Testing</p>
      <p><strong>Impact Bullet:</strong> Improved task completion by 24% after redesign.</p>
      <p><strong>Keywords:</strong> persona, journey map, accessibility, prototype, design system.</p>
      `
    );
  });

  document.getElementById("openInterviewLab").addEventListener("click", () => {
    setOutput(
      "UX Interview Preparation Cards",
      `
      <p><strong>Card 1:</strong> Explain one project using STAR method.</p>
      <p><strong>Card 2:</strong> Describe one major UX trade-off and why you chose it.</p>
      <p><strong>Card 3:</strong> Discuss how user research changed your final design.</p>
      <p><strong>Card 4:</strong> Show how you measured design success.</p>
      `
    );
  });

  setOutput("Lab Ready", "Choose any interactive lab button to open demo content.");
}

function initialSelection() {
  const first = ALL_CONCEPTS[0];
  if (first) {
    selectConcept(first.id);
  }
}

function init() {
  initTheme();
  buildHomeCards();
  renderCourseraTracker();
  renderUnitNav();
  renderRecent();
  renderBookmarkList();
  renderRecommendations();
  renderRevision();
  renderFlashcards();
  setupTabs();
  setupSearch();
  setupMockControls();
  attachTopButtons();
  renderDesignThinkingFlow();
  setupLabs();
  updateKPIs();
  initialSelection();
}

init();